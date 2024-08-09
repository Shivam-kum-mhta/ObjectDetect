import cv2
import numpy as np
import logging
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from pathlib import Path
from fastapi.routing import APIRouter
from fastapi.responses import JSONResponse
import shutil
from ultralytics import YOLO
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
import os
from fastapi.middleware.cors import CORSMiddleware
# Load the model
model = YOLO('yolov10n.pt')

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. You can specify specific origins instead.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.). You can specify specific methods instead.
    allow_headers=["*"],  # Allows all headers. You can specify specific headers instead.
)


def detection(input_video_path: str) -> str:
    count = 0

    # Open the video
    cap = cv2.VideoCapture(str(input_video_path))

    # Get video properties, to be used to process
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    output_video_path = str(input_video_path).split('.')[0] + '-out.mp4'

    # Number of skips
    num_skips = frames // 200
    print(f"Frames = {frames}, Number of skips: {num_skips}")

    # Define the codec and create VideoWriter object - to write output video
    out = cv2.VideoWriter(output_video_path, fourcc, fps, (width, height))

    # Until there is a frame left, run the loop - skip num_skip frames
    while cap.isOpened():
        
        ret, frame = cap.read()
        # If the frame is not there, break
        for i in range(num_skips):
            if not ret:
                break
            ret, frame = cap.read()
        if not ret:
            break

        # Run YOLO model on the frame selected
        results = model(frame)
        count += 1

        # For all the result boxes, plot them into a frame
        annotated_frame = results[0].plot()

        # Write the annotated frame to the output video
        out.write(annotated_frame)

    # Close everything
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    print(f"{count} frames processed.")
    return output_video_path





def image_detection (input_image_path):
  # Run YOLO model on the image
  results = model(input_image_path)

  # For all the result boxes, plot them into a frame
  annotated_frame = results[0].plot()
#   display(annotated_frame)

  # Store them in .jpg
  cv2.imwrite(input_image_path.split('.')[0] + '-out.jpg', annotated_frame)
  return input_image_path.split('.')[0] + '-out.jpg'

# def image_detection(input_image_path):
#     # Run YOLO model on the image
#     results = model(input_image_path)

#     # For all the result boxes, plot them into a frame
#     annotated_frame = results[0].plot()

#     # Generate the output file path with .jpg extension
#     output_image_path = input_image_path.split('.')[0] + '-out.jpg'

#     # Save the annotated frame as a .jpg file
#     cv2.imwrite(output_image_path, annotated_frame)

#     # Return the output image path
#     return output_image_path





# Directory to save uploaded files temporarily
# Get the absolute path of the root directory
ROOT_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

# Create routers
image_router = APIRouter()
video_router = APIRouter()

@image_router.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    # Verify file type
    if file.content_type not in ["image/jpeg", "image/png", "image/gif"]:
        raise HTTPException(status_code=400, detail="Invalid image format")
    
    file_path = UPLOAD_DIR / file.filename
    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Process the video and get the output file path
    output_file_path = image_detection(str(file_path))
    print("output_file_path&&&&&&&&&&&&&&&&&&&&7777== ", output_file_path)
    # output_image_path = Path(input_image_path).with_suffix('-out.jpg')
     # Return the processed file as a downloadable response
      # Check if the file exists
    if not os.path.exists(output_file_path):
        print("ssssssssssssssssssssss")
        raise HTTPException(status_code=500, detail="Processed file not found.")

    return FileResponse(output_file_path ,media_type="image/jpeg", filename=file.filename)



@video_router.post("/upload-video/")
async def upload_video(file: UploadFile = File(...)):
    # Verify file type
    if file.content_type not in ["video/mp4", "video/mpeg", "video/avi"]:
        raise HTTPException(status_code=400, detail="Invalid video format")

    # Save the file to the upload directory
    file_path = UPLOAD_DIR / file.filename
    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Process the video and get the output file path
    output_file_path = detection(str(file_path))

    # Return the processed file as a downloadable response
    return FileResponse(output_file_path, media_type="video/mp4", filename=file.filename)

# Register routers with the FastAPI app
app.include_router(image_router, prefix="/image")
app.include_router(video_router, prefix="/video")

# Root endpoint for testing
@app.get("/")
async def root():
    return {"message": "Welcome to the image and video upload API"}

if __name__ == "__main__":
    import uvicorn
    logging.basicConfig(level=logging.INFO)
    uvicorn.run(app, host="127.0.0.1", port=8002)

# ObjectDetect
ObjectDetect is a versatile object detection system designed to provide accurate recognition of objects in both real-time and static images  utilizing cutting-edge convolutional neural networks (CNNs)

## Overview

This project is designed to detect objects in images and videos using the YOLOv10 model. The backend is built using FastAPI, and it provides endpoints to upload images and videos for processing. The processed files are then made available for download.

## Features

- *Image Detection*: Upload an image to get object detection results with bounding boxes.
- *Video Detection*: Upload a video to get object detection results on each frame.

## Prerequisites

- Python 3.8 or higher
- pip for Python package management

## Installation

1. *Clone the Repository*

   bash
   git clone https://github.com/yourusername/object-detection-project.git
   cd object-detection-project
   

2. *Create and Activate a Virtual Environment*

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. *Install Dependencies*

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. *Start the Server*

   ```bash
   uvicorn main:app --host 127.0.0.1 --port 8002
   ```

2. *Endpoints*

   - *Upload Image*

     
     POST /image/upload-image/
     

     *Request:*

     - *Content-Type*: multipart/form-data
     - *Body*: An image file (image/jpeg, image/png, image/gif)

     *Response:*

     - *200 OK*: Returns a JSON object with a success message and the output file path.
     - *400 Bad Request*: Invalid image format.
     - *500 Internal Server Error*: Issues with file processing.

   - *Upload Video*

     
     POST /video/upload-video/
     

     *Request:*

     - *Content-Type*: multipart/form-data
     - *Body*: A video file (video/mp4, video/mpeg, video/avi)

     *Response:*

     - *200 OK*: Returns a JSON object with a success message and the output file path.
     - *400 Bad Request*: Invalid video format.
     - *500 Internal Server Error*: Issues with file processing.

3. *CORS Configuration*

   The server allows cross-origin requests from any origin.
   
## Testing

You can test the API using tools like Postman or CURL, or by integrating it with a frontend application.


## Contributing

Feel free to open issues or submit pull requests if you have improvements or fixes.

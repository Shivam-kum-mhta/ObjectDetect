# ObjectDetect
ObjectDetect is a versatile object detection system designed to provide accurate recognition of objects in both real-time and static images  utilizing cutting-edge convolutional neural networks (CNNs)

![pic1](https://github.com/Shivam-kum-mhta/ObjectDetect/blob/main/images/Screenshot%202024-08-11%20003231.png)
![pic2](https://github.com/Shivam-kum-mhta/ObjectDetect/blob/main/images/Screenshot%202024-08-10%20225511.png)


## Overview

This project is designed to detect objects in images and videos using the YOLOv10 model. The backend is built using FastAPI, and it provides endpoints to upload images and videos for processing. The processed files are then made available for download.


## Problem Statement
In today's fast-paced world, there is a growing need for applications
        that can provide real-time situational awareness in various fields such
        as security, healthcare, retail, and transportation. Object detection
        technology, powered by Convolutional Neural Networks (CNNs), has the
        potential to revolutionize these fields by identifying and classifying
        objects in real-time, thereby enhancing decision-making and operational
        efficiency.
        
## Features

- *Image Detection*: Upload an image to get object detection results with bounding boxes.
- *Video Detection*: Upload a video to get object detection results on each frame.

## Prerequisites

- Python 3.10 or higher . We worked on Python 3.10.0
- pip for Python package management

## Installation

1. *Clone the Repository*

   ```bash
   git clone https://github.com/Shivam-kum-mhta/ObjectDetect.git
   ```
   

2. *Create and Activate a Virtual Environment*

   ```bash
   python -m venv venv
   venv\Scripts\activate   # On Windows, use `source venv/bin/activate`
   ```

3. *Install Dependencies*

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. *Start the Server*

   ```bash
        python app.py
   ```
2. *Start Frontend*
```bash
   cd frontend
   npm i
   npm run dev
```

### Endpoints

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
### CORS Configuration 

   The server allows cross-origin requests from any origin.
   

## Contributing

Feel free to open issues or submit pull requests if you have improvements or fixes.

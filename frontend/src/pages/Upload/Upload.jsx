import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa"; // Icon for upload button

const Upload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [imageDownloadLink, setImageDownloadLink] = useState(null);
  const [videoDownloadLink, setVideoDownloadLink] = useState(null);
  const [uploading, setUploading] = useState(false); // For handling upload state

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", imageFile);
    setUploading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8002/image/upload-image/",
        formData,
        {
          responseType: "blob",
          timeout: 120000, // Timeout in milliseconds
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setImageDownloadLink(url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleVideoUpload = async () => {
    const formData = new FormData();
    formData.append("file", videoFile);
    setUploading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8002/video/upload-video/",
        formData,
        {
          responseType: "blob",
          timeout: 120000,
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setVideoDownloadLink(url);
    } catch (error) {
      console.error("Error uploading video:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-white mt-7 text-6xl text-center">
        Pixel Prodigies 🚀
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <span className="text-white mx-2">&gt;&gt;</span>
        <Link to="/upload" className="text-white hover:text-gray-300">
          Upload
        </Link>
      </div>

      <div className="flex gap-12 mt-12 justify-center items-center">
        {/* Image Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <div className="text-center text-gray-700 mb-4 text-2xl">
            <FaCloudUploadAlt className="inline-block mb-2 text-3xl" /> Upload Image
          </div>
          <input
            type="file"
            accept="image/*"
            className="w-full text-sm text-gray-700"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <button
            className="w-full mt-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center"
            onClick={handleImageUpload}
            disabled={uploading || !imageFile}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
          {imageDownloadLink && (
            <div className="mt-4 text-center">
              <a
                href={imageDownloadLink}
                download={imageFile.name}
                className="text-blue-500 hover:text-blue-700"
              >
                Download Image
              </a>
            </div>
          )}
          <div className="mt-2 text-sm text-gray-500 text-center">
            PNG, JPG, GIF up to 10MB.
          </div>
        </div>

        {/* Video Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <div className="text-center text-gray-700 mb-4 text-2xl">
            <FaCloudUploadAlt className="inline-block mb-2 text-3xl" /> Upload Video
          </div>
          <input
            type="file"
            accept="video/*"
            className="w-full text-sm text-gray-700"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
          <button
            className="w-full mt-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg flex items-center justify-center"
            onClick={handleVideoUpload}
            disabled={uploading || !videoFile}
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
          {videoDownloadLink && (
            <div className="mt-4 text-center">
              <a
                href={videoDownloadLink}
                download={videoFile.name}
                className="text-blue-500 hover:text-blue-700"
              >
                Download Video
              </a>
            </div>
          )}
          <div className="mt-2 text-sm text-gray-500 text-center">
            MP4, AVI, MKV up to 40MB.
          </div>
        </div>
      </div>

      {/* Add a subtle progress bar */}
      {uploading && (
        <div className="w-full max-w-md mt-8">
          <div className="bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;

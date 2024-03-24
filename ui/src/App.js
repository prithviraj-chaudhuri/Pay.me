import React, { useRef, useState, useEffect } from 'react';
import { checkDeviceType } from './helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const deviceType = checkDeviceType();
  const isMobile = deviceType === 'Mobile';

  const renderUploadSection = () => {
    if (isMobile) {
      return (
        <div className="ios-button-container">
          <label htmlFor="cameraInput" className="btn ios-button">Upload Image</label>
          <input type="file" style={{display:'none'}} capture="camera" accept="image/*" id="cameraInput" name="cameraInput"></input>
        </div>
      );
    }
  }


  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageUrl);
  };

  return (
  <div className="ios-style ios-container">
    <h1 className="mt-5 mb-4 text-center ios-title">Pay.me</h1>
    {/* <div className="mt-4 ios-camera-container">
      <div className="ios-camera-viewfinder">
        {capturedImage && <img src={capturedImage} alt="Captured" className="img-fluid" />}
        <video ref={videoRef} className="ios-video" playsInline autoPlay muted />
        <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput"></input>
      </div>
    </div>

    <div className="ios-button-container">
      <button className="btn ios-button" onClick={captureImage}>Capture Image</button>
    </div> */}
    {renderUploadSection()}
  </div>
);
}

export default App;

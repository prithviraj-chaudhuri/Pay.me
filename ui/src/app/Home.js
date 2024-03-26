import React, { useRef, useState, useEffect } from 'react';
import { checkDeviceType, callReceiptApi } from '../common/helper';

import './Home.css';

function Home() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const deviceType = checkDeviceType();
  const isMobile = deviceType === 'Mobile';

  const addedImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCapturedImage(reader.result);
    };
    reader.readAsDataURL(file);
    callReceiptApi(file);
    alert('Image uploaded successfully');
  }

  const renderUploadSection = () => {
    // if (isMobile) {
      return (
        <div>
          <label htmlFor="cameraInput" className="btn ios-button">Upload Image</label>
          <input type="file" style={{display:'none'}} capture="camera" accept="image/*" id="cameraInput" onChange={addedImage} name="cameraInput"></input>
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //       <div className="mt-4 ios-camera-container">
    //         <div className="ios-camera-viewfinder">
    //           {capturedImage && <img src={capturedImage} alt="Captured" className="img-fluid" />}
    //           <video ref={videoRef} className="ios-video" playsInline autoPlay muted />
    //         </div>
    //       </div>

    //       <div className="ios-button-container">
    //         <button className="btn ios-button" onClick={captureImage}>Capture Image</button>
    //       </div>
    //     </div>
    //   );
    // }
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
    <div class="row width-100">
      <div class="col-sm-12 center-div pad-top">
        {renderUploadSection()}
      </div>
    </div>
  );
}

export default Home;

import { useState } from 'react';
import Cookies from 'js-cookie';
import { callReceiptApi, getExpirationDate } from '../common/helper';

import './Home.css';

function Home() {

  const [showLoading, setShowLoading] = useState(false);

  const handleCameraInput = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    setShowLoading(true);
    const response = await callReceiptApi(file);
    if (response === false) {
      console.error('Error: API Error');
      setShowLoading(false);
    } else {
      console.log('Response:', response);
      setShowLoading(false);
      Cookies.set('receiptData', JSON.stringify(response), { expires: getExpirationDate() });
      window.location.href = '/users';
    }
  }

  const renderUploadSection = () => {
      return (
        <div>
          <label htmlFor="cameraInput" className="btn ios-button">Upload Image</label> 
          <input type="file" style={{display:'none'}} capture="camera" accept="image/*" id="cameraInput" onChange={handleCameraInput} name="cameraInput"></input>
        </div>
      );
  }

  return (
    <div class="row width-100">
      <div class="col-sm-12 center-div pad-top">
        {showLoading && 
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
            </div>
          </div>
        }
        {!showLoading && renderUploadSection()}
      </div>
    </div>
  );
}

export default Home;

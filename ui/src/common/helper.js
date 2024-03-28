import axios from 'axios';

export function checkDeviceType() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/.test(navigator.userAgent) && !/Mobile/.test(navigator.userAgent);
    
    let deviceType = '';
    if (isMobile) {
      deviceType = 'Mobile';
    } else if (isTablet) {
      deviceType = 'Tablet';
    } else {
      deviceType = 'Desktop';
    }
    
    return deviceType;
}

export async function callReceiptApi(image) {
  const url = 'http://192.168.1.180:8000/receipt/json';

  const formData = new FormData();
  formData.append('image', image);

  const username = 'user';
  const password = 'pass';
  const authHeader = 'Basic ' + btoa(username + ':' + password);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      },
    });

    if (response.status !== 200) {
      console.error('Error:', response.status);
      return false;
    }

    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

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
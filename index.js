import QRCode from 'qrcode';
//url netlify
const url = 'https://istifano.netlify.app'; 

QRCode.toFile('qr-code.png', url, {
  color: {
    dark: '#000',  // Black dots
    light: '#FFF'  // White background
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated!');
});     
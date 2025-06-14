import QRCode from 'qrcode';
//url netlify
const url = ''; 

QRCode.toFile('qr-code.png', url, {
  color: {
    dark: '#000',  // Black dots
    light: '#FFF'  // White background
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated!');
});     
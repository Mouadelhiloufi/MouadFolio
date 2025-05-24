import QRCode from 'qrcode';

// Replace with your actual Vercel deployment URL after deploying
const url = 'https://baaziz-wissal-portfolio.vercel.app'; 

QRCode.toFile('qr-code.png', url, {
  color: {
    dark: '#000',  // Black dots
    light: '#FFF'  // White background
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated!');
});     
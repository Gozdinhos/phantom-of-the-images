document.getElementById('uploaded_file').addEventListener('change', function (e) {
  const canvas = document.getElementById('img-canvas');
  const imgContext = document.getElementById('img-canvas').getContext('2d');

  let img = new Image();
  // img.style.height = '500px';
  // img.style.width = '500px';
  // img.src = e.target.files[0];
  console.log(e.target.files[0]);
  img.src = URL.createObjectURL(e.target.files[0]);

  // uploadSec.appendChild(img);

  img.onload = function () {
    imgContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
  };
});

function showChannels() {
  const canvas = document.getElementById('img-canvas');
  const imgContext = document.getElementById('img-canvas').getContext('2d');
  let imageData = imgContext.getImageData(0, 0, canvas.width, canvas.height);
  // (0.3 * R) + (0.59 * G) + (0.11 * B)
  for (let index = 0; index < imageData.data.length; index += 4) {
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const a = imageData.data[index + 3];
    const newVal = r * 0.3 + g * 0.59 + b * 0.11;
    imageData.data[index] = newVal;
    imageData.data[index + 1] = newVal;
    imageData.data[index + 2] = newVal;
  }
  console.log(imageData);
  imgContext.putImageData(imageData, 0, 0);
}

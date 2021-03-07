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

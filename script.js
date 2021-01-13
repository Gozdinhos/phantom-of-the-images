/* let uploaded_file = document.getElementById('uploaded-file'),
  preview = document.getElementById('preview');

uploaded_file.addEventListener('change', function () {
  uploadImage(this);
});

function uploadImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
} */

document
  .getElementById('uploaded_file')
  .addEventListener('change', function (e) {
    let newImage = document.createElement('img');

    newImage.src = e.target.files[0];
    console.log(e.target.files[0]);
    newImage.src = URL.createObjectURL(e.target.files[0]);

    output.appendChild(newImage);
  });

/* function encodeImageFileAsURL() {
  var filesSelected = document.getElementById('uploaded_file').files;
  if (filesSelected.length > 0) {
    let fileToLoad = filesSelected[0];

    let fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      let srcData = fileLoadedEvent.target.result; // <--- data: base64

      let newImage = document.createElement('img');
      newImage.src = srcData;

      document.getElementById('imgTest').innerHTML = newImage.outerHTML;
      alert(
        'Converted Base64 version is ' +
          document.getElementById('imgTest').innerHTML
      );
      console.log(
        'Converted Base64 version is ' +
          document.getElementById('imgTest').innerHTML
      );
    };
    fileReader.readAsDataURL(fileToLoad);
  }
} */

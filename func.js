const app = document.getElementById("app");

// Font Section
const headerInput = document.getElementById("header-input");
const headerOutput = document.getElementById("header-output");

// text range
const headRange = document.getElementById("header-range");
// font color
const fontColor = document.getElementById("font-color");
// text align
const textAlign = document.getElementById("text-align");
// text decoration
const textDecorate = document.getElementById("text-decorate");
// font family
const fontFamily = document.getElementById("font-family");
// font weight
const fontWeight = document.getElementById("font-weight");
// font style
const fontStyle = document.getElementById("font-style");

// Font Function
app.addEventListener("input", function () {
  headerOutput.innerHTML = headerInput.value;
  headerOutput.style.fontSize = `${headRange.value}px`;
  headRange.nextElementSibling.innerHTML = `${headRange.value}px`;

  // font color
  headerOutput.style.color = fontColor.value;
  // text align
  headerOutput.style.textAlign = textAlign.value;
  // text decoration
  headerOutput.style.textDecoration = textDecorate.value;
  // font family
  headerOutput.style.fontFamily = fontFamily.value;
  // font weight
  headerOutput.style.fontWeight = fontWeight.value;
  // font style
  headerOutput.style.fontStyle = fontStyle.value;
});

// Image Section

// image link
const imageInputLink = document.getElementById("image-input-link");
// image file
const imageInputFile = document.getElementById("image-input-file");
// image output
const imageOutput = document.getElementById("image-output");
// image size
const imageRange = document.getElementById("image-range");

// Image Function
app.addEventListener("input", function () {
  if (imageInputFile.value == "") {
    imageOutput.src = imageInputLink.value;
  } else {
    imageOutput.src = URL.createObjectURL(imageInputFile.files[0]);
  }

  imageOutput.style.width = `${imageRange.value}px`;
  imageRange.nextElementSibling.innerHTML = `${imageRange.value}px`;
});

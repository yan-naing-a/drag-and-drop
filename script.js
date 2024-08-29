//DOM Elements
const boxes = document.querySelectorAll(".box");
const image = document.getElementsByClassName("image")[0];

//drag and drop function
boxes.forEach((box) => {
  box.addEventListener("dragover", (event) => {
    event.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", (event) => {
    box.classList.remove("hovered");
  });

  box.addEventListener("drop", (event) => {
    box.append(image); //move image tag to the new box
    box.classList.remove("hovered");
  });
});

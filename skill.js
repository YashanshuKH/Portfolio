
// Map of triggers: button class → info box class
const triggers = {
  angular: ".angularinfo",
  javascript: ".javainfo",
  communicate: ".communicateinfo",
  html: ".htmlinfo",
  css: ".cssinfo"
};

const infoContainer = document.querySelector(".info");
const cross = document.querySelector(".cross");

let activeButton = null; // Track the currently active button

Object.entries(triggers).forEach(([key, infoSelector]) => {
  const button = document.querySelector(`.${key}`);
  const infoBox = document.querySelector(infoSelector);

  button.addEventListener("click", () => {
    hideAllInfo(); // hide previous info boxes
    if (activeButton) activeButton.classList.remove("active"); // remove style from previous button

    button.classList.add("active"); 
    infoContainer.style.visibility = "visible";

    infoBox.style.visibility = "visible";
    infoContainer.classList.add("animate");


    activeButton = button; // update active button
  });
});

cross.addEventListener("click", () => {
  hideAllInfo();
  infoContainer.style.visibility = "hidden";
    infoContainer.classList.remove("animate");

  if (activeButton) activeButton.classList.remove("active"); // remove button style
  activeButton = null;
});

function hideAllInfo() {
  Object.values(triggers).forEach(selector => {
    const box = document.querySelector(selector);
    box.style.visibility = "hidden";
  });
}

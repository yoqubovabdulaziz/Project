const openModal = document.querySelector(".about__video");
const modalContent = document.getElementById("modal");
const closeModal = document.querySelector(".close__modal");
const main = document.getElementById("main");

openModal.addEventListener("click", () => {
  modalContent.style.display = "block";
  closeModal.style.display = "inline-block";
});

closeModal.addEventListener("click", () => {
  closeModal.style.display = "none";
  modalContent.style.display = "none";
});
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

const accordionBtn = document.querySelectorAll(".faq__accordion__btn");
const accordionContent = document.querySelectorAll(".accordion__content");
let isOpen = false;

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      accordionBtn[i].classList.add("show__accordion");
    } else {
      accordionBtn[i].classList.remove("show__accordion");
    }
  });
}


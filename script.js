document.addEventListener("DOMContentLoaded", function () {
  // Atur scroll ke elemen atas halaman saat halaman direfresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
});

const pop = document.querySelector("#ss");
const popUpC = document.querySelector("#pop-up-c");
const close = document.querySelector("#close");

pop.addEventListener("click", () => {
  popUpC.classList.add("show");
});

close.addEventListener("click", () => {
  popUpC.classList.remove("show");
});

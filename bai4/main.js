let btnBars = document.querySelector(".nav-btn-bars");
let btnClose = document.querySelector(".nav-btn-close");
let menu = document.querySelector(".nav-menu");
let btnFilter = document.querySelector(".filter button");
let filterBox = document.querySelector(".filter-box");
let inputPC = document.querySelector(".input-pc");
let containerFilter = document.querySelector(".filter");

let frag = true;

btnBars.addEventListener("click", () => {
  btnBars.classList.add("hide");
  menu.classList.remove("hide");
  btnClose.classList.remove("hide");
});

btnClose.addEventListener("click", () => {
  menu.classList.add("hide");
  btnClose.classList.add("hide");
  btnBars.classList.remove("hide");
  btnClose.classList.add("hide");
});

btnFilter.addEventListener("click", () => {
  frag = !frag;
  if (frag === true) {
    filterBox.classList.add("hide");
    // document.body.classList.remove("stop-scrolling");
  } else {
    filterBox.classList.remove("hide");
    // document.body.classList.add("stop-scrolling");
  }
});

function resizeFunc() {
  if (document.documentElement.offsetWidth > 640) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }

  if (document.documentElement.offsetWidth > 1280) {
    inputPC.classList.remove("hide");
    filterBox.classList.remove("hide");
    containerFilter.classList.add('hide')
  } else {
    inputPC.classList.add("hide");
    filterBox.classList.add("hide");
    containerFilter.classList.remove('hide')

  }
}
resizeFunc();

"use strict";

let adds = document.querySelectorAll("article");

function handleHazclick(e) {
  window.open("http://google.es");
}

for (const ad of adds) {
  ad.addEventListener("click", handleHazclick);
}

let botonbuble = document.querySelector("#bubbling");
let botonbubleNo = document.querySelector("#nobubbling");

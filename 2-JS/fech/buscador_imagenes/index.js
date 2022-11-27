"use strict";
const form = document.querySelector("form");
const app = document.querySelector("section.app");

const doSearch = async (e) => {
  e.preventDefault();
  console.log("tucara");
};
form.addEventListener("submit", doSearch);

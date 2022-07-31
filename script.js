"use strict";

// FIRST DROPDOWN
let js_dropdown_holder = document.querySelector(".js_dropdown_holder");
let js_dropdown = document.querySelector(".js_dropdown");

js_dropdown_holder.addEventListener("click", function () {
  js_dropdown.classList.toggle("js_dropdown_active");
  return;
});

// SECOND DROPDOWN
// let js_dropdown_holder_Two = document.querySelector(".js_dropdown_holder_Two");
// let js_dropdown_Two = document.querySelector(".js_dropdown_Two");

// js_dropdown_holder_Two.addEventListener("click", function () {
//   js_dropdown_Two.classList.toggle("js_dropdown_active");
//   return;
// });

// THIRD DROPDOWN
// let js_dropdown_holder_Three = document.querySelector(
//   ".js_dropdown_holder_Three"
// );
// let js_dropdown_Three = document.querySelector(".js_dropdown_Three");

// js_dropdown_holder_Three.addEventListener("click", function () {
//   js_dropdown_Three.classList.toggle("js_dropdown_active");
//   return;
// });

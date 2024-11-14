/* eslint-disable */
import "./index.html";

let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "My turle",
  "The police",
  "A bad friend",
  "A crocodile"
];
let action = [
  "painted over",
  "gifted",
  "stole",
  "crushed",
  "tore",
  "burned",
  "sold",
  "hid"
];
let what = [
  "my homework",
  "my phone",
  "my car",
  "my computer",
  "my ID",
  "my wallet"
];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "before the flight"
];
//Generates random numbers to select an item from each array. Outputs an array of 4 indexes.
let fullSet = [who, action, what, when];

function randomPick(arr) {
  let size = arr.length - 1;
  let random = Math.round(Math.random() * size);
  return arr[random];
}

function buildExcuse(arr) {
  let excuse = [];
  for (let ele of arr) {
    let randomPiece = randomPick(ele);
    excuse.push(randomPiece);
  }
  return excuse.join(" ");
}

window.onload = function() {
  //write your code here
  let excuse = buildExcuse(fullSet);
  document.getElementById("excuse").innerHTML = excuse;
};

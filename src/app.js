/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
function randomGen() {
  let dataLength = [who.length, action.length, what.length, when.length];
  let randomSel = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * dataLength[i]);
    randomSel.push(num);
  }
  return randomSel;
}
//Takes an array of indexes as input, and outputs a single string with a randomly generated excuse.
function excuseBuilder(array) {
  let excuse = `${who[array[0]]} ${action[array[1]]} ${what[array[2]]} ${
    when[array[3]]
  }`;
  return excuse;
}
window.onload = function() {
  let selectRandom = randomGen();
  let excuseRandom = excuseBuilder(selectRandom);
  document.getElementById("excuse").innerHTML = excuseRandom;
};

`use strict`
import * as DOM from './dom.js';

let btnAdd = DOM.btnADD;
let btnSub = DOM.btnSub;
let btnMul = DOM.btnMul;
let btnDiv = DOM.btnDiv;
let listView = DOM.listView;
btnAdd.onclick = function() {addition()};
btnSub.onclick = function() {subtraction()};
btnMul.onclick = function() {multiplication()};
btnDiv.onclick = function() {division()};

function addition() {
    let num1 = parseInt(DOM.inputOne.value);
    let num2 = parseInt(DOM.inputTwo.value);
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(num1 + num2));
    listView.appendChild(listItem);
}

function multiplication() {
    let num1 = parseInt(DOM.inputOne.value);
    let num2 = parseInt(DOM.inputTwo.value);
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(num1 * num2));
    listView.appendChild(listItem);
}

function subtraction() {
    let num1 = parseInt(DOM.inputOne.value);
    let num2 = parseInt(DOM.inputTwo.value);
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(num1 - num2));
    listView.appendChild(listItem);
}

function division() {
    let num1 = parseInt(DOM.inputOne.value);
    let num2 = parseInt(DOM.inputTwo.value);
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(num1 / num2));
    listView.appendChild(listItem);
}
const create_button = document.getElementById("button");
const output = document.getElementById("output");
const number = document.getElementById("numberarea");
const clipboard = document.getElementById("copyArea");

let letterlist =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";

function randomString(length) {
  let result = "";
  let letterlistLength = letterlist.length;
  for (let i = 0; i < length; i++) {
    result += letterlist.charAt(Math.floor(Math.random() * letterlistLength));
  }
  return result;
}

function neueFunktion() {
  let numbervalue = number.value;
  let password = randomString(numbervalue);
  output.innerText = password;
}

create_button.addEventListener("click", neueFunktion);

function passwordLength() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}

clipboard.addEventListener("click", copyToClipBoard);

function copyToClipBoard() {
  let text = output.innerText;
  navigator.clipboard.writeText(text);
}

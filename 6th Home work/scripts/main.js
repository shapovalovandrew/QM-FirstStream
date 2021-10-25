var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}
var myVariable = document.querySelector('h1');
alert('hello!');

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://media4.giphy.com/media/akSgUX3xhCUUI0Ws8y/giphy.gif?cid=ecf05e47d60ind3092tlrspczk05r8mkdx0sksf7tp58mvq5&rid=giphy.gif&ct=s') {
      myImage.setAttribute ('src','https://media4.giphy.com/media/akSgUX3xhCUUI0Ws8y/giphy.gif?cid=ecf05e47d60ind3092tlrspczk05r8mkdx0sksf7tp58mvq5&rid=giphy.gif&ct=s');
    } else {
      myImage.setAttribute ('src','https://media4.giphy.com/media/akSgUX3xhCUUI0Ws8y/giphy.gif?cid=ecf05e47d60ind3092tlrspczk05r8mkdx0sksf7tp58mvq5&rid=giphy.gif&ct=s');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
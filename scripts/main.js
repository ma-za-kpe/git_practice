//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//document.querySelector('html').onclick = function() {
  //  alert('Ouch! Stop poking me!');
//}
/*
var myHTML = document.querySelector('html');
myHTML.onclick = function() {};
*/

var myImage = document.querySelector('img');
myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/success_job.jpg') {
        myImage.setAttribute('src','images/coding.png');
  } else {
        myImage.setAttribute ('src','images/success_job.jpg');
  }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("please enter your name.");
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mazakpe is cool, ' + myName;

}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = 'Mazakpe is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

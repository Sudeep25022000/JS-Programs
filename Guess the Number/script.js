'use strict';
console.log(document.querySelector('.message').textContent);
//.message is an class and #message is a id.

document.querySelector('.message').textContent = '🎉 Correct Number!!'; //.message is the class in index.html
console.log(document.querySelector('.message').textContent); //reading the .message content

document.querySelector('.number').textContent = 13; //.number is a class in index.html
document.querySelector('.score').textContent = 10; //.score is a class in index.html

//document.querySelector('.guess').value = 23; //value property is used to set the value as input in the blank field ie in the box in the left side of the console.
//console.log(document.querySelector('.guess').value);

//Defining a secret number - 
var Secretnumber = Math.trunc(Math.random() * 20) + 1; //between 1 to 20 including 20
document.querySelector('.number').textContent = Secretnumber; //geberates random number in between 1 - 20 in the .number class block.

document.querySelector('.check').addEventListener('click', function() {
    var guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '😫 No Number!!'; //if there is no number prints .message class as No Number!!
    } else if (guess === Secretnumber) {
        document.querySelector('.message').textContent = '😄 Correct Number!!';
    } else if (guess > Secretnumber) {
        document.querySelector('.message').textContent = '😪 Too high!!';
    } else if (guess < Secretnumber) {
        document.querySelector('.message').textContent = '🥱 Too low!!';
    }

}); //listen for events Eg: Click
//click: is the type or the name of the event
//:function ie to tbe added to the code ie called as event handeller.




//
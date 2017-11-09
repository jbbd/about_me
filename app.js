'use strict';

var tally = 0;

var userName = prompt("Hello! May I ask for your name, please?");
alert('Welcome, ' + userName + '!');

var likesPineapplePizza = prompt('Does Jules like pineapple pizza?').toLowerCase();
if (likesPineapplePizza === 'y' ||
    likesPineapplePizza === 'yes'){
      alert('Correct!');
      tally++;
    }else if(likesPineapplePizza == 'n' ||
             likesPineapplePizza == 'no'){
               alert('Actually, that\'s Jules\' favorite type of Pizza!');
            }
console.log("Does Jules like pizza", likesPineapplePizza);

var favoriteConsole = prompt('Do you think Jules\' favorite gaming console is the PS4?').toLowerCase();
if (favoriteConsole === 'y' ||
    favoriteConsole === 'yes'){
      alert('Jules is not a dirty console peasant! PC Master Race forever!');
    }else if(favoriteConsole == 'n' ||
             favoriteConsole == 'no'){
               alert('Correct! PC Master Race! Praise Gaben!')
               tally++;
             }
console.log("Favorite gaming console", favoriteConsole);

var isJulesNice = prompt('Would Jules\' save you if you were being attacked by a bear?').toLowerCase();
if (isJulesNice === 'y' ||
    isJulesNice === 'yes'){
      alert('He would defintely save you, ' + userName + '!');
      tally++;
    }else if(isJulesNice === 'n' ||
             isJulesNice === 'no'){
               alert("No! What do you take him for? A coward?!");
             }
console.log("Will prevent bear attack", isJulesNice);

var likesRain = prompt('Does Jules like rain?').toLowerCase();
if (likesRain === 'y' ||
    likesRain === 'yes'){
     alert('Jules hates rainy days!');
   }else if(likesRain == 'n' ||
            likesRain == 'no'){
              alert('Correct! Sunny days are much better.');
              tally++;
            }
console.log("Does Jules like rain", likesRain);

var isCatPerson = prompt('Jules is totally a cat person! Don\'t you think so,  ' + userName + '?').toLowerCase();
if (isCatPerson === 'y' ||
    isCatPerson === 'yes'){
     alert('As much as he likes cats, he likes dogs a little bit more!');
   }else if(isCatPerson === 'n' ||
            isCatPerson === 'no'){
              alert("Yup - he is actually allergic to cats!");
              tally++;
            }
console.log("Is Jules a cat person?", isCatPerson);

var faveNum = 14;
  for (var i = 1; i <= 4; i++){
    do
      var guessNum = parseInt(prompt("What's my favorite number?\nHint: It's between 1 and 50."));
    while(isNaN(guessNum));
    if (i == 4){
      alert('Sorry, but my favorite number is ' + 14 + '.');
    }else if (guessNum > 14){
      alert("Guess lower!");
    } else if(guessNum < 14){
      alert("Guess higher!");
    } else if(guessNum === 14){
      alert('You got it!');
      tally++;
      break;
    }
  }
  console.log('user guessd number', guessNum);

var whatState;
var counter = 0;
var listStates = ['california', 'new york', 'louisiana', 'oregon'];
outer_loop:
while(counter < 6){
  whatState = prompt("What State would I visit?").toLowerCase();
    if (listStates.includes(whatState)){
      alert("Congrats! You guessed right!");
      tally++;
      break outer_loop;
    }else{
      alert("Incorrect.");
      counter++;
    }
} if (counter == 6){
  alert("Sorry, but I would like to visit " + listStates);
}
console.log('State guessed', whatState);
console.log('Tally count', tally);

if (tally == 0 || tally == 1){
  alert("You got " + tally + " questions right? Aww man...");
}else if(tally < 3){
  alert(tally + " out of 7? Maybe next time, " + userName);
}else if(tally < 5){
  alert(tally + " out of 7. I guess that's ok, " + userName);
}else if(tally <= 6){
  alert(tally + " out of 7. Pretty good, " + userName);
}else if(tally == 7){
  alert("Wow, " + userName + "! Great guessing! \*High fives\*");
}

'use strict';

var userName = prompt("Hello! May I ask for your name, please?");
alert('Welcome, ' + userName + '!');

var likesPineapplePizza = prompt('Does Jules like pineapple pizza?').toLowerCase();
if (likesPineapplePizza === 'y' ||
    likesPineapplePizza === 'yes'){
      alert('Correct!');
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
             }
console.log("Favorite gaming console", favoriteConsole);

var isJulesNice = prompt('Would Jules\' save you if you were being attacked by a bear?').toLowerCase();
if (isJulesNice === 'y' ||
    isJulesNice === 'yes'){
      alert('He would defintely save you, ' + userName + '!');
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
            }
console.log("Does Jules like rain", likesRain);

var isCatPerson = prompt('Jules is totally a cat person! Don\'t you think so,  ' + userName + '?').toLowerCase();
if (isCatPerson === 'y' ||
    isCatPerson === 'yes'){
     alert('As much as he likes cats, he likes dogs a little bit more!');
   }else if(isCatPerson === 'n' ||
            isCatPerson === 'no'){
              alert("Yup - he is actually allergic to cats!");
            }
console.log("Is Jules a cat person?", isCatPerson);

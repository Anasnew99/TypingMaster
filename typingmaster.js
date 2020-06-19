function randomStringGenerator(len) {
  var characterString = "abcdefghijklmnopqrstuvwxyz.'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomString = '';
  var string = '';
  for (var i = 0; i < len; i++) {
    var randomIndex = Math.floor(Math.random() * 54);
    string = string + characterString.slice(randomIndex, randomIndex + 1);
    randomString += "<i class='string'>" + characterString.slice(randomIndex, randomIndex + 1) + "</i>";
  }
  li = [string, randomString];
  return li;
}
length = 5;
var remainingLength = 0;
var totalLength = length;
counter = 0;
string='';
li=[];
function randomString(len){
  li=randomStringGenerator(len);
  string = li[0];
  document.querySelector('.notyped').innerHTML = "Character Typed: " + remainingLength;;
  document.querySelector('.nohastobetyped').innerHTML = "Character Remaining: " + totalLength;
  document.querySelector('center').innerHTML = li[1];
}


function start() {
  document.querySelector('.help').innerHTML='Welcome, User';
  document.querySelector('.start-btn').style.display = 'none';
  document.querySelector('.reset-btn').style.display = 'inline';
  document.querySelector('.intro').style.display = 'none';
  var audio = new Audio("audio/click.ogg");
  audio.play();
  randomString(length);

  console.log(li);





  document.addEventListener('keydown', function(event) {
    if (event.key == string.slice(counter, counter + 1)) {
      document.querySelector('.help').innerHTML='';
      counter = counter + 1;
      audio = new Audio('audio/success.wav');
      audio.play();
      remainingLength += 1;
      totalLength -= 1;
      document.querySelector('.notyped').innerHTML = "Character Typed: " + remainingLength;;
      document.querySelector('.nohastobetyped').innerHTML = "Character Remaining: " + totalLength;
      document.querySelectorAll('i.string')[counter - 1].classList.add('success-box');

      if (counter == length) {
        document.querySelector('.help').innerHTML='Well Done, You Passed the previous Level';
        tada.play();
        counter=0;
        length = length + 5;
        totalLength = length;
        remainingLength = 0;
        randomString(length);

      }
    }
    else if(event.shiftKey){

    }
    else{
      document.querySelector('.help').innerHTML='Try again, You entered '+ event.key+ " instead of "+string.slice(counter, counter + 1) ;
      counter=0;
      remainingLength=0;
      totalLength=length;
      lose.play();
      randomString(length);
    }

  });

}

function reset() {
  document.querySelector('.help').innerHTML='Welcome, User';

counter=0;
length=5;
totalLength=5;
remainingLength=0;
randomString(length);

}
var tada = new Audio('audio/tada.flac');
var lose = new Audio('audio/lose.mp3');

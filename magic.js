document.getElementById("start").style.visibility = "hidden";

function enter() {
  let userName = document.getElementById("name");
  if (userName.value === "") {
    console.log(userName.value);
    document.getElementById("namedis").innerHTML = "Hello user enter your name .";
  } else {
    document.getElementById("namedis").innerHTML = "Hello " + userName.value + " !";
    document.getElementById("start").style.visibility = "visible";
  }
}

function startIt() {
  ballMove();
  setTimeout(gameStart, 1000);
}

function gameStart() {
  let userQuestion = document.getElementById("quesName").value;
  // let ques = document.getElementById("quesName").value;
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  // console.log(userName + " asked " + userQuestion);
  if (userQuestion != "") {
    document.getElementById("quesAsk").innerHTML = "Your Question :- " + userQuestion;
    let hideList = document.getElementById('listing');
    hideList.style.display = 'none';
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 1:
        eightBall = 'It is decidedly so';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 3:
        eightBall = 'Cannot predict now';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 4:
        eightBall = 'Do not count on it';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 5:
        eightBall = 'My sources say no';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 6:
        eightBall = 'Outlook not so good';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
      case 7:
        eightBall = 'Signs point to yes';
        document.getElementById("answer").innerHTML = "Your Answer :- " + eightBall;
        break;
    }
    console.log(eightBall);
  } else {
    let hideList = document.getElementById('listing');
    hideList.style.display = 'none';
    document.getElementById("quesAsk").innerHTML = "Invalid Question !!! Press Try Again";
  }
}

function refreshPage() {
  window.location.reload();
}

function questionList() {
  let randomNumber = Math.floor(Math.random() * 6);
  let predictAnswer = '';
  switch (randomNumber) {
    case 0:
      predictAnswer = 'Definitely';
      break;
    case 1:
      predictAnswer = 'You know it better';
      break;
    case 2:
      predictAnswer = 'You still have doubt on that?';
      break;
    case 3:
      predictAnswer = 'Depends on efforts !';
      break;
    case 4:
      predictAnswer = "We don't do that here";
      break;
  }
  let hideList = document.getElementById('listing');
  hideList.style.display = 'none';
  document.getElementById("answer").innerHTML = predictAnswer;
}
function ballMove() {
  let ballX = document.getElementById('mainImg');
  ballX.classList.add('animation');
  setTimeout(function () { ballX.classList.remove('animation'); }, 1000);
}
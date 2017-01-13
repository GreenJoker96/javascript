// console.log('Here I am in the console');
// // alert('Here is an alert');
// console.log(5 + 11);

// var number = 9;
// var text = 'Here is some text in a variable'

// console.log(number);
// console.log(text);



// var five = 5;
// var six = 6;

// console.log(six - five);

// function myFirstFunction(){
// 	console.log('Logging from my function');
// }

// function myFirstParam(message, message2, message3){
// 	console.log(message);
// 	console.log(message2);
// 	console.log(message3);
// }


// function mySecondFunction(){
// 	if (1 === 2){
// 		console.log('correct');
// 	} else {
// 		console.log('wrong');
// 	}
// }

// function myThirdFunction(myNumber){
// 	if (1 === myNumber){
// 		console.log('You got it');
// 	} else {
// 		console.log('You are an idiot');
// 	}
// 	} 





// var peopleInRoom = ['Van', 'Avery', 'Josh', 'Jordan'];

// console.log(peopleInRoom);

function grabSomeone() {
var peopleInRoom = ['Van', 'Avery', 'Josh', 'Jordan'];
var random = peopleInRoom[Math.floor(Math.random() * peopleInRoom.length)];
console.log(random);
}


// function playGame(myPick) {
// 	var options = ['rock', 'paper', 'scissors'];
// 	var computerChoice = options[Math.floor(Math.random() * peopleInRoom.length)];
// 	if (myPick === computerChoice) {
// 		console.log('The computer got ' + computerChoice + 'it is a tie.');
// 	} else if (myPick === 'rock' && computerChoice === 'paper') {
// 		console.log('The computer got ' + computerChoice + 'you lose.');
// 	} else if (myPick === 'rock' && computerChoice === 'scissors') {
// 		console.log ('The computer got ' + computerChoice + 'you win.');
// 	} else if (myPick === 'paper' && computerChoice === 'scissors') {
// 		console.log ('The computer got ' + computerChoice + 'you lose.');
// 	} else if (myPick === 'paper' && computerChoice === 'rock') {
// 		console.log ('The computer got ' +computerChoice + 'you win.');
// 	}

// }

function pickedScissors(computerChoice) {
	if (computerChoice === 'rock') {
		console.log('The computer got ' +computerChoice + ' you lose.');
	} else if (computerChoice === 'paper') {
		console.log('The computer got ' + computerChoice + ' you win.');
	}
}

function pickedRock (computerChoice) {
	if (computerChoice === 'paper') {
		console.log('The computer got ' +computerChoice + ' you lose.');
	} else if (computerChoice === 'scissors') {
		console.log('The computer got ' + computerChoice + ' you win.');
	}
}

function pickedPaper(computerChoice) {
	if (computerChoice === 'scissors') {
		console.log('The computer got ' +computerChoice + ' you lose.');
	} else if (computerChoice === 'rock') {
		console.log('The computer got ' + computerChoice + ' you win.');
	}
}

function playGame(myPick) {
	var options = ['rock, paper', 'scissors'];
	var computerChoice = options[Math.floor(Math.random() * options.length)];
	if (myPick === computerChoice) {
		console.log('The computer got ' + computerChoice + 'it is a tie');
	} else if (myPick === 'scissors') {
		pickedScissors(computerChoice);
	} else if (myPick === 'rock') {
		pickedRock(computerChoice);
	} else if (myPick === 'paper') {
		pickedPaper(computerChoice);
	} else {
		console.log('error');
	}

}


function letsChangeTheDom() {
	var header = document.createElement("h1");
	var node = document.createTextNode('Just added to the DOM');
	header.appendChild(node);
	var element = document.getElementById('message');
	element.appendChild(header);
}


function letsAddMyTextToTheDom () {
	var header = document.createElement("h1");
	var myText = document.getElementById("myTextBox").value;
	var node = document.createTextNode(myText);
	header.appendChild(node);
	var element = document.getElementById('message');
	element.appendChild(header);
}
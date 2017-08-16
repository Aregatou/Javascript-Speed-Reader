//initial setup of page
function initialize() {
	//set inputText to be read to chosen monologue content
	inputText = monols[currentMonoNum].content;
	//display content of picked monologue in paragraph form
	monoParag.textContent = monols[currentMonoNum].content;
	//display caption of picked monologue
	foot.textContent = monols[currentMonoNum].caption;
	//change background image to picked monologue
	document.body.style.backgroundImage= images[currentMonoNum];
	
}

//start button eventlistener logic
function startBtnFunc() {
	//playback is off by default, check and run reader if off
	if (!playback) {
		//change to show playback is on for both pause/play and stop/start
		pausePlay= true;
		playback=true;

		//check if user-text input is blank or not
		if (userInputBox.value == "") {
		//if user-text is blank, then run default reader from pre-loaded monologue
			mainReader();
		}
		//otherwise, run reader from user-input textbox
		else {
			userReader();
		}
		//unhide button controls
		showBtns();
		//change Start button to say Stop
		startBtn.textContent = "STOP!";
		}
	//if playback is true, then stop button should reset everything
	else {
		resetBTN();
	}
}

//New Script btn logic
function newScript() {
	//set new monologue number randomly
	newMonoNum = Math.floor(Math.random() * monols.length);
	//check if new number is same as old one
	if(newMonoNum == currentMonoNum) {
		//if they are the same, do it again
		newMonoNum = Math.floor(Math.random() * monols.length);
		//rerun function to check again
		newScript();
	}
	//if different, 
	else {
		//change current monologue number to the new one
		currentMonoNum = newMonoNum;
		//run initialize() to set everything up for new text
		initialize();
	}

}

function pauseBtnFunc() {
	//if paused, change pause button text to "play"
	if(pausePlay) {
		pause.textContent = "Play";
		//set pauseplay to false to enable continued play after click
		pausePlay = false;
		//clear timer to stop array reader
		clearTimeout(timer);
		//show next/prev buttons only when paused
		nextBtn.classList.remove("hidden");
		prevBtn.classList.remove("hidden");
	}
	else {
		//if playing, set text to say "pause"
		pause.textContent = "Pause";
		//run default reader function
		if (userInputBox.value == "") {
			mainReader();
		}
		else {
			userReader();
		}
		//change pausePlay to true when already playing
		pausePlay = true;
		nextBtn.classList.add("hidden");
		prevBtn.classList.add("hidden");
	}
}

//reading logic
function mainReader() {
	//split every word in inputText into array
	textArr = inputText.split(" ");
	//textDisplay will display word at index 'i' in textArr
	textDisplay.textContent = textArr[i];
	//check to see if reading is complete
	if(i<textArr.length){
		//change to the next word's index
		i++
		//time delay is default timerNumber, then loops and restarts mainReader() with the increased i, displaying the next word
		timer = setTimeout(mainReader, timerNumber);
	} 
	//if 'i' has reached max length of textArr, then reset
	else {
		resetBTN();
	}
}

//reading logic from user-input textarea
function userReader() {
	//split every word in userInputBox into array userInputArr
	userInputArr = userInputBox.value.split(" ");
	//textDisplay displays word at 'i' place in userInputArr
	textDisplay.textContent = userInputArr[i];

	if(i<userInputArr.length){
		i++
		timer = setTimeout(userReader, timerNumber);
	}
	else {
		resetBTN();
	}
}

//show control buttons
function showBtns() {
	pause.classList.remove("hidden");
	slow.classList.remove("hidden");
	fast.classList.remove("hidden");
}

//hide control buttons
function hideBtns() {
	pause.classList.add("hidden");
	slow.classList.add("hidden");
	fast.classList.add("hidden");
	nextBtn.classList.add("hidden");
	prevBtn.classList.add("hidden");

}

function resetBTN() {
	//hide control buttons
	hideBtns();
	//clear timer to stop reading
	clearTimeout(timer);
	//clear anything displayed in user-input area
	userInputBox.value = "";
	//change 'i' back to 0, the first word
	i=0;
	//change pause button text back to 'pause' during playback
	pause.textContent = "Pause";
	//erase anything displayed in the textDisplay area
	textDisplay.textContent="";
	//reset reading speed
	timerNumber = 250;
	//set pausePlay back to default
	pausePlay = false;
	//set playback back to default
	playback = false;
	//set start button text to default "START!"
	startBtn.textContent = "START!";
}
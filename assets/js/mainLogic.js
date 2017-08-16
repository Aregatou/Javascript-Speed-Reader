//choose random monologue number to use first
currentMonoNum = Math.floor(Math.random() * monols.length);

//display correct info for chosen monologue
initialize();
//hide all control buttons initially
hideBtns();

//start button begins reader
startBtn.addEventListener("click", function(){
	startBtnFunc();
});

//new script button changes content of inputText to a new monologue
newScriptBtn.addEventListener("click", function() {
	//reset all buttons/ settings
	resetBTN();
	//choose new monologue
	newScript();
})

//pause reading
pause.addEventListener("click", function(){
	pauseBtnFunc();
})


//speed increase
fast.addEventListener("click", function(){
	//decrease time delay by 50
	timerNumber-=50;
})


//speed decrease
slow.addEventListener("click", function(){
	//increase time delay by 50
	timerNumber+=50;
})


nextBtn.addEventListener("click", function() {
	i++
	if (userInputBox.value == "") {
		textDisplay.textContent = textArr[i];
	}
	else {
		textDisplay.textContent = userInputArr[i];
	}

})

prevBtn.addEventListener("click", function() {
	i--;
	if (userInputBox.value == "") {
		textDisplay.textContent = textArr[i];
	}
	else {
		textDisplay.textContent = userInputArr[i];
	}
})
//erase anything in user-input area
userClearBtn.addEventListener("click", function() {
	userInputBox.value = "";
	resetBTN();
})
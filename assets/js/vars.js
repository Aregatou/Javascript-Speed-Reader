var currentMonoNum;
var newMonoNum;
//stores content of currently displayed monologue to be read
var inputText;
//array used to organize every word in SamLJackson monologue
var textArr;
//array used to organize every word in user inputted box
var userInputArr;


//displayed text being read
var textDisplay = document.getElementById("displayText");
//paragraph displayed in monologue area
var monoParag = document.getElementById("monoParag");
//caption of monologue
var foot = document.getElementsByTagName("footer");
//start button
var startBtn = document.getElementById("start");
//new monologue button
var newScriptBtn = document.getElementById("newScriptBtn");
//stop button
var pause = document.getElementById("stop");

var userClearBtn = document.getElementById("clear")
//text-area of user-inputted text
var userInputBox = document.getElementById("userInput");

//change word to next/prev
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

//control speeds
var slow = document.getElementById("slower");
var fast = document.getElementById("faster");

var rdMonoParag = document.getElementById("rdMonoParag");

//index of current word being read within textArr or userInputArr
var i = 0;
//control timer
var timer;
//change timer delay speed
var timerNumber = 250;

//declare two variables for keeping track of playback.

//pausePlay will toggle with the Play and Pause buttons
var pausePlay = false;
//playBack will toggle with the Start and Stop buttons
var playback = false
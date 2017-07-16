
window.onload = function () {
	CCCircus.main();
}

var CCCircus = (function () {

function main() {
	// Start State
	stateStart();
}

/** Utility function */
function _e(id) {
	return document.getElementById(id);
}

function stateStart() {
	const markup = `
		<div id="greetingPictureDiv" class="start">
			<img id="greetingPicture" src="assets/greeter.png">
		</div>
		<div id="gameTopControl" class="start">
		<div class="start">
			<input id="startGame" 
			       type="image" 
			       src="assets/startButton.png">
		</div>
		<div class="start">
			<input id="exitGame" 
			       type="button" 
			       value="Exit Game">
		</div>
		</div>
	`;
	_e("mainScreen").innerHTML = markup;



	_e("startGame").onclick = doStartGame;
	_e("exitGame").onclick = doExitGame;
}

/**
 * Transition to the greeting screens, to acquire the user name.
 * Out-transitions: just a transition to the actual game-play state,
 * once a name has been entered.
 * TODO: Consider name validation (what if it's empty?)
 * We might transition to an error screen, or maybe some admin/testing
 * state.
 */
function doStartGame() {
	/* Replace innerHTML with Registration Screen */
	const WELCOME_MSG = "Welcome to Clover Cat Circus!";
	const A_PLACE_MSG = "A place where luck determines all!";
	const ENTER_NM_MSG = "Now, enter a name, any name!";
	const RESPONSE_MSG = "Excellent! You're ready to go! "
		+ "Just input your ticket in the Fortune Machine "
		+ "and you'll be able to enter the circus!";

	const markup = `
	<div id="welcomeUser">
		<div id="padding"></div>
		<div id="messageArea">
			<p id="welcomeText">Welcome to Clover Cat Circus!</p>
			<input id="nextButton"
			       type="image"
			       src="assets/nextButton.png">
			<div style="clear: both"></div>
			<!-- Cancel float behavior, resume normal flow -->
		</div>
	</div>
	`;

	var mainScreen = _e("mainScreen");
	mainScreen.innerHTML = markup;

	_e("nextButton").onclick = doAPlaceMessage;
}

function doAPlaceMessage() {
	_e("welcomeText").innerHTML = "A place where luck determines all!";
	_e("nextButton").onclick = doRegisterPlayer;
}

function doRegisterPlayer() {
	var markup = `
	<p id="welcomeText">Now, enter a name, any name!<br>
	<input type="text" placeholder="Your name here..." id="playerNameField">
	<input id="enterButton" type="image" src="assets/nextButton.png">
	`;
	_e("messageArea").innerHTML = markup;
	_e("enterButton").onclick = function () {
		doRegistrationDone(_e("playerNameField").value);
	};
}

function doRegistrationDone(player) {
	var markup = `
	<p id="welcomeText">
	Excellent, ${player}! You're ready to go! 
	Just input your ticket in the Fortune Machine
	and you'll be able to enter the circus!
	</p>
	<input id="nextButton"
	       type="image"
	       src="assets/nextButton.png">
	`;
	_e("messageArea").innerHTML = markup;
	_e("nextButton").onclick = doEnterTicket;
}

function doEnterTicket() {
	alert("doEnterTicket");
}

function doExitGame() {
	alert("doExitGame");
	/* Close this tab */
}

return {
	main: main,
};

})();


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
		<div id="greetingPicture" class="start">
			<img src="assets/greeter.png">
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
	/* Fortunately, once the above is executed, the buttons seem
	   to be available for having their onclick properties set.
	*/
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
			<p id="welcomeText">${WELCOME_MSG}</p>
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

	/* Style */
	var screenStyle = _e("welcomeUser").style;
	screenStyle.maxWidth = "100vw";
	screenStyle.height = "100vh";
	screenStyle.overflow = "hidden";
	screenStyle.backgroundColor = "#000000";
	screenStyle.color = "#FFFFFF";
	screenStyle.textAlign = "center";

	var paddingStyle = _e("padding").style;
	paddingStyle.height = "33vh";

	var msgAreaStyle = _e("messageArea").style;
	msgAreaStyle.maxWidth = "20em";
	msgAreaStyle.height = "auto";
	msgAreaStyle.float = "center";
	msgAreaStyle.margin = "0 auto";

	var textStyle = _e("welcomeText").style;
	textStyle.fontSize = "150%";
	var buttonStyle = _e("nextButton").style;
	buttonStyle.float = "right";
	buttonStyle.margin = "0 1em 0 0";


	_e("nextButton").onclick = doWelcomeNextMessage;
}

function doWelcomeNextMessage() {
	alert("doWelcomeNextMessage");
}

function doExitGame() {
	alert("doExitGame");
	/* Close this tab */
}

return {
	main: main,
};

})();

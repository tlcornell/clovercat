
window.onload = function () {
	CCCircus.main();
}

var CCCircus = (function () {

function main() {
	init();
}

function init() {
	document.getElementById("startGame").onclick = doStartGame;
	document.getElementById("exitGame").onclick = doExitGame;
}

function doStartGame() {
	alert("doStartGame");
}

function doExitGame() {
	alert("doExitGame");
}

return {
	main: main,
};

})();

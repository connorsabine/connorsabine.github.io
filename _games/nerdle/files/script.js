const targetEquations = [
	"12+24=36",
	"5*25=125",
	"120/2=60",
	"4*60=240",
	"7*49=343",
	"9+91=100",
	"2-19=-17",
	"-9+12=3",
	"-4*3=-12"
];

const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;

const keyboard = document.querySelector("[data-keyboard]");
const guessGrid = document.querySelector("[data-guess-grid]");
const alertContainer = document.querySelector("[data-alert-container]");

const targetEquation = targetEquations[Math.floor(Math.random() * targetEquations.length)];

startInteraction();

function startInteraction() {
	document.addEventListener("click", handleMouseClick);
	document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
	document.removeEventListener("click", handleMouseClick);
	document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
	if (e.target.matches("[data-key]")) {
		pressKey(e.target.dataset.key);
		return;
	}
	if (e.target.matches("[data-enter]")) {
		submitGuess();
		return;
	}
	if (e.target.matches("[data-delete]")) {
		deleteKey();
		return;
	}
}

function handleKeyPress(e) {
	if (e.key === "Enter") {
		submitGuess();
		return;
	}
	if (e.key === "Backspace" || e.key === "Delete") {
		deleteKey();
		return;
	}
	if (e.key.match(/^[1-9]$/)) {
		pressKey(e.key);
		return;
	}
	if (e.key == "0") {
		pressKey(e.key);
		return;
	}
	if (e.key == "+" || e.key ==  "-" ||  e.key == "*" || e.key ==  "/" || e.key == "=") {
		pressKey(e.key);
		return;
	}
}

function pressKey(key) {
	const activeTiles = getActiveTiles();
	if (activeTiles.length >= 8) {
		return;
	}
	const nextTile = guessGrid.querySelector(":not([data-letter])");
	nextTile.dataset.letter = key.toLowerCase();
	nextTile.textContent = key;
	nextTile.dataset.state = "active";
}

function deleteKey() {
	const activeTiles = getActiveTiles();
	const lastTile = activeTiles[activeTiles.length - 1];
	if (lastTile == null) return;
	lastTile.textContent = "";
	delete lastTile.dataset.state;
	delete lastTile.dataset.letter;
}

function submitGuess() {
	const activeTiles = [...getActiveTiles()];
	if (activeTiles.length !== 8) {
		showAlert("Equation too short");
		shakeTiles(activeTiles);
		return;
	}

	const guess = activeTiles.reduce((word, tile) => {
		return word + tile.dataset.letter;
	}, "");

	// if (!dictionary.includes(guess)) {
	// 	showAlert("Not in word list");
	// 	shakeTiles(activeTiles);
	// 	return;
	// }

	stopInteraction();
	activeTiles.forEach((...params) => flipTile(...params, guess));
}

function flipTile(tile, index, array, guess) {
	const letter = tile.dataset.letter;
	const key = keyboard.querySelector(`[data-key="${letter}"i]`);
	setTimeout(() => {
		tile.classList.add("flip");
	}, (index * FLIP_ANIMATION_DURATION) / 2);

	tile.addEventListener(
		"transitionend",
		() => {
			tile.classList.remove("flip");
			if (targetEquation[index] === letter) {
				tile.dataset.state = "correct";
				key.classList.add("correct");
			} else if (targetEquation.includes(letter)) {
				tile.dataset.state = "wrong-location";
				key.classList.add("wrong-location");
			} else {
				tile.dataset.state = "wrong";
				key.classList.add("wrong");
			}

			if (index === array.length - 1) {
				tile.addEventListener(
					"transitionend",
					() => {
						startInteraction();
						checkWinLose(guess, array);
					},
					{ once: true }
				);
			}
		},
		{ once: true }
	);
}

function getActiveTiles() {
	return guessGrid.querySelectorAll("[data-state='active']");
}

function showAlert(message, duration = 1000) {
	const alert = document.createElement("div");
	alert.textContent = message;
	alert.classList.add("alert");
	alertContainer.prepend(alert);

	if (duration == null) return;

	setTimeout(() => {
		alert.classList.add("hide");
		alert.addEventListener("transitionend", () => {
			alert.remove();
		});
	}, duration);
}

function shakeTiles(tiles) {
	tiles.forEach((tile) => {
		tile.classList.add("shake");
		tile.addEventListener(
			"animationend",
			() => {
				tile.classList.remove("shake");
			},
			{ once: true }
		);
	});
}

function checkWinLose(guess, tiles) {
	if (guess === targetEquation) {
		showAlert("You Win", 5000);
		danceTiles(tiles);
		stopInteraction();
		return;
	}

	const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
	if (remainingTiles.length === 0) {
		showAlert(targetEquation.toUpperCase(), null);
		stopInteraction();
	}
}

function danceTiles(tiles) {
	tiles.forEach((tile, index) => {
		setTimeout(() => {
			tile.classList.add("dance");
			tile.addEventListener(
				"animationend",
				() => {
					tile.classList.remove("dance");
				},
				{ once: true }
			);
		}, (index * DANCE_ANIMATION_DURATION) / 8);
	});
}
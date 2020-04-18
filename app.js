const label = document.getElementsByClassName("placeholder");
const input = document.getElementsByTagName("input");
const contBtn = document.getElementsByClassName("continue");
const backBtn = document.getElementsByClassName("back");
const section = document.getElementsByClassName("section");
const content = document.getElementsByClassName("content");
const stage = document.getElementsByClassName("stage");
const header = document.getElementsByClassName("header");

for (let i = 0; i < 3; i++) {
	contBtn[i].addEventListener("click", () => {
		nextSection(i, i + 1);
	});
	header[i].addEventListener("click", () => {
		for (let i = 0; i < 3; i++) {
			content[i].style.visibility = "hidden";
			section[i].style.height = "5%";
		}
		console.log(content[i].style.visibility);
		if (content[i].style.visibility === "visible") {
			content[i].style.visibility = "hidden";
			section[i].style.height = "5%";
			content[i].style.opacity = "1";
		} else {
			content[i].style.visibility = "visible";
			section[i].style.height = "45%";
			content[i].style.opacity = "1";
			input[i].focus();
		}
	});
	if (i < 2) {
		backBtn[i].addEventListener("click", () => {
			previousSection(i, i + 1);
		});
	}
	input[i].addEventListener("focus", () => {
		label[i].style.top = "0";
		label[i].style.left = "3rem";
	});

	input[i].addEventListener("blur", () => {
		if (!input[i].value) {
			label[i].style.top = "4rem";
			label[i].style.left = "4rem";
		}
	});
}

function nextSection(hideIndex, showIndex) {
	content[hideIndex].style.visibility = "hidden";
	section[hideIndex].style.height = "5%";
	content[showIndex].style.visibility = "visible";
	content[showIndex].style.opacity = "1";
	section[showIndex].style.height = "45%";
	stage[showIndex].style.background = "#346beb";
	stage[hideIndex].innerText = "✓";
	input[showIndex].focus();
}

function previousSection(hideIndex, showIndex) {
	content[hideIndex].style.visibility = "visible";
	section[hideIndex].style.height = "45%";
	stage[hideIndex].innerText = hideIndex + 1;
	content[showIndex].style.opacity = "1";
	content[showIndex].style.visibility = "hidden";
	content[showIndex].style.opacity = "0";
	section[showIndex].style.height = "5%";
	stage[showIndex].style.background = "gray";
	input[hideIndex].focus();
}

input[0].focus();

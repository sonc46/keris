//javascript document

window.onload = function () {
	var topMenuBtn = document.getElementById('topMenuBtn');

	var topMenuShadow = document.getElementById('topMenuShadow');

	topMenuShadow.addEventListener('click', function () {
		topMenuBtn.click();
	});

	var translationSelectionBtn = document.getElementById('translationSelectionBtn');
	var translationSelectionA = document.getElementsByClassName('translationSelectionA');

	for (var i = 0; i < translationSelectionA.length; i++) {
		translationSelectionA[i].addEventListener('click', function () {
			translationSelectionBtn.click();
			translationSelectionBtn.focus();
		});
	}
	translationSelectionA[translationSelectionA.length - 1].addEventListener('focusout', function () {
		selectionEvent();
	})

	var topmenu = document.getElementsByClassName('topmenu');
	topmenu[topmenu.length - 1].addEventListener('focusout', function () {
		topMenuBtn.focus();
	})
}

var topMenuEvent = function () {
	topMenuBtn.classList.toggle('active');
	var topmenu = document.getElementsByClassName('topmenu');

	if (topMenuBtn.classList.contains('active')) {

		for (let i = 0; i < topmenu.length; i++) {
			topmenu[i].setAttribute('href', topmenu[i].getAttribute('data-href'));
		}

	} else {
		for (let i = 0; i < topmenu.length; i++) {
			topmenu[i].removeAttribute('href');
		}
	}

};

var selectionEvent = function () {
	translationSelectionBtn.classList.toggle('active');
};
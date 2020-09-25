//javascript document

window.onload = function(){
	var topMenuBtn = document.getElementById('topMenuBtn');
	var topMenuShadow = document.getElementById('topMenuShadow');

	topMenuShadow.addEventListener('click', function() {
		topMenuBtn.click();
	});

	var translationSelectionBtn = document.getElementById('translationSelectionBtn');
	var translationSelectionA = document.getElementsByClassName('translationSelectionA');

	for(var i = 0; i < translationSelectionA.length; i++){
		translationSelectionA[i].addEventListener('click', function() {
			translationSelectionBtn.click();
		});
	}
}

var topMenuEvent = function() {
	topMenuBtn.classList.toggle('active');
};

var selectionEvent = function() {
	translationSelectionBtn.classList.toggle('active');
};






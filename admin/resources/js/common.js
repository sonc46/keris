//javascript document
window.onload = function(){
	var modifyarr = document.getElementsByClassName('modifyEvent');
	var modifyLayer = document.getElementById('modifyLayer');
	var registerBtn = document.getElementById('registerEvent');
	var registerLayer = document.getElementById('registerLayer');
	var popupLayerClose = document.getElementsByClassName('popupLayerClose');
	var popupLayerShadow = document.getElementById('popupLayerShadow');

	if (modifyarr) {
		for(var i = 0; i < modifyarr.length; i++){
			modifyarr[i].addEventListener('click', function() {
				modifyLayer.style.display='block'; 
				popupLayerShadow.style.display='block';
			});
		}
	}
	if (registerBtn) {
		registerBtn.addEventListener('click', function() {
			registerLayer.style.display='block'; 
			popupLayerShadow.style.display='block';
		});
	}

	for(var i = 0; i < popupLayerClose.length; i++){
		popupLayerClose[i].addEventListener('click', function() {
			popupLayerShadow.click();
		});
	}
	popupLayerShadow.addEventListener('click', function() {
		modifyLayer.style.display='none'; 
		if (registerLayer) {
			registerLayer.style.display='none'; 
		}
		popupLayerShadow.style.display='none';
	});

	var searchResultsList = document.getElementById('searchResultsList');
	var searchResultsKeyword = document.getElementsByClassName('searchResultsKeyword');

	searchResultsEvent = function() {
		searchResultsList.classList.add("active");
	};
	for(var i = 0; i < searchResultsKeyword.length; i++){
		searchResultsKeyword[i].addEventListener('click', function(event) {
			searchResultsList.previousElementSibling.value = event.target.innerText;
			searchResultsList.scrollTop = 0;
			searchResultsList.classList.remove("active");
		});
	}
}
var btnClose = document.querySelector(".btn-close");
var mapInfo = document.querySelector(".information-map img");
var modalMap = document.querySelector(".modal-map");
var mapBox = document.querySelector(".map-box");



mapInfo.addEventListener("click", function(evt) {
	evt.preventDefault();
  	modalMap.classList.add("modal-show");
});


btnClose.addEventListener("click", function() {
	modalMap.classList.remove("modal-show");
});

mapBox.addEventListener("click", function() {
  modalMap.classList.remove("modal-show");
});


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode == 27) {
		evt.preventDefault();
        modalMap.classList.remove("modal-show");
	} 
})









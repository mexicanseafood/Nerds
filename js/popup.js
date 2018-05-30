var link = document.querySelector(".modal-open");
var popup = document.querySelector(".modal-contact-form")
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem ("login");
var mailstorage = localStorage.getItem ("email");
var letter = popup.querySelector("textarea");


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	
	if (storage) {
		login.value = storage;
		email.focus();				
			if (mailstorage) {
				email.value = mailstorage;
				letter.focus();
			}} else {
		login.focus();
	}
});


close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}			
	}
});

form.addEventListener("submit", function(evt){
	if (!login.value || !email.value) {
	evt.preventDefault();
	popup.classList.add("modal-error");
} else {
	localStorage.setItem("login", login.value);
	localStorage.setItem("email", email.value);
}
});
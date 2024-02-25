let hamburguesa = document.querySelector("#hamburguesa");
let creu = document.querySelector("#creu");
let nav_2 = document.querySelector("#nav-2");

hamburguesa.onclick = function(){
	hamburguesa.classList = "no";
	creu.classList = "si";
	nav_2.classList = "nav-2";
}

creu.onclick = function(){
	creu.classList = "no";
	hamburguesa.classList = "si";
	nav_2.classList = "no";
}

function enllacPulsat(){
	nav_2.classList = "no";
	creu.classList = "no";
	hamburguesa.classList = "si";
}







function validEmail(email){
	return email.indexOf('@')!=-1 && email.indexOf('.com')!=-1;
}

function validPassword(password){
	return password.length>7;
}

function login(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	if(validEmail(email) && validPassword(password)){
		window.location="welcome.html";
	} else alert('Invalid Credentials');
}

function register(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let confirmPassword = document.getElementById('confirm').value;
	if(validEmail(email) && validPassword(password)){
		if(password==confirmPassword){
			window.location="welcome.html";
		} else{
			alert("Passwords donot match!");
		}
	} else alert('Invalid Email or Password');
}

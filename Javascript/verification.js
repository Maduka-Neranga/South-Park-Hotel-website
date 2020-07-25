function verification(){
	var password1 = document.changeform.password.value;
	var password2 = document.changeform.confirmpassword.value;

	if(password1 == ""){
		alert("Enter new Password");
		return false;
	}
	if(password2 == ""){
		alert("Please confirm new password");
		return false;
	}
}

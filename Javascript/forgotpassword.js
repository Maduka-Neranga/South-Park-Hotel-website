function validation()
{

    var email = document.forgotpassword.email.value;
    var surname = document.forgotpassword.surname.value;



	if(email=="")
	{
		alert("Enter your E-Mail");
		return false;
	}
	if(surname=="")
	{
		alert("Enter your Surname");
		return false;
	}
}

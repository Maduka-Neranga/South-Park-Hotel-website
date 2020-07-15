function verification()
{
	var verification=document.changepassword.verificationcode.value;


	if(verification=="")
	{
		alert("Enter your verification code");
		return false;
	}
}
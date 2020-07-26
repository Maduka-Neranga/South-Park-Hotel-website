function checkform()
{
    var firstname=document.form1.fname.value;
    var lastname=document.form1.lname.value;
    var day=document.form1.day.value;
    var month=document.form1.month.value;
    var year=document.form1.year.value;
    var country=document.form1.country.value;
    var email=document.form1.email.value;
    var mobilenumber=document.form1.mobilenum.value;
    var password=document.form1.password1.value;
    var confirmpassword=document.form1.password2.value;
    var terms=document.getElementById("terms");


if(firstname=="")
{
	alert("Please enter your first Name");
	return false;
}

if(lastname=="")
{
	alert("Please enter your last Name");
	return false;
}

if(day=="DD")
{
	alert("Please select a Day");
	return false;
}

if(month=="MM")
{
	alert("Please select a Month");
	return false;
}

if(year=="YYYY")
{
	alert("Please enter your Year");
	return false;
}

if(country=="Please Select")
{
	alert("Please select a Country");
	return false;
}

if(email=="")
{
	alert("Please Enter your Email");
	return false;
}

if(mobilenumber=="")
{
	alert("Please enter your Phone Number");
	return false;
}

if(password=="")
{
	alert("Please enter a Password");
    return false;
}

if(confirmpassword=="")
{
	alert("Please Confirm your Password");
	return false;
}

if(password!==confirmpassword)
{
	alert("Please select the same Password");
	return false;
}

if(!terms.checked)
{
	alert("Please Agree to our Terms and Conditions");
	return false;
}


}

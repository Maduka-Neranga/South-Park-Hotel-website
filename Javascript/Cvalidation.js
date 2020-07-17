function checkcform(){
     var name=document.cform.name.value;
     var mail=document.cform.mail.value;
     var sub =document.cform.sub.value;
     var msg =document.cform.msg.value;

if (name=="") {
     alert("Please enter name");
     return false;
}
if (mail=="") {
	alert("Please enter your E-mail address");
	return false;
}
if (sub=="") {
	alert("please enter a subject to send the email");
	return false;
}
if (msg=="") {
	alert("Please enter a message");
	return false;
}
if (document.cform.name.value.length!=0 && document.cform.mail.value.length!=0 && document.cform.sub.value.length!=0 && document.cform.msg.value.length!=0) {

    alert("Your massage successfully sent");

}

}
function val()
{	
	var eid=document.getElementById("eid").value;
	if(eid == "")
	{
		alert("Email Id should not be empty");
		return false;
	}
	else
	{
		alert("Reset Password is send to your mail");
		return true;
	}
}

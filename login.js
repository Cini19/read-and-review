function login()
{	
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	
	var user=document.getElementById("usr").value;
	if(user == "")
	{
		alert("Username should not be empty");
	}
	
	var pwd=document.getElementById("pwd").value;
	if( pwd=="")
	{
		alert("Password should not be emtpy");
	}
	if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	if(pwd.length < 8)
	{
		alert ('Password minimum length is 8');
	}	
	if(pwd.length > 12)
	{
		alert ('Password max length is 12');	
	}
}

function sub()
{
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var number= /([0-9])/;
	var alphabets = /[A-Za-z]/;
	
	var a=document.getElementById("fn").value;
	if( a=="")
	{
		alert("First Name can't be emtpy");
	}
	else if(!letters.test(a))
	{
		alert('Name field required only alphabet characters(First Name Field)');
	}
	
	var ln=document.getElementById("ln").value;
	if(ln=="")
	{
		alert("Last Name can't be emtpy");
	}
	else if(!letters.test(ln))
	{
		alert('Name field required only alphabet characters (Second Name Field)');
	}
	
	var dob=document.getElementById("dob").value
	if(dob=="dd-mm-yyyy")
	{
		alert("Enter date of birth");
	}
	else if(dob=="")
	{
		alert("Date of birth can't be emtpy");
	}
	var usr=document.getElementById("usr").value;
	if(usr=="")
	{
		alert("Username can't be emtpy");
	}
	
	var pwd=document.getElementById("pwd").value;
	if( pwd=="")
	{
		alert("Password can't be emtpy");
	}
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	if(pwd.length < 8)
	{
		alert ('Password minimum length is 8');
	}	
	if(pwd.length > 16)
	{
		alert ('Password max length is 12');
	}
	
	
	
	var pwd1=document.getElementById("pwd1").value;
	if (pwd1=="")
	{
		alert("Confirm password");
	}
	else if(pwd != pwd1)
	{
		alert ('Password not Matched');
	}
	
	var email=document.getElementById("eid").value;
	if( email=="")
	{
		alert("Email can't be emtpy");
	}
	else if (!filter.test(email))
	{
		alert('Invalid email');
	}
}


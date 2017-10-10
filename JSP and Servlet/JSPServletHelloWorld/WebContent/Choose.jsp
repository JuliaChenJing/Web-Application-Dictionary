<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<title>Choose</title>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>

<body>
	<form method='post' action='ChooseServlet'>
		<p>Is JSP cool?</p>
		<input type='radio' value='1' name='radioJSPCool'><span>Yes</span><br/>
		<input type='radio' value='0' name='radioJSPCool'><span>No</span><br/>
		<input type='submit' name='btnSubmit' value='Submit' />
		<p>Is JSF way cool?</p>
		<input type='radio' value='1' name='JSFwayCool'><span>Yes</span><br/>
		<input type='radio' value='0' name='JSFwayCool'><span>No</span><br/>
		<input type='submit' name='btnSubmit' value='Submit' />
		<p>Is the moon made of cheese?</p>
		<input type='radio' value='1' name='moonCheese'><span>Yes</span><br/>
		<input type='radio' value='0' name='moonCheese'><span>No</span><br/>
		<input type='submit' name='btnSubmit' value='Submit' />
	</form>
</body>
</html>
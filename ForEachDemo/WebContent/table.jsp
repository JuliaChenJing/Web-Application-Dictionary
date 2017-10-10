<%@ page import="mum.cs472.Student" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core'%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<table>
	<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style>
table {
	border-collapse: collapse;
}

table, th, td {
	border: 1px solid black;
}

th, td {
	padding: 15px;
	text-align: left;
}
tr:nth-child(even) {background-color: #f0f0f0}
</style>
<title>Lecture 5</title>
	</head>
	<body>
		<table>
			<tr>
				<th>Student Name</th>
				<th>Student Age</th>
			</tr>
             <%-- <c:forEach var="student" items="${students}"> --%>
             <% Student[] students = (Student[])request.getAttribute("students"); %>
			 <%try{ for(int i = 0; i < (students.length - 1); i++) { %>
        <tr>      
            <td><%=students[i].getName()%></td>
            <td><%=students[i].getAge()%></td>
        </tr>
    <% }}catch(Exception e){
    	System.out.println(e);
    }
    	%>

			<%--  </c:forEach> --%>
		</table>
	</body>
	</html>
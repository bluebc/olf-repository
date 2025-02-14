<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<%@page import="com.bluebc.mobile.app.dao.Useriddao"%>

<%
	request.setCharacterEncoding("utf-8");

  	String uid = request.getParameter("id");
  	String upass = request.getParameter("ps");

 	Useriddao sqlexe = new Useriddao();
    int code = sqlexe.login(uid, upass);
    
    
    if(code == 1){
		//out.print("아이디가 존재하지 않습니다.");
    	out.print("NE");
	}
    else if(code == 2){
		//out.print("패스워드가 틀립니다.");
    	out.print("PE");
	}
	else{
		 session.setAttribute("id",uid);
		 //response.sendRedirect("main.jsp");
		 out.print("OK");
	}
	
%>
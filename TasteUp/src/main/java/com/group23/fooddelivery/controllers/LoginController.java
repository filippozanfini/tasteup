package com.group23.fooddelivery.controllers;

import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.group23.fooddelivery.persistence.DBManager;
import com.group23.fooddelivery.persistence.DBSource;
import com.group23.fooddelivery.persistence.dao.jdbc.UtenteDAOJDBC;

@Controller
public class LoginController {
	
	String username = null;


	@PostMapping("loginAccount")
	public String login(HttpSession session, @RequestParam String username_login, @RequestParam String password_login) {
	   System.out.println(username_login + " "+ password_login);
		DBSource Dbs = DBManager.getDataSource();
		try {
			UtenteDAOJDBC utente = new UtenteDAOJDBC(Dbs);
			if(utente.login(username_login, password_login)) {
			
				username = username_login;
				session.setAttribute("usernameLogged",username);
				if(username.equalsIgnoreCase("admin@admin"))
					return "indexadmin";
				else if(username.equalsIgnoreCase("gestore@gestore"))
					return "gestoreConsegne";
				else
					return "index";
			}else
				return "loginError";

		} catch (SQLException e) {
			e.printStackTrace();
			return "loginError";
		}
		
	}

		
	
}

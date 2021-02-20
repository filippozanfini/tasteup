package com.group23.fooddelivery.controllers;

import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import com.group23.fooddelivery.persistence.DBManager;
import com.group23.fooddelivery.persistence.DBSource;
import com.group23.fooddelivery.persistence.dao.jdbc.UtenteDAOJDBC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class HomeController {

	@GetMapping("/")	
	public String home() {
		return "index";
	}
	@PostMapping("loginhome")	
	public String loghome() {
		return "index";
	}

	@PostMapping("indexadmin")	
	public String admin() {
		return "indexadmin";
	}

	
	@PostMapping("gestoreConsegne")	
	public String indexConsegne() {
		return "index";
	}
	
	@GetMapping("login")
	public String login() {	
		return "accesso";
	}

	@GetMapping("signup")
	public String signup() {	
		return "Registrati";
	}

	@PostMapping("cart")
	public String goToCart() {
		return "cart";
	}

	@PostMapping("catalogo")
	public String goToCatalog() {
		return "catalog";
	}

	@PostMapping("contact-us")
	public String goToContactUs() {
		return "contact-us";
	}

	@GetMapping("contact-us")
	public String getContactUs() {
		return "contact-us";
	}

	@PostMapping("confirm_order")
    public String confirmOrder() {
    	return "confirmOrder";
	}

	@GetMapping("success")
	public String getSuccess() {
		return "successOrder";
	}

}

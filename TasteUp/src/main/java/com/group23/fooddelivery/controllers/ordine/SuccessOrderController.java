package com.group23.fooddelivery.controllers.ordine;

import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class SuccessOrderController {
	
	@PostMapping("home")
	public String home(HttpSession session) throws SQLException{
			return "index";		
	}
}

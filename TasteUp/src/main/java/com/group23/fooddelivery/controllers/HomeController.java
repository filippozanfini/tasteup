package com.group23.fooddelivery.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class HomeController {

	@GetMapping("/")	
	public String home() {
		return "index";
	}

	@GetMapping("prodotti")
	public String getCatalogo() {
		return "catalog";
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

	@GetMapping("carrello")
	public String getCart() {
		return "cart";
	}
	
	@PostMapping("carrello")
	public String goToCart() {
		return "cart";
	}

	@PostMapping("prodotti")
	public String goToCatalog() {
		return "catalog";
	}

	@PostMapping("contattaci")
	public String goToContactUs() {
		return "contact-us";
	}

	@GetMapping("contattaci")
	public String getContactUs() {
		return "contact-us";
	}

	@PostMapping("cassa")
    public String confirmOrder() {
    	return "confirmOrder";
	}

	@GetMapping("ordineConfermato")
	public String getSuccess() {
		return "successOrder";
	}

}

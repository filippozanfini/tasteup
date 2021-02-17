package com.group23.fooddelivery.controllers;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import com.group23.fooddelivery.model.product.Bevanda;
import com.group23.fooddelivery.model.product.Ingrediente;
import com.group23.fooddelivery.model.product.Menu;
import com.group23.fooddelivery.model.product.Panino;
import com.group23.fooddelivery.model.sales.Ordine;
import com.group23.fooddelivery.persistence.DBManager;
import com.group23.fooddelivery.persistence.dao.BevandaDAO;
import com.group23.fooddelivery.persistence.dao.MenuDAO;
import com.group23.fooddelivery.persistence.dao.PaninoDAO;
import com.group23.fooddelivery.persistence.dao.jdbc.BevandaDAOJDBC;
import com.group23.fooddelivery.persistence.dao.jdbc.MenuDAOJDBC;
import com.group23.fooddelivery.persistence.dao.jdbc.PaninoDAOJDBC;

import org.joda.time.DateTime;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatalogRestController {

    @PostMapping("getAllProducts")
    public String getAllProductsJSON() {
        List<Panino> listaPanini = new ArrayList<Panino>();
		PaninoDAO paninoDao;
		try {
			paninoDao = new PaninoDAOJDBC(DBManager.getDataSource());
			listaPanini = paninoDao.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		List<Bevanda> listaBevande = new ArrayList<Bevanda>();
		BevandaDAO bevandaDao;
		try {
			bevandaDao = new BevandaDAOJDBC(DBManager.getDataSource());
			listaBevande = bevandaDao.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		List<Menu> listaMenu = new ArrayList<Menu>();
		MenuDAO menuDao;
		try {
			menuDao = new MenuDAOJDBC(DBManager.getDataSource());
			listaMenu = menuDao.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}

        return createJSON(listaMenu, listaPanini, listaBevande);
    }

	@PostMapping("getProduct")
    public String getProduct(@RequestParam String productName) {
        List<Panino> listaPanini = new ArrayList<Panino>();
		PaninoDAO paninoDao;
		try {
			paninoDao = new PaninoDAOJDBC(DBManager.getDataSource());
			listaPanini = paninoDao.cerca(productName);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		List<Bevanda> listaBevande = new ArrayList<Bevanda>();
		BevandaDAO bevandaDao;
		try {
			bevandaDao = new BevandaDAOJDBC(DBManager.getDataSource());
			listaBevande = bevandaDao.cerca(productName);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	
		List<Menu> listaMenu = new ArrayList<Menu>();
		try {
			MenuDAO menuDao = new MenuDAOJDBC(DBManager.getDataSource());
			listaMenu = menuDao.cerca(productName);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        return createJSON(listaMenu, listaPanini, listaBevande);
    }


    private String createJSON(List<Menu> menu, List<Panino> panini, List<Bevanda> bevande) {
        String json = "{";
		json += "\"menu\":[";

		if(menu.size() == 0) {
			json+="],";
		} else {
			int menuCounter = 0;

			for(Menu entry : menu) {
				json+="{\"nome\": \"" + entry.getNome() + "\",";
				json+="\"formato\": \"" + entry.getFormato() + "\",";
				json+="\"nome_panino\": \"" + entry.getPanino().getNome() + "\",";
				json+="\"formato_panino\": \"" + entry.getPanino().getFormato() + "\",";
				json+="\"immagine_panino\": \"" + entry.getPanino().getPathImage() + "\",";
				json+="\"nome_bevanda\": \"" + entry.getBevanda().getNome() + "\",";
				json+="\"formato_bevanda\": \"" + entry.getBevanda().getFormato() + "\",";
				json+="\"immagine_bevanda\": \"" + entry.getBevanda().getPath_image() + "\",";
                json+="\"immagine\": \"" + entry.getPath_image() + "\",";
                json+="\"descrizione\": \"" + entry.getDescrizione() + "\",";
                json+="\"tipo\": \"menu\",";
				json+="\"prezzo\": " + entry.getPrezzo() + "}";

				if(menuCounter+1 == menu.size()) {
					json+="],";
				} else {
					json+=",";
				}

				menuCounter++;
			}
		}

		json += "\"panini\":[";

		if(panini.size() == 0) {
			json+="],";
		} else {
			int paniniCounter = 0;

			for(Panino entry : panini) {
				json+="{\"nome\": \"" + entry.getNome() + "\",";
				json+="\"formato\": \"" + entry.getFormato() + "\",";
                json+="\"immagine\": \"" + entry.getPathImage() + "\",";
                json+="\"descrizione\": \"" + entry.getDescrizione() + "\",";
                json+="\"tipo\": \"panini\",";
				json+="\"ingredienti\":[";
				int ingredientsCounter = 0;
				
				if(entry.getIngredienti().size() == 0) {
					json+="],";
				} else {
					for(Ingrediente ingrediente : entry.getIngredienti()) {
						json+="\"" + ingrediente.getNome_ingrediente() + "\"";
		
						if(ingredientsCounter+1 == entry.getIngredienti().size()) {
							json+="],";
						} else {
							json+=",";
						}
		
						ingredientsCounter++;
					}
				}
	
				json+="\"prezzo\": " + entry.getPrezzo() + "}";
	
				if(paniniCounter+1 == panini.size()) {
					json+="],";
				} else {
					json+=",";
				}
	
				paniniCounter++;
			}
		}

		json += "\"bevande\":[";

		if(bevande.size()==0) {
			json+="]";
		} else {
			int bevandaCounter = 0;

			for(Bevanda entry : bevande) {
				json+="{\"nome\": \"" + entry.getNome() + "\",";
				json+="\"formato\": \"" + entry.getFormato() + "\",";
                json+="\"immagine\": \"" + entry.getPath_image() + "\",";
                json+="\"descrizione\": \"\",";
                json+="\"tipo\": \"bevande\",";
				json+="\"prezzo\": " + entry.getPrezzo() + "}";
	
				if(bevandaCounter+1 == bevande.size()) {
					json+="]";
				} else {
					json+=",";
				}
	
				bevandaCounter++;
			}
		}

		json += "}";

		return json;
    }
    
}

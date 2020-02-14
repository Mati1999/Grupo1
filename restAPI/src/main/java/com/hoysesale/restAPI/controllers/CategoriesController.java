package com.hoysesale.restAPI.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hoysesale.restAPI.entities.Categoria;
import com.hoysesale.restAPI.services.ICategoriaService;

@RestController
@CrossOrigin
@RequestMapping("/categorias")
public class CategoriesController {
	
	@Autowired
	@Qualifier("CategoriaServiceImpl")
	private ICategoriaService categoriasService;
	
	@GetMapping("/getCategorias")
	public Iterable<Categoria> getCategorias() {
		return categoriasService.getCategorias();
	}
	
}

package com.hoysesale.restAPI.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hoysesale.restAPI.entities.Categoria;
import com.hoysesale.restAPI.repositories.ICategoriaRepo;
import com.hoysesale.restAPI.services.ICategoriaService;

@Service("CategoriaServiceImpl")
public class CategoriaServiceImpl implements ICategoriaService{
	
	@Autowired
	private ICategoriaRepo categoriaRepo;

	@Override
	public Iterable<Categoria> getCategorias() {
		return categoriaRepo.findAll();
	}

}

package com.hoysesale.restAPI.repositories;

import org.springframework.data.repository.CrudRepository;

import com.hoysesale.restAPI.entities.Categoria;

public interface ICategoriaRepo extends CrudRepository<Categoria, Long>{

}

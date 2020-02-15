package com.hoysesale.restAPI.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "boliches")
public class Boliche {

	//Attributes
	@Id
	@Column(name = "id_boliche")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_boliche;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "domicilio")
	private String domicilio;
	
	@Column(name = "imagen")
	private String imagen;

	//Default Constructor
	public Boliche() {
		
	}
	
	//Getters and Setters
	public Long getId_boliche() {
		return id_boliche;
	}

	public void setId_boliche(Long id_boliche) {
		this.id_boliche = id_boliche;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
}

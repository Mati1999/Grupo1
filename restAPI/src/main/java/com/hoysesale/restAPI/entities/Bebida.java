package com.hoysesale.restAPI.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bebidas")
public class Bebida {

	//Attributes
	@Id
	@Column(name = "id_bebida")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_bebida;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "imagen")
	private String imagen;
	
	@Column(name = "precio")
	private float precio;
	
	@Column(name = "stock")
	private int stock;
	
	@ManyToOne
	private Categoria categoria;
	
	//Default Contrsuctor
	public Bebida() {
		
	}

	//Getters and Setters
	public Long getId_bebida() {
		return id_bebida;
	}

	public void setId_bebida(Long id_bebida) {
		this.id_bebida = id_bebida;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}
	
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	
}

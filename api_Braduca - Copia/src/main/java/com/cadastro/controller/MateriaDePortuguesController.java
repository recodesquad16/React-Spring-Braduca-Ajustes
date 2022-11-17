package com.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.model.entity.MateriaDePortugues;
import com.cadastro.serviceImpl.MateriaDePortuguesServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/materiadeportugues")
public class MateriaDePortuguesController {

	@Autowired
	private MateriaDePortuguesServiceImpl service;
	
	//REQUEST TESTE
	@GetMapping("/home")
	public String hello() { 
		return "oi";
	}
	// REQUEST DE LISTAGEM
	@GetMapping
	public ResponseEntity<List<MateriaDePortugues>> findAll() { 
		List<MateriaDePortugues> MateriaDePortugues = service.getAllMateriaDePortugues();
		return ResponseEntity.ok().body(MateriaDePortugues);
	}
	// REQUEST POR ID
	@GetMapping("{id}")
	public ResponseEntity<MateriaDePortugues> getMateriaDePortuguesById(@PathVariable("id") long MateriaDePortuguesId) { 
		return new ResponseEntity<MateriaDePortugues>(service.getMateriaDePortuguesById(MateriaDePortuguesId), HttpStatus.OK);
	}
	
	//REQUEST PARA SALVAR
	@PostMapping
	public ResponseEntity<MateriaDePortugues> saveMateriaDePortugues(@RequestBody MateriaDePortugues MateriaDePortugues){
		return new ResponseEntity<MateriaDePortugues>(service.saveMateriaDePortugues(MateriaDePortugues), HttpStatus.CREATED);
	}
	
	//REQUEST PARA ATUALIZAR
	@PutMapping("{id}")
	public ResponseEntity<MateriaDePortugues> updateMateriaDePortugues(@PathVariable("id") long id, 
			@RequestBody MateriaDePortugues MateriaDePortugues){
		return new ResponseEntity<MateriaDePortugues>(service.updateMateriaDePortugues(MateriaDePortugues, id), HttpStatus.OK);
	}
	
	//REQUEST PARA DELETAR
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteMateriaDePortugues(@PathVariable("id") long id){
		service.deleteMateriaDePortugues(id);
		
		return new ResponseEntity<String>("MateriaDePortugues deletado com sucesso.", 
				HttpStatus.OK);
	}
	
}

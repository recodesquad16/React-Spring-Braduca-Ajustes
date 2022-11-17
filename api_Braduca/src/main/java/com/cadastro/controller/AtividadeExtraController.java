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

import com.cadastro.model.entity.AtividadeExtra;
import com.cadastro.serviceImpl.AtividadeExtraServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/atividadeextra")
public class AtividadeExtraController {
	
    @Autowired
	private AtividadeExtraServiceImpl service;
	
	
	
	@GetMapping ("/home")
	public String  completed() {
		return " oi";
	}
		
	// REQUEST DE LISTAGEM
	@GetMapping
	public ResponseEntity<List<AtividadeExtra>> findAll() { 
		List<AtividadeExtra> AtividadeExtra = service.getAllAtividadeExtra();
		return ResponseEntity.ok().body(AtividadeExtra);
	}
	// REQUEST POR ID
	@GetMapping("{id}")
	public ResponseEntity<AtividadeExtra> getAtividadeExtraById(@PathVariable("id") long AtividadeExtraId) { 
		return new ResponseEntity<AtividadeExtra>(service.getAtividadeExtraById(AtividadeExtraId), HttpStatus.OK);
	}
	
	//REQUEST PARA SALVAR
	@PostMapping
	public ResponseEntity<AtividadeExtra> saveAtividadeExtra(@RequestBody AtividadeExtra AtividadeExtra){
		return new ResponseEntity<AtividadeExtra>(service.saveAtividadeExtra(AtividadeExtra), HttpStatus.CREATED);
	}
	
	//REQUEST PARA ATUALIZAR
	@PutMapping("{id}")
	public ResponseEntity<AtividadeExtra> updateAtividadeExtra(@PathVariable("id") long id, 
			@RequestBody AtividadeExtra AtividadeExtra){
		return new ResponseEntity<AtividadeExtra>(service.updateAtividadeExtra(AtividadeExtra, id), HttpStatus.OK);
	}
	
	//REQUEST PARA DELETAR
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteAtividadeExtra(@PathVariable("id") long id){
		service.deleteAtividadeExtra(id);
		
		return new ResponseEntity<String>("AtividadeExtra deletada com sucesso.", 
				HttpStatus.OK);
	}
}

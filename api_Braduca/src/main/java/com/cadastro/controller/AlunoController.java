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

import com.cadastro.model.entity.Aluno;
import com.cadastro.serviceImpl.AlunoServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoServiceImpl service;
	
	//REQUEST TESTE
	@GetMapping ("/home")
	public String registered  () {
	return"  oi";
	}
	// REQUEST DE LISTAGEM
	@GetMapping
	public ResponseEntity<List<Aluno>> findAll() { 
		List<Aluno> Aluno = service.getAllAluno();
		return ResponseEntity.ok().body(Aluno);
	}

	// REQUEST POR ID	
	@GetMapping("{id}")
	public ResponseEntity<Aluno> getAlunoById(@PathVariable("id") long AlunoId) { 
			return new ResponseEntity<Aluno>(service.getAlunoById(AlunoId), HttpStatus.OK);
	}

	
	//REQUEST PARA SALVAR
	@PostMapping
	public ResponseEntity<Aluno> saveAluno(@RequestBody Aluno Aluno){
		return new ResponseEntity<Aluno>(service.saveAluno(Aluno), HttpStatus.CREATED);
	}
	
	//REQUEST PARA ATUALIZAR	
	@PutMapping("{id}")
	public ResponseEntity<Aluno> updateAluno(@PathVariable("id") long id, 
		@RequestBody Aluno Aluno){
		return new ResponseEntity<Aluno>(service.updateAluno(Aluno, id), HttpStatus.OK);
	}
	//REQUEST PARA DELETAR
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteAluno(@PathVariable("id") long id){
			service.deleteAluno(id);
			
			return new ResponseEntity<String>("Aluno deletado com sucesso.", 
					HttpStatus.OK);
		}
}

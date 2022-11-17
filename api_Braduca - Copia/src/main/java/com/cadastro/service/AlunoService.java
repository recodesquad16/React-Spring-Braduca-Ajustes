package com.cadastro.service;

import java.util.List;

import com.cadastro.model.entity.Aluno;


public interface AlunoService {
	
	Aluno saveAluno(Aluno Aluno);
	List <Aluno>getAllAluno();
	Aluno getAlunoById(long id);
	Aluno updateAluno(Aluno Aluno, long id);
	void deleteAluno(long id);
	
	

}

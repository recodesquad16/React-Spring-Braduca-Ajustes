package com.cadastro.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.excption.ResourceNotFoundException;
import com.cadastro.model.entity.Aluno;
import com.cadastro.repositories.AlunoRepository;
import com.cadastro.service.AlunoService;

@Service
public  class AlunoServiceImpl  implements AlunoService{

	
	@Autowired
    private AlunoRepository  AlunoRepository;
	
	@Override
	public Aluno saveAluno(Aluno Aluno) {
	return AlunoRepository.save(Aluno);
	}
	
	@Override
	public List<Aluno> getAllAluno(){
		return  AlunoRepository.findAll();
	}
	@Override
	public Aluno getAlunoById(long id) {
		return AlunoRepository.findById(id).orElseThrow(()-> 
		new ResourceNotFoundException("Aluno", "id", id));
	}
	@Override
	public  Aluno  updateAluno ( Aluno  Aluno, long id) { 
		    Aluno  AlunoExistente = AlunoRepository.findById(id).orElseThrow();
		    AlunoExistente.setNome_aluno( Aluno.getNome_aluno());
		    AlunoExistente.setEndereco( Aluno.getEndereco());
		    AlunoExistente.setRg( Aluno.getRg());
		    AlunoExistente.setCpf( Aluno.getCpf());
		    AlunoExistente.setEmail( Aluno.getEmail());
		    AlunoExistente.setSenha( Aluno.getSenha());
		    AlunoRepository.save( AlunoExistente);
			return  AlunoExistente;
	}
	@Override
	public void deleteAluno(long id) {
		AlunoRepository.findById(id).orElseThrow();
        AlunoRepository.deleteById(id);
   }

}

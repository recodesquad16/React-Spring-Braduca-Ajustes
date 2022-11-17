package com.cadastro.service;

import java.util.List;

import com.cadastro.model.entity.MateriaDePortugues;
	

public interface MateriaDePortuguesService {
	MateriaDePortugues saveMateriaDePortugues(MateriaDePortugues MateriaDePortugues);
	List <MateriaDePortugues> getAllMateriaDePortugues();
	MateriaDePortugues getMateriaDePortuguesById(long id);
	MateriaDePortugues updateMateriaDePortugues(MateriaDePortugues MateriaDePortugues, long id);
	void deleteMateriaDePortugues(long id);
	

}

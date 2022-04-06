/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { syncBuiltinESMExports } from "module";
import { where } from "sequelize/types";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);

	const Sequelize = require('sequelize');
	const bancoDeDados = require('../models/index.js')
	const AlunoDao = require('../Dao/Modelo-dao')
	const readlineSync = require('readline-sync')

	const sequelize = new Sequelize('postgres', 'postgres', 1362453, {
		host: 'localhost',	
		dialect: 'postgres'
	})	

	class Alunoo {
		
		Nome: string;
		Nota: number;
		constructor(nome: string, nota: number) {
			this.Nome = nome
			this.Nota = nota
		}	
	}

	const readLineSync = require('readline-sync')
	const nome1 = readlineSync.question('Nomes dos alunos: ')
	const nome2 = readlineSync.question('')
	const nome3 = readlineSync.question('')
	const nome4 = readlineSync.question('')
	const nome5 = readlineSync.question('')

	const nota1 = readlineSync.question('Nota dos alunos '+nome1+'?:' )
	const nota2 = readlineSync.question('Nota dos alunos '+nome2+'?:' )
	const nota3 = readlineSync.question('Nota dos alunos '+nome3+'?:' )
	const nota4 = readlineSync.question('Nota dos alunos '+nome4+'?:' )
	const nota5 = readlineSync.question('Nota dos alunos '+nome5+'?:' )

	const listagem = (nome1+':'+nota1+', '+nome2+':'+nota2+', '+ nome3+':'+nota3+', '+nome4+':'+nota4+', '+nome5+':'+nota5)

	const Nomes = (nome1 + nome2 + nome3 + nome3 + nome5)
	const Notas = (nota1 + nota2 + nota3 + nota4 + nota5)	

	console.log(listagem)

	await bancoDeDados.Alunos.create({firstName: nome1, Notas: nota1});
	await bancoDeDados.Alunos.create({firstName: nome2, Notas: nota2});
	await bancoDeDados.Alunos.create({firstName: nome3, Notas: nota3});
	await bancoDeDados.Alunos.create({firstName: nome4, Notas: nota4});
	await bancoDeDados.Alunos.create({firstName: nome5, Notas: nota5});

	let dao = new AlunoDao()
	console.log('-------------------------')
	console.log(dao.list())

	console.log('-------------------------')
	dao.delete(1)
	console.log(dao.list())

	console.log('-------------------------') 
	let aluno = dao.findById(3)
	console.log(aluno)

	let novoAluno = { id: 4, nome: 'Ana', nota: 10}
	dao.save(novoAluno)

	console.log('-------------------------')
	console.log(dao.list())


});



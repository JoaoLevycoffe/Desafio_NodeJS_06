/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { syncBuiltinESMExports } from "module";

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
	const nome1 = readLineSync.question('Nomes dos alunos: ')
	const nome2 = readLineSync.question('')
	const nome3 = readLineSync.question('')
	const nome4 = readLineSync.question('')
	const nome5 = readLineSync.question('')

	const nota1 = readLineSync.question('Nota dos alunos '+nome1+'?:' )
	const nota2 = readLineSync.question('Nota dos alunos '+nome2+'?:' )
	const nota3 = readLineSync.question('Nota dos alunos '+nome3+'?:' )
	const nota4 = readLineSync.question('Nota dos alunos '+nome4+'?:' )
	const nota5 = readLineSync.question('Nota dos alunos '+nome5+'?:' )

	const listagem = (nome1+':'+nota1+', '+nome2+':'+nota2+', '+ nome3+':'+nota3+', '+nome4+':'+nota4+', '+nome5+':'+nota5)

	const Nomes = (nome1 + nome2 + nome3 + nome3 + nome5)
	const Notas = (nota1 + nota2 + nota3 + nota4 + nota5)	

	console.log(listagem)
	
	await bancoDeDados.Alunos.create({firstName: nome1, Notas: nota1});
	await bancoDeDados.Alunos.create({firstName: nome2, Notas: nota2});
	await bancoDeDados.Alunos.create({firstName: nome3, Notas: nota3});
	await bancoDeDados.Alunos.create({firstName: nome4, Notas: nota4});
	await bancoDeDados.Alunos.create({firstName: nome5, Notas: nota5});


});

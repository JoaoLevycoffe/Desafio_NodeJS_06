
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('postgres', 'postgres', 1362453, {
        host: 'localhost',	
        dialect: 'postgres'
})

class AlunoDao {
    alunos: { id: number; nome: string; nota: number }[]
	
        constructor(){ 
            
            this.alunos = [ 
                {id: 1, nome: 'Levy', nota: 7},
                {id: 2, nome: 'Leandro', nota: 8},
                {id: 3, nome: 'Lucas', nota: 5}
        ]        
    }

    list(){
        return this.alunos
     }

    save(aluno: { id: number; nome: string; nota: number; }){
        this.alunos.push(aluno)
    }

    findById(id: number){
        for( let aluno of this.alunos){
            if (aluno.id == id)
                return aluno
        }
        return null
    }

    delete(id: number){
        this.alunos = this.alunos.filter(function(aluno){
            return aluno.id != id
        })
    }
}

module.exports = AlunoDao


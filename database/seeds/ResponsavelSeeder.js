'use strict'

/*
|--------------------------------------------------------------------------
| ResponsavelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Responsavel = use('App/Models/Responsavel')

class ResponsavelSeeder {
  async run () {
  	await Responsavel.createMany([
  		{nome: 'João da Silva',
  			cpf:'999999886-66',
  			identidade:'5605858',
  			telefone:'6140028922', 
  			endereco:'Rua ABC quadra A casa 19',
  			data_nascimento:'1980-01-10',
  			sexo:'M'
  		},
  		{nome: 'Thiago',
  			cpf:'999999886-66',
  			identidade:'5605858',
  			telefone:'6140028922', 
  			endereco:'Rua ABC quadra A casa 19',
  			data_nascimento:'1980-01-10',
  			sexo:'M'
  		},
  		{nome: 'Maria da Silva',
  			cpf:'999999886-66',
  			identidade:'5605858',
  			telefone:'6140028922', 
  			endereco:'Rua ABC quadra A casa 19',
  			data_nascimento:'1980-01-10',
  			sexo:'M'
  		},
  		{nome: 'Jefferson Silva',
  			cpf:'999999886-66',
  			identidade:'5605858',
  			telefone:'6140028922', 
  			endereco:'Rua ABC quadra A casa 19',
  			data_nascimento:'1980-01-10',
  			sexo:'M'
  		},
  		])
  }
}

module.exports = ResponsavelSeeder

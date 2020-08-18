'use strict'

/*
|--------------------------------------------------------------------------
| LeitoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Leito =use('App/Models/Leito')
class LeitoSeeder {
  async run () {
  	await Leito.createMany([
  		{tipo:'UTI', capacidade:'2'},
  		{tipo:'Comum', capacidade:'6'},
  		{tipo:'UTI Neonatal', capacidade:'4'},
  		])
  }
}

module.exports = LeitoSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| SintomaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Sintoma =use('App/Models/Sintoma')

class SintomaSeeder {
  async run () {
  	await Sintoma.createMany([
  	{nome:'Febre'},
  	{nome:'Dor no Corpo'},
  	{nome:'Vômito'},
  	{nome:'Diarreia'},
  	])
  }
}

module.exports = SintomaSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| DoencaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Doenca =use('App/Models/Doenca')

class DoencaSeeder {
  async run () {
  	await Doenca.createMany([
  		{nome:'Dengue'},
  		{nome:'Covid-19'},
  		{nome:'Diabetes'},
  		{nome:'AIDS'},
  		{nome:'Câncer'},
  		])
  	}
  }

module.exports = DoencaSeeder
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResponsavelSchema extends Schema {
  up () {
    this.create('responsavels', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').unsigned().notNullable()
      table.bigInteger('identidade').notNullable()
      table.bigInteger('telefone')
      table.date('data_nascimento', 10).notNullable()
      table.text('endereco', 50).notNullable()
      table.string('sexo', 1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('responsavels')
  }
}

module.exports = ResponsavelSchema

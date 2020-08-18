'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicoSchema extends Schema {
  up () {
    this.create('medicos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').unsigned().notNullable()
      table.bigInteger('identidade').notNullable()
      table.bigInteger('telefone')
      table.date('data_nascimento', 10).notNullable()
      table.text('endereco', 50).notNullable()
      table.string('sexo', 1).notNullable()
      table.integer('crm', 7).unique().notNullable()
      table.integer('paciente-id').unsigned().references('id').inTable('fichas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicos')
  }
}

module.exports = MedicoSchema

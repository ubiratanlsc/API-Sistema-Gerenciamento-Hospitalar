'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FichaSchema extends Schema {
  up () {
    this.create('fichas', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').unsigned().notNullable()
      table.bigInteger('identidade').notNullable()
      table.bigInteger('telefone')
      table.date('data_nascimento', 10).notNullable()
      table.text('endereco', 50).notNullable()
      table.string('sexo', 1).notNullable()
      table.string('internacao', 1)
      table.string('risco_contagio', 1)
      table.integer('reponsavel-id').unsigned().references('id').inTable('responsavels').notNullable()
      table.integer('historico-id').unsigned().references('id').inTable('historicos').notNullable()
      table.integer('triagem-id').unsigned().references('id').inTable('triagems').notNullable()
      table.integer('quarto-id').unsigned().references('id').inTable('leitos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fichas')
  }
}

module.exports = FichaSchema

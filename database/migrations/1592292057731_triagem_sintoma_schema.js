'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TriagemSintomaSchema extends Schema {
  up () {
    this.create('triagem_sintomas', (table) => {
      table.increments()
      table.integer('triagem_id').unsigned().references('id').inTable('triagems').notNullable()
      table.integer('sintoma_id').unsigned().references('id').inTable('sintomas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('triagem_sintomas')
  }
}

module.exports = TriagemSintomaSchema

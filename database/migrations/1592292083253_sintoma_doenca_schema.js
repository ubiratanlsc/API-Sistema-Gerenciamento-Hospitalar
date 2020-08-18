'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SintomaDoencaSchema extends Schema {
  up () {
    this.create('sintoma_doencas', (table) => {
      table.increments()
      table.integer('sintoma-id').unsigned().references('id').inTable('sintomas').notNullable()
      table.integer('doenca_id').unsigned().references('id').inTable('doencas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sintoma_doencas')
  }
}

module.exports = SintomaDoencaSchema

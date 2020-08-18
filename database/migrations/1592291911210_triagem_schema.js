'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TriagemSchema extends Schema {
  up () {
    this.create('triagems', (table) => {
      table.increments()
      table.text('encaminhamento', 100).notNullable()
      table.text('observacao', 300)
      table.timestamps()
    })
  }

  down () {
    this.drop('triagems')
  }
}

module.exports = TriagemSchema

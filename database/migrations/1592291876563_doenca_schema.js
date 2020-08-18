'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoencaSchema extends Schema {
  up () {
    this.create('doencas', (table) => {
      table.increments()
      table.string('nome', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('doencas')
  }
}

module.exports = DoencaSchema

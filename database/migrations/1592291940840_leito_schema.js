'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeitoSchema extends Schema {
  up () {
    this.create('leitos', (table) => {
      table.increments()
      table.string('tipo', 20)
      table.integer('capacidade', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('leitos')
  }
}

module.exports = LeitoSchema

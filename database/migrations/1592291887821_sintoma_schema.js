'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SintomaSchema extends Schema {
  up () {
    this.create('sintomas', (table) => {
      table.increments()
      table.string('nome', 100) 
      table.timestamps()
    })
  }

  down () {
    this.drop('sintomas')
  }
}

module.exports = SintomaSchema

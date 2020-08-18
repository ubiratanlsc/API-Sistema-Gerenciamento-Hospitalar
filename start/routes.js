'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
/**Route.get('/doencas', 'DoencasController.index')
Route.post('/doencas', 'DoencasController.store')
Route.get('/doencas/:id', 'DoencasController.show')
Route.put('/doencas/:id', 'DoencasController.update')
Route.delete('/doencas/:id', 'DoencasController.destroy')*/

Route.resource('/doencas', 'DoencaController').apiOnly()
Route.resource('/sintomas', 'SintomaController').apiOnly()
Route.resource('/fichas', 'FichaController').apiOnly()
Route.resource('/historicos', 'HistoricoController').apiOnly()
Route.resource('/leitos', 'LeitoController').apiOnly()
Route.resource('/medicos', 'MedicoController').apiOnly()
Route.resource('/responsaveis', 'ResponsavelController').apiOnly()
Route.resource('/sintomasdoencas', 'SintomaDoencaController').apiOnly()
Route.resource('/triagem', 'TriagemController').apiOnly()
Route.resource('/triagemsintoma', 'TriagemSintomaController').apiOnly()

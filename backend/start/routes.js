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
  return {greeting: 'Hello world in JSON'}
})

Route.post('/auth/signup', 'UserController.signup').validator(['Signup'])
Route.post('/auth/login', 'UserController.login').validator(['Login'])

Route.get('users/me', 'UserController.me').middleware('auth')

Route.get('todos', 'TodoController.get').middleware('auth')
Route.post('todos', 'TodoController.create').middleware('auth')
Route.put('todos', 'TodoController.update').middleware('auth')
Route.delete('todos/:id', 'TodoController.delete').middleware('auth')

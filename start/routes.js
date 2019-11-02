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

/* Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}) */

/*
 *We create a route that accepts the POST method at the /users address 
 *and calls the create method on the UserController controller.
 */
Route.post('/users', 'UserController.create')

//authentication route
Route.post('/sessions', 'SessionController.create')

/*
 *create all listing, display, creation, update, and distroy routes in one command
 *auth middleware will ensure that unauthenticated users cannot use these routes.
 */
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')
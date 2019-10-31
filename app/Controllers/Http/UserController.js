'use strict'
//import model of User
const User = use("App/Models/User")

class UserController {
    /*asynchronous method that receives as request parameter 
    that contains data like parameters, body, headers ...*/
    async create({ request }){

        /*We look up the username, email and password fields 
        from the body of our request and store them in an object called data*/
        const data = request.only(["username", "email", "password"])

        /*We create a new user by passing the parameters coming from the request 
        and save this new user in a user variable;*/
        const user = await User.create(data)

        /*We return the new user as a result of the request, as we selected, 
        in our case the return will be a JSON.*/
        return user
    }
}

module.exports = UserController

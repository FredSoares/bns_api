'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Property extends Model {

    //property always belongs to a user
    user () {
        return this.belongsTo('App/Models/User')
      }
    
    //a property has many images
    images () {
    return this.hasMany('App/Models/Image')
    }
}

module.exports = Property

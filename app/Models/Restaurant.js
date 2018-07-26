'use strict'

const Model = use('Model')

class Restaurant extends Model {
    tables() {
        return this.hasMany('App/Models/RestaurantTables', 'id', 'restaurants_id')
    }
}

module.exports = Restaurant

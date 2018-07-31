'use strict'

const Model = use('Model')

class Restaurant extends Model {

    tables() {
        return this.hasMany('App/Models/RestaurantTables', 'id', 'restaurants_id')
    }

    menuItems() {
        return this.hasMany('App/Models/MenuItem', 'id', 'restaurants_id')
    }

    events() {
        return this.hasMany('App/Models/Event', 'id', 'restaurants_id')
    }
    
}

module.exports = Restaurant

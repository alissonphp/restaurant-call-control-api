'use strict'

const Model = use('Model')

class RestaurantTables extends Model {
    restaurant() {
        return this.belongsTo('App/Model/Restaurant', 'id', 'restaurants_id')
    }
}

module.exports = RestaurantTables

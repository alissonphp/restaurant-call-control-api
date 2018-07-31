'use strict'

const Model = use('Model')

class Event extends Model {

    restaurant() {
        return this.belongsTo('App/Models/Restaurants', 'id', 'restaurants_id')
    }
    
}

module.exports = Event

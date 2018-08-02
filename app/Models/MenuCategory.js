'use strict'

const Model = use('Model')

class MenuCategory extends Model {
    restaurant() {
        return this.belongsTo('App/Models/Restaurant', 'id', 'restaurants_id')
    }
    
    items() {
        return this.hasMany('App/Models/MenuItem', 'id', 'menu_categories_id')
    }
}

module.exports = MenuCategory

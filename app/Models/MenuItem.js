'use strict'

const Model = use('Model')

class MenuItem extends Model {
    restaurant() {
        return this.belongsTo('App/Models/Restaurant', 'id', 'restaurants_id')
    }
    menuCategory() {
        return this.belongsTo('App/Models/MenuCategory', 'id', 'menu_categories_id')
    }
}

module.exports = MenuItem

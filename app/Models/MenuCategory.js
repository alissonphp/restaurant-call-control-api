'use strict'

const Model = use('Model')

class MenuCategory extends Model {
    menuItems() {
        return this.hasMany('App/Models/MenuItem', 'id', 'menu_categories_id')
    }
}

module.exports = MenuCategory

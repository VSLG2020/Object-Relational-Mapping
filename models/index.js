// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// create associations
// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });
//The type of the association. One of HasMany, BelongsTo, HasOne, BelongsToMany
//User.hasMany(Project, { as: 'jobs' })

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
through:ProductTag,
as:'tagprodId',
foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
  as:'tagprodId',
  foreignKey: 'tag_id'
})

//export
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const sequel = require("sequelize")
const connection = require("./index.js")

const Places = connection.define(
  "places",
  {
    id:{type:sequel.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
    name:{type:sequel.STRING},
    review_count:{type:sequel.INTEGER},
    rating:{type:sequel.INTEGER},
    price:{type:sequel.STRING},
    display_name:{type:sequel.STRING},
    display_phone_number:{type:sequel.STRING},
    url:{type:sequel.STRING}
  },
  {
    timestamps:false
  },
  connection 
    .sync()
    .then(() => console.log('model set'))
    .catch((err) => {console.log(err)})
)
const Categories = connection.define(
  "categories",
  {
    id:{type:sequel.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
    category:{type:sequel.STRING}
  },
  {
    timestamps:false
  },
  connection 
    .sync()
    .then(() => {console.log("model set")})
    .catch((err) => {console.log(err)})
)
const Links = connection.define(
  "links",
  {
    id:{type:sequel.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
    place_id:{type:sequel.INTEGER},
    category_id:{type:sequel.INTEGER}
  },
  {
    timestamps:false
  },
  connection 
    .sync()
    .then(() => {console.log('model set')})
    .catch((err) => {console.log(err)})
)

module.exports.Places = Places;
module.exports.Categories = Categories;
module.exports.Links = Links;
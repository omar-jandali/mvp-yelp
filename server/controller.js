const model = require("../database/models.js")
// yelp api
const yelp = require("yelp-fusion")
const api_key = require("../config.js")
const client = yelp.client(api_key)

const controller = {
  get:(req, res) => {
    console.log('success')
  },
  post:(req, res) => {
    console.log('success')
    // grab required content
    var name = req.body.name;
    // set the api request
    client.search({
      term:"",
      location:"Los Angeles, Ca"
    })
    .then(response => {
      response.jsonBody.businesses.forEach(place => {
        display_address = place.location.display_address[0] + place.location.display_address[1]
        model.Places.create({
          name:place.name,
          review_count:place.review_count,
          rating:place.rating,
          price:place.price,
          display_address:place.display_address,
          display_phone_number:place.display_phone_number,
          url:place.url
        })
        .then()
        .catch((err) => {console.log(err)})
        // check to see if ti s better to nest the calls
        place.categories.forEach((category) => {
          model.Categories.create({
            category:category.title
          })
        })
        .then()
        .catch((err) => {console.log(err)})
        model.Links.create({
          place_id:place.id,
          category_id:category.id
        })
        .then(() => {
          res.status(201).send("success")
        })
      })
    })    
  },
  put:(req, res) => {
    console.log('success')
  },
  delete:(req, res) => {
    console.log('success')
  }
}

module.exports = controller;
var development = require('./knexfile').development
var knex = require ('knex')(development)

/*insert a line of data into the database */
// knex('users')
// .insert({
//   name:'strawberry'
// })

/* Another way to insert data into database */
// knex.insert({
//     name: 'strawberry'
//   })
//   .into('users')
//   .then(getNames)
//   .then(showNames)ß
//   .catch(displayError)
//
// function getNames () {
//   return knex('users').select('users.name')
// }
//
// function showNames (names) {
//   console.log(names)
// }
//
// function displayError (err) {
//   console.error(err)
// }

/* One way to read data from a database */
// var returnedData = knex('users')
//   .where({
//     id:4
//   }).select('name')
// .then(console.log)
// .catch(console.error)

/* updating data already in the file */

// knex('users')
//   .whereIn('id', [2, 3])
//   .update({
//   name: 'rice',
//   name:'fry'
//   })
//   .select('name')
//   .then(console.log)
//   .catch(console.error)


knex('users')
  .where('id', '>', 1)
  .del()
  .then(console.log)

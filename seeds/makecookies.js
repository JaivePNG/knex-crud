
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'choco'}),
        knex('users').insert({id: 2, name: 'vanilla'}),
        knex('users').insert({id: 3, name: 'rainbow'}),
        knex('users').insert({id: 4, name: 'watermelon'})
      ]);
    });
};

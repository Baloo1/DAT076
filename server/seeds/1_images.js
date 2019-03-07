
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 0, image_path: './images/b90723e7-3273-419d-8956-27558c2a7508.png'},
      ]);
    });
};

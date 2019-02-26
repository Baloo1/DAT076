
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('experiences').del()
    .then(function () {
      // Inserts seed entries
      return knex('experiences').insert([
          {id: 1, user_id: 0, title: 'Admin of this site', description: 'It\'s a hard life', public: true},
          {id: 2, user_id: 0, title: 'Creator of this site', description: 'It\'s even harder to make something this good', public: true},
          {id: 3, user_id: 0, title: 'Sleeping', description: 'I\'m really tired right now', public: true},
      ]);
    });
};

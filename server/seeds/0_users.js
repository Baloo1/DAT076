
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 0, email: 'admin@admin.com', password: 'admin', role: 'admin', name: 'admin', phone: '0123-45 67 89', website: 'www.admin.com', twitter: '@admin'},
      ]);
    });
};

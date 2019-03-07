
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          // password is admin
        {id: 0, email: 'admin@admin.com', image_id: 0, password: '$2b$10$O9zz1ENsnYC3f9W/FE3SaOBnE7RGBFXoIA/vSXBgxD1wfPJ067qlO', role: 'admin', phone: '070-1234567', twitter: '@admin', website: 'www.example.com', name: 'admin'},
      ]);
    });
};

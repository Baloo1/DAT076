
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('abouts').del()
        .then(function () {
            // Inserts seed entries
            return knex('abouts').insert([
                {id: 1, user_id: 0, title: 'Coding languages', description: 'Almost javascript'},
                {id: 2, user_id: 0, title: 'Database knowledge', description: 'Postgresql'},
            ]);
        });
};

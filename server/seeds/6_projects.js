
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(function () {
            // Inserts seed entries
            return knex('projects').insert([
                {id: 1, user_id: 0, title: 'A year', description: 'This was the year 2000', start_date: '2000-01-01', end_date: '2000-12-31', image_id: 0},
            ]);
        });
};

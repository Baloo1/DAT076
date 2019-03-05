exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('experiences').del()
        .then(knex('users').del())
}

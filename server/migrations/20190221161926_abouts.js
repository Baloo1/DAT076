
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('abouts', table => {
            table.increments('about_id').primary();
            table.integer('user_id').references('user_id').inTable('users');
            table.string('title');
            table.string('description');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('abouts')
    ])
};

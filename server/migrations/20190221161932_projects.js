
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('projects', table => {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('users');
            table.string('title');
            table.string('description');
            table.integer('image_id').references('id').inTable('images').defaultTo(0);
            table.date('start_date');
            table.date('end_date');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('projects')
    ]);
};

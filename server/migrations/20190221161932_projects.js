
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('projects', table => {
            table.increments('project_id').primary();
            table.integer('user_id').references('user_id').inTable('users');
            table.string('title');
            table.string('description');
            table.integer('image_id').references('image_id').inTable('images');
            table.date('start_date');
            table.date('end_date');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('projects')
    ])
};

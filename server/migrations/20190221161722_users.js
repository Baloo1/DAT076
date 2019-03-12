
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments('id').primary();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.enum('role', ['user', 'admin']).defaultTo('user');
            table.string('name');
            table.integer('image_id').references('images.id');
            table.string('phone');
            table.string('website');
            table.string('twitter');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ]);
};

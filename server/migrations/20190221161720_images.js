
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('images', table => {
            table.increments('id').primary();
            table.string('image_path');
            table.boolean('thumbnail_done').defaultTo(false);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('images')
    ]);
};

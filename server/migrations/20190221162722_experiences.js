
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('experiences', table => {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('users');
            table.string('title');
            table.date('start_date');
            table.date('end_date');
            table.string('description');
            table.boolean('public').defaultTo(false);
            table.integer('company_id').references('id').inTable('companies');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('experiences')
    ]);
};

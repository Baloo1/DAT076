
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('companies', table => {
            table.increments('company_id').primary();
            table.string('name');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('companies')
    ])
};

exports.seed = async function(knex, Promise) {
    // Deletes ALL existing entries
    await knex('abouts').del();
    await knex('experiences').del();
    await knex('experiences').del();
    await knex('projects').del();
    await knex('companies').del();
    await knex('users').del();
    await knex('images').del();
};

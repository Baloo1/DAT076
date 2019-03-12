const Knex = require('knex');
const connection = require('../knexfile');
const {Model} = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Image extends Model {
    static get tableName() {
        return 'images';
    }

    static relationMappings() {
        return {
            image_users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'users.image_id',
                    to: 'images.id'
                }
            },
            image_projects: {
                relation: Model.HasManyRelation,
                modelClass: Image,
                join: {
                    from: 'projects.image_id',
                    to: 'images.id'
                }
            }
        };
    }
}

class User extends  Model {
    static get tableName() {
        return 'users';
    }

    static relationMappings() {
        return {
            user_image: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: 'users.image_id',
                    to: 'images.id'
                }
            },
            user_abouts: {
                relation: Model.HasManyRelation,
                modelClass: About,
                join: {
                    from: 'users.id',
                    to: 'abouts.user_id'
                }
            },
            user_experiences: {
                relation: Model.HasManyRelation,
                modelClass: Experience,
                join: {
                    from: 'users.id',
                    to: 'experiences.user_id'
                }
            },
            user_projects: {
                relation: Model.HasManyRelation,
                modelClass: Project,
                join: {
                    from: 'users.id',
                    to: 'projects.user_id'
                }
            }
        };
    }
}

class Company extends Model {
    static get tableName() {
        return 'companies';
    }

    static relationMappings() {
        return {
            company_experiences: {
                relation: Model.HasManyRelation,
                modelClass: Experience,
                join: {
                    from: 'experiences.company_id',
                    to: 'companies.id'
                }
            }
        };
    }
}

class About extends Model {
    static get tableName() {
        return 'abouts';
    }

    static relationMappings() {
        return {
            about_user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'abouts.user_id',
                    to: 'users.id'
                }
            }
        };
    }
}

class Project extends Model {
    static get tableName() {
        return 'projects';
    }

    static relationMappings() {
        return {
            project_user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'projects.user_id',
                    to: 'users.id'
                }
            },
            project_image: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: 'projects.image_id',
                    to: 'images.id'
                }
            }
        };
    }
}

class Experience extends Model {
    static get tableName() {
        return 'experiences';
    }

    static relationMappings() {
        return {
            experience_user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'experiences.user_id',
                    to: 'users.id'
                }
            },
            experience_company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'experiences.company_id',
                    to: 'companies.id'
                }
            }
        };
    }
}

module.exports = {Image, Company, User, About, Experience, Project};
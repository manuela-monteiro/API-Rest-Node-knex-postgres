const knex = require('../database');

module.exports = {
    async index(req, res) {
        try {
            const { user_id, page = 1 } = req.query;
        
            const query = knex('projects')
            .limit(5)
            .offset((page - 1) * 5);

            const countProj = knex('projects').count();

            if (user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username');

                countProj
                .where({ user_id });
            };

            const [ count ] = await countProj;
            res.header('X-Total-Count', count[ "count" ]);

            const results = await query;

            return res.json(results);

        } catch (error) {
            knex(error);
        };
    },

    async createProject(req, res, next) {
        try {
            const { title, user_id } = req.body;

            await knex('projects').insert({ title, user_id });
            
            return res.status(201).send("Project succesfully created");

        } catch (error) {
            next(error)
        };
        
    },

    async updateUser(req, res, next) {
        try {
            const { username } = req.body;
            const { id } = req.params;

            await knex('users').update({ username }).where({ id }); 

            return res.status(200).send("Nome de usuário atualizado com sucesso.");
        } catch (error) {
            next(error)
        };
    },

    async deleteUser(req, res, next) {
        try {
          const { id } = req.params;
          
          await knex('users').where({ id }).del();

          return res.status(200).send("Usuário deletado com sucesso");
        } catch (error) {
            next(error)
        };
    }
};
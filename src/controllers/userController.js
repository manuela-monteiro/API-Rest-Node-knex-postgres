const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users');
        
        return res.json(results);
    },

    async createUser(req, res, next) {
        try {
            const { username } = req.body;

            await knex('users').insert({ username });
            
            return res.status(201).send("User succesfully created");
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
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(request, response) {
        const { user } = request.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                // trás todos os usuários que não sejam igual o usuário logado
                { _id: { $ne: user } }, // ne = not equal
                // trás todos os usuários que não estejam dentro do array de likes
                { _id: { $nin: loggedDev.likes } }, // nin = not in
                // trás todos os usuários que não estejam dentro do array de dislikes
                { _id: { $nin: loggedDev.dislikes } }
            ]
        })

        return response.json(users);
    },

    async store(request, response) {
        const { username } = request.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return response.json(userExists);
        }

        const response_axios = await axios.get(`https://api.github.com/users/${username}`);

        const {name, bio, avatar_url: avatar} = response_axios.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return response.json(dev);
    }
};
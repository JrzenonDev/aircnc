// métodos controller
// index (retorna listagem de seção), show (lista uma única seção), strore (cria uma seção), update, destroy

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        //const email = req.body.email;
        // modo com desestruturação
        const { email } = req.body;

        let user = await User.findOne({ email: email });

        if(!user) {
            user  = await User.create({ email });
        }


        return res.json(user);
    }
};
import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        Mail.sendMail({
            from: 'Leo <pauloleonardodp@gmail.com',
            to: `${name} <${email}`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao gerenciador de tasks de email.`
        })

        return res.json(user)
    }
}
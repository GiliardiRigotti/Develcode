const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Sequelize = require('sequelize')
const { user } = require('pg/lib/defaults')
const sequelize = new Sequelize('postgres', 'postgres', '123456', { host: 'localhost', dialect: 'postgres', port: '5433' })


const User = sequelize.define('usuarios', {
    Nome: Sequelize.STRING,
    DataDeNascimento: Sequelize.DATE,
    Foto: Sequelize.STRING
});

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } })
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

app.post('/user', async (req, res) => {
    try {
        const user = req.body
        await User.create({
            Nome: user.Nome,
            DataDeNascimento: new Date(user.DataDeNascimento)
        })
    } catch (error) {
        res.send(error)
    } finally {
        res.send({ "mensagem": "Cadastrado com sucesso!" })
    }
})

app.put('/user/:id', async (req, res) => {
    try {
        const updateUser = req.body
        const { id } = req.params
        const user = await User.findByPk(id)
        user = updateUser
        await user.save()
    } catch (error) {
        res.send(error)
    } finally {
        res.send({ "mensagem": "Usuario Atualizado!" })
    }
})

app.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id)
        await user.destroy()
    } catch (error) {
        res.send(error)
    } finally {
        res.send({ "mensagem": "Usuario Deletado!" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
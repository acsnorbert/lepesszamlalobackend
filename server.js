const express = require('express')

const app = express()

let users = [
    { id:1, name: "Béla", age: 23, gender: "male"},
    { id:2,name: "Éva", age: 18, gender: "female"},
    { id:3,name: "Tamás", age: 45, gender: "male"},
]


app.get('/', (req,res) => {
    res.send('Backend api by Bajai SZC Türr István Technikum - 13.a Szoftverfejlesztő')
})

app.get('/user', (req,res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    let idx= users.findIndex(user => user.id == id)
    if (idx >-1) {
        res.send(users[idx])
    }
    return res.send('Nincs ilyen azonositoju felhasznalo')
})

app.listen(3000)
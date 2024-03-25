const express= require('express')
const app = express()
const { NotesController } = require("../Controllers/NotesController");
const router = express.Router()
const { index, show, store, update, destroy } = require("../Controllers/NotesController")

app.group("/api/v1", (router) => {
    router.get("/login", loginController.store); // /api/v1/login
});

// index
router.get('/', (request, response, next) => {
    index(request, response, next)
})

// show
router.get('/:id', (request, response, next) => {
    show(request, response, next)
})

// store
router.post('/', (request, response ,next) => {

})

// update
router.patch('/:id', (request, response) => {

})

// delete
router.delete('/:id', (request, response) => {

})

module.exports = router


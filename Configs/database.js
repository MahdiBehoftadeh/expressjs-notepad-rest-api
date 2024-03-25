require('dotenv').config()
const mongoose = require('mongoose')

const connect = async (app) => {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    const database = mongoose.connection

    database.on('error', (error) => {
        app.response.status(500).json({ message: 'Database connection was successful' })
    })
    database.once('open', () => console.log('Database connection was successful'))
    return database;
}

const query = async (app) => {
    const database = await connect(app)



}

const replaceMethod = (inputString, replacements) => {
    const regex = /\$(\d+)/g;
    const replacedString = inputString.replace(regex, (match, index) => {
        const replacementIndex = parseInt(index, 10) - 1;
        return replacements[replacementIndex] || match;
    });

    return replacedString;
}
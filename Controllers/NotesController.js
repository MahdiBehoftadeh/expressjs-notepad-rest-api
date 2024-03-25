const index = (request, response, next) => {
    try{
        response.status(200).json({ message: "ok" })
    }catch (err){
        response.status(500).json({ message: "nok" })
    }
}

const show = (request, response, next) => {
    try{
        response.status(200).json({
            param: request.params,
            message: "ok" })
    }catch (err){

    }
}

const store = (request, response, next) => {
    try{

    }catch (err){

    }
}

const update = (request, response, next) => {
    try{

    }catch (err){

    }
}

const destroy = (request, response, next) => {
    try{

    }catch (err){

    }
}

// module.exports = index
// module.exports = show
// module.exports = store
// module.exports = update
// module.exports = destroy

module.exports = {index, show, store, update, destroy}
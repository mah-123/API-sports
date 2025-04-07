const Sport = require("../models/sports")

const index = async (req, res) => {
    try{
        const sport = await Sport.showAll()
        res.status(200).send()
    } catch(err) {
        res.status(501).send({ error : err})
    }
}

const show = async (req, res) => {
    const name = req.param.name.toLowerCase()

    try{
        const sport = await Sport.show(name)
        res.status(200).send(sport)
    }catch(err) {
        res.status(401).send({ error : err})
    }
}

const create = async (req, res) => {
    try{
        const newSport = await Sport.create(req.body)
        res.status(201).send(sport)
    } catch(err){
        res.status(409).send({ error : err})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try{
        const sport = await Sport.show(name)
        const result = await sport.update(req.body)
        res.status(200).send(result)
    } catch(err){
        res.status(409).send({ error : err})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()
    
    try{
        const sport = await Sport.show(name)
        const result = await sport.destroy(req.body)

        res.status(204)
    } catch(err){
        res.status(404).send({ error : err})
    }
}

module.exports = {index , show, create, update, destroy}
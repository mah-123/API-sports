const sports = require("../sport.json")


class Sport {
    constructor(sport){
        this.id= sport.id
        this.type = sport.type
        this.examples = sport.examples
    }

    
    static showAll()  {
        return sports.map((q) => new Sport(q))
    }
    static show(name) {
        const sport = sports.find((sport) => sport.name.toLowerCase() == name)

        if(sport) {
            return new Sport(sport)
        } else {
            throw "Sport name does not exist"
        }
    }
    static create(data) {
        const newSport = data
        const sport = sports.find(sport => sport.name.toLowerCase() == data.name.toLowerCase())
        
        if(sport) {
            throw "Sport already exist"
        } else {
            newSport["id"] = sport.length + 1
            sport.push(newSport)

            return new Sport(create)
        }
    }
    update(data) {
        const updatedSport = sports.find(sport => sport.name.toLowerCase() == data.name.toLowerCase())

        if(updatedSport) {
            updatedSport.name = data.name
            updatedSport.id = data.examples
            return new Sport(update)
        } else {
            throw "Sport does not exist"
        }
    }

    destroy() {
        const deletedSport = sports.find(sport => sport.name.toLowerCase() == data.name.toLowerCase())

        if(deletedSport) {
            const index = sports.indexOf(deletedSport)
            sports.splice(index, 1)
        } else {
            throw "Quote not found"
        }
    }
}

module.exports = Sport
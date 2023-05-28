const {Technology} = require("../model/blog"); 


const technologyDataFindFromDb = async(req, res) => {
    try {
        const dbResponse = await Technology.find({});
        console.log("Success")
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while operating on db =>", err.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { technologyDataFindFromDb } 
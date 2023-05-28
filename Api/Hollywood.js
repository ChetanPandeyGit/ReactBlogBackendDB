const {Hollywood} = require("../model/blog");



const hollywoodDataFindFromDb = async (req, res) => {
    
    try {
        const dbResponse = await Hollywood.find({});
        console.log("Success")
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while operating on db =>", err.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = {  hollywoodDataFindFromDb } 
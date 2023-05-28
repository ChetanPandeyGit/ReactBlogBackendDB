const mongoose = require("mongoose");

const url = "mongodb+srv://starkboy02:Allpasswordsame@cluster0.uheiwhy.mongodb.net/react-blog?retryWrites=true&w=majority";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        await mongoose.connect(url);
        console.log("Connected")
    } catch(error) {
        console.log("Error in connecting db")
    }
}

module.exports = connect;
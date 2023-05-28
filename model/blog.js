const mongoose = require("mongoose");

const bollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    releaseDate: String
});

const Bollywood = mongoose.model("bollywood", bollywoodSchema)

const fitnessSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String
});

const Fitness = mongoose.model("fitness", fitnessSchema)

const scienceSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String
});

const Science = mongoose.model("science", scienceSchema)

const hollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    directedBy: String
});

const Hollywood = mongoose.model("hollywood", hollywoodSchema)

const technologySchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    developer: String
});

const Technology = mongoose.model("technology", technologySchema)

const homeSchema = new mongoose.Schema({
    img: String,
    name: String,
    created: String,
    time: String,
    shareIcons: Boolean
});

const Home = mongoose.model("home", homeSchema)

module.exports = {Bollywood, Fitness, Science, Hollywood, Technology, Home};
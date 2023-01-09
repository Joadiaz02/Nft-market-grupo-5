const fs = require('fs');
const path=require('path');

const db = require('../database/models')
const sequelize = db.sequelize


const moviesController = {
    /*list: (req, res) => {
        db.Movie.findAll()
        .then(movies => {
           res.send(movies) 
        })}*/

    list: async (req, res) => {

        const movies = await db.Movie.findAll()
        res.send(movies)
}}

module.exports = moviesController;

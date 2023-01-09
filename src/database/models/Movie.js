function movies (sequelize, dataTypes) {

    const alias = "Movie"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
        },
        rating: {
            type: dataTypes.INTEGER,
        },
        length: {
            type: dataTypes.INTEGER,
        },
        awards: {
            type: dataTypes.INTEGER,
        },
        release_date: {
            type: dataTypes.DATE,
        }
    }

    const config = {
        tableName: 'movies',
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie

}


module.exports = movies
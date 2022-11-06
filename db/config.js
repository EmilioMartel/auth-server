const mongoose = require("mongoose");

const dbConnection = async() => {

    mongoose
        .connect(process.env.DB_CNN)
        .then((db) => console.log(`DB is connected`))
        .catch((err) =>{
            console.log(error);
            throw new Error('Error a la hora de inicializar DB');
        });
}


module.exports = {
    dbConnection
}
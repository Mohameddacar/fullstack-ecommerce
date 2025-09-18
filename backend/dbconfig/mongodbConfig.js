//mohameddacar
//qbr9kySCixLm97Rn


const mongoose = require('mongoose');

const mongodbConfig = () => {
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.r1kjz0e.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));
 
}

module.exports = mongodbConfig;


// mongodb+srv://mohameddacar:$qbr9kySCixLm97Rn@cluster0.r1kjz0e.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
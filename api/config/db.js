const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://meanisme74:ZVkhcP1p9kazLG14@cluster0.g9sbxiq.mongodb.net/MERN?retryWrites=true&w=majority');
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

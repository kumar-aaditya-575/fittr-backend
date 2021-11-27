import app from "./app"
import config from "./config"
import { connect } from 'mongoose';

connect("mongodb+srv://admin:fittr1234@cluster0.dodaa.mongodb.net/fittr").then(() => {
    console.log("Connected to MongoDB");

    // Start the Node server
    app.listen(config.port, () => {
        console.log(`App is running on port ${config.port}`);
    });
});

// app.listen(config.port, () => console.log("App Running on Port:", config.port));
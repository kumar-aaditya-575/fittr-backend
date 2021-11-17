import app from "./app"
import config from "./config"

app.listen(3000, () => console.log("App Running on Port:", config.port));
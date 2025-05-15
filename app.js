const PORT = 10000
const express = require("express")
const database = require("./database/database");
const viewProgram = require("./controller/viewProgram")
const castController = require("./controller/castController")
const programController = require("./controller/programController")





const app = express();
app.set(`view engine`, `ejs`)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
database.connectDatabase();


app.get(`/viewcasts`, viewProgram.viewCasts)
app.get(`/viewprograms`, viewProgram.viewPrograms)

app.get(`/casts`, castController.getCasts)
app.post(`/cast`, castController.createCast)
app.delete(`/cast/:id`, castController.deleteCast)

app.get(`/programs`, programController.getAllPrograms)
app.post(`/program`, programController.createProgram)
app.patch(`/program/:id`, programController.updateProgram)
app.delete(`/program/:id`, programController.deleteProgram)


app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("Server started successfully!");
})
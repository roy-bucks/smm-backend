module.exports = (app) =>{

    
const index = require("./index.routes");


app.use("/", index); 


}
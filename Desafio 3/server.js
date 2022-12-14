
import express from "express"


const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/productos', async(req, res) => {
    res.send({mensaje:  datosArray("./productos.txt")})
});

app.get('/productoRandom', (req, res) => {
    res.send({ mensaje: getById() })
});

function  datosArray(textName){
    let dates = fs.readFileSync(textName, "utf-8")
    let datesJson = JSON.parse(dates.toString().trim())
    return datesJson
}

function getById(){
    let id = Math.floor(Math.random()*4)
    let dates = datosArray("./productos.txt") 
    let result = dates.find((date)=>date.id==id)
    console.log(result)
    return result

}
import express from 'express'
import Productos from './api-restful/productos.js'

let productos = new Productos()

const app = express()

app.use(express.static('public'))

const router = express.Router()
app.use('/api-restful', router)

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('api-restful/productos/mostrar', (req,res) => {
    res.json(productos.mostarTodos())
})

router.get('api-restful/productos/mostrarTodos/:id', (req,res) => {
    let { id } = req.params
    res.json(productos.listar(id))
})

router.post('api-restful/productos/guardar', (req,res) => {
    let producto = req.body
    productos.guardar(producto)
    res.json(producto)
})

router.put('api-restful/productos/actualizar/:id', (req,res) => {
    let { id } = req.params
    let producto = req.body
    productos.actualizar(producto,id)
    res.json(producto)
})

router.delete('api-restful/productos/borrar/:id', (req,res) => {
    let { id } = req.params
    let producto = productos.borrar(id)
    res.json(producto)
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
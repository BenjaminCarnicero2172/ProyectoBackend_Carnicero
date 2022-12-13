class Contenedor {

    constructor(nombreArchivo) {
        this.fs = require('fs')
        this.nombreArchivo = nombreArchivo;
        this.productos = []
    }

    async getById() {
        return this.productos.length + 1
    }

    async save(prod) {
        this.productos = await this.leer()

        prod.id = this.getById()
        this.productos.push(prod)

        try {
            await this.fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.productos,null,'\t'))
            console.log(' El producto ha sido guardado')
        }
        catch(error) {
            console.log(`Ocurrio un error al guardar: ${error}`)            
        }
    }

    async getAll() {
        try {
            let prods = await this.fs.promises.readFile(this.nombreArchivo, 'utf-8')
            return JSON.parse(prods)
        }
        catch(error) {
            return []
        }
    }

    async deleteAll() {
        try {
            await this.fs.promises.unlink(this.nombreArchivo)
            console.log('Los productos han sido borrados')
        }
        catch(error) {
            console.log(`Error al borrar los: ${error}`)            
        }
    }
}

const archivo = new Contenedor('productos.txt')

async function go() {
    console.log(await archivo.getAll())

    await archivo.guardar({ title:'Hamburguesa', price:1200, thumbnail: 'https://www.clarin.com/img/2022/05/27/la-hamburguesa-mucho-mas-que___0HXb0UR0v_2000x1500__1.jpg'})
    console.log(await archivo.getAll())

    await archivo.guardar({ title:'Pizza', price:1740, thumbnail: 'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/04/6248b38cc6e0d_1200.jpg'})
    console.log(await archivo.getAll())

    await archivo.guardar({ title:'Empanada', price:150, thumbnail: 'https://assets.unileversolutions.com/recipes-v2/239857.jpg'})
    console.log(await archivo.getAll())


}

go()
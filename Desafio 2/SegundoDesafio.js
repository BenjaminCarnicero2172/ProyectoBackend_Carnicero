const fs = require ('fs')

class Contenedor {
    constructor (nombreDelArchivo){
        this.nombreDelArchivo = nombreDelArchivo;
    }
   
    save(values) {
        const items = this.getAll();

        values.id = items.length + 1;
        items.push(values);

        const fileContent = JSON.stringify(items);

        try {
            fs.writeFileSync(this.nombreDelArchivo, fileContent);
        } catch (error) {
            console.error(error);
        }

        return values.id;
    }

    getAll(){
        let fileContent;
        
        try {
            if (fs.existsSync(this.nombreDelArchivo)) {
                fileContent = fs.readFileSync(this.nombreDelArchivo);
            }
        } catch (error) {
            console.log(error)
        }
        
        return fileContent ? JSON.parse(fileContent) || [] : [];
    }
} 



module.exports = Contenedor;
import fs from 'fs'
const fileDir = 'bd.json'

const getData = ()=>{
     
    const dataArr = fs.readFileSync(fileDir)
    return JSON.parse(dataArr)
}

const proveedoresList = options => {
     const page = options.page || 1
     const elements = options.elements || 3
     const proveedores = getData()
     console.log(proveedores.length);
     const data =  proveedores.slice((page - 1) * elements , page * elements)
     const total =  proveedores.length
     const totalPages = Math.ceil(total/elements)
    const proveedoresPag ={
        total,
        data,
        page,
        totalPages
    }
    return proveedoresPag
}

const addProveedor = prov => {
    const proveedor = JSON.parse(prov)
    console.log('proveedor',proveedor)
    if (! proveedor.nombre){
        return {message: `Error: Nombre provedor es requerido`}
    }
    const dataArr = getData()
    
    proveedor.nombre = proveedor.nombre.trim()

    if (dataArr.filter(e => e.nombre === proveedor.nombre).length > 0) { // existe en json file
        console.log('ya existe', proveedor.nombre)
        return {message: `Ya existe' ${proveedor.nombre}`} 
    }else {
        console.log('Se agrega proveedor', proveedor.nombre)
        dataArr.push(proveedor)
        fs.writeFileSync(fileDir, JSON.stringify(dataArr));   
        return {message: `Se agrega proveedor ${proveedor.nombre}`}
    }
    
}

const deleteProveedor = proveedor => {
    const dataArr = getData()
    const dataExiste = dataArr.findIndex(e => e.nombre === proveedor.nombre)
    console.log('dataExiste', dataExiste)

    if (dataExiste > -1) { // existe en json file

        dataArr.splice(dataExiste, 1)
        
        fs.writeFileSync(fileDir, JSON.stringify(dataArr));
        console.log('Se elimina proveedor', proveedor.nombre)
    }else {
        console.log('No existe el proveedor a eliminar', proveedor.nombre)
        
    }
    
}

export const proveedoresService = {
    proveedoresList,
    addProveedor,
    deleteProveedor
}
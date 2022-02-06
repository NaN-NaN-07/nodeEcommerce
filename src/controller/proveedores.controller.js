import { proveedoresService } from '../service/proveedores.service'

const getProvedor = async ctx => {
    const options  =  ctx.request.query
   console.log(options);
      return ctx.body = await proveedoresService.proveedoresList(options)
   
}

const addProveedor = async ctx => {

ctx.response.status = 200
ctx.response.body = proveedoresService.addProveedor(ctx.request.body)
return ctx.response
}

const deleteProveedor = async ctx => {
    
const  proveedor = ctx.params
console.log('delete ', proveedor)
return ctx.body = proveedoresService.deleteProveedor(proveedor)

}

export const proveedoresController = {
    getProvedor,
    addProveedor,
    deleteProveedor
  }
  
  export default null
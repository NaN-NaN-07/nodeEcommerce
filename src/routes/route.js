import Router from 'koa-router'
import { CONTEXT_NAME, CONTEXT_VERSION } from '../commons/constants'
const router = new Router({ prefix: `/${CONTEXT_NAME}/${CONTEXT_VERSION}` });
import koaBody from 'koa-body'
import { proveedoresController } from '../controller/proveedores.controller'

console.log(`ruta /${CONTEXT_NAME}/${CONTEXT_VERSION}`)
router
  .get('/proveedores', proveedoresController.getProvedor)
  .post('/proveedores', koaBody(), proveedoresController.addProveedor)
  .delete('/proveedores/:nombre', proveedoresController.deleteProveedor)

module.exports = router
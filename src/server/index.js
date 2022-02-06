import cfenv from 'cfenv'
import  Koa from 'koa'
const app = new Koa()
import router from '../routes/route'
import { PORT } from '../commons/constants'
const cors = require('@koa/cors');

app.use(cors())
app.use(router.routes())


const appEnv = cfenv.getAppEnv()
const puerto = PORT || appEnv.port
console.log('runing on port ', puerto)
app.listen(PORT)
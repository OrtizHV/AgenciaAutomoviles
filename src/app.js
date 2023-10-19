import  express from 'express'
import autosRouter from'./routes/autos.routes.js'
import clientesRouter from './routes/clientes.routes.js'
import propietariosRouter from './routes/propietarios.routes.js'
import './config.js'
const app=express()

app.use(express.json())
app.use('/api',autosRouter)
app.use('/api',clientesRouter)
app.use('/api',propietariosRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"RUta no encontrado"
    })
})
export default app;
import { pool } from '../db.js'

export const addCliente=async (req,res) => { 
    try{
        const { nombre, apellido_paterno, apellido_materno, email, telefono, fecha}=req.body;
        const [data] = await pool.query("INSERT INTO clientes (nombre,apellido_paterno,apellido_materno,email,telefono,fecha) values(?,?,?,?,?,?)",[nombre, apellido_paterno, apellido_materno, email, telefono,fecha])
        res.send({
            id:data.insertId,
            nombre, 
            apellido_paterno, 
            apellido_materno, 
            email, 
            telefono,
            fecha
        })
    }catch(error){
        return res.status(500).json({
            message:'algo anda mal.. favor de verificas los datos ingresados'
        });
    }
}

export const updateCliente=async(req,res)=>{
    try{
        const {id}=req.params
        const {nombre, apellido_paterno, apellido_materno, email, telefono,fecha}=req.body
        const [result]=await pool.query("UPDATE autos SET nombre=IFNULL(?,nombre),apellido_paterno=IFNULL(?,apellido_paterno),apellido_materno=IFNULL(?,apellido_materno),email=IFNULL(?,email),telefono=IFNULL(?,telefono),fecha=IFNULL(?,fecha) WHERE cliente_id=?",[nombre, apellido_paterno, apellido_materno, email, telefono,fecha])
        if(result.affectedRows===0)return res.status(404).json({
            message:"cliente no encontrado"
        })
        const [rows]=await pool.query("SELECT * FROM clientes WHERE cliente_id=?",[id])
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({
          message:'algo anda mal....favor de verificar'
        });
    }
}

export const deleteCliente=async (req,res)=>{
    try{
      const[data]=await pool.query("DELETE FROM clientes WHERE cliente_id=?",[req.params.id])
     if(data.affectedRows<=0)return res.status(404).json({
      message:"cliente no encontrado"
      })
     res.sendStatus(204)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      });
    }
  }

export const getClientes=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT * FROM clientes')
      res.json(rows)
    }catch(error){
        return res.status(500).json({
          message:'algo anda mal....favor de verificar'
        });

    }
}

export const getCliente=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT *FROM clientes where cliente_id = ?',[req.params.id])
      res.json(rows)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      })
    }
}
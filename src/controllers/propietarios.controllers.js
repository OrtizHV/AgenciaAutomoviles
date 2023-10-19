import { pool } from '../db.js'

export const addPropietario=async (req,res) => { 
    try{
        const { nombre, apellido_paterno, apellido_materno, email}=req.body;
        const [data] = await pool.query("INSERT INTO propietario (nombre,apellido_paterno,apellido_materno,email) values(?,?,?,?)",[nombre, apellido_paterno, apellido_materno, email])
        res.send({
            id:data.insertId,
            nombre, 
            apellido_paterno, 
            apellido_materno, 
            email
        })
    }catch(error){
        return res.status(500).json({
            message:'algo anda mal.. favor de verificas los datos ingresados'
        });
    }
}


export const updatePropietario=async (req,res)=>{
  try{
    const {id}=req.params  
    const {nombre, apellido_paterno, apellido_materno, email}=req.body
    const [result]=await pool.query("UPDATE propietario SET nombre =IFNULL(?,nombre),apellido_paterno=IFNULL(?,apellido_paterno),apellido_materno=IFNULL(?,apellido_materno),email=IFNULL(?,email) WHERE propietario_id=?",[nombre, apellido_paterno, apellido_materno, email])
    if(result.affectedRows===0)return res.status(404).json({
    message:"Propietario no encontrado"

    })
    const [rows]=await pool.query("SELECT * FROM propietario WHERE propietario_id=?",[id])
    res.json(rows[0]);
  }catch(error){
    return res.status(500).json({
      message:'algo anda mal....favor de verificar'
    });

}
}

export const deletePropietario=async (req,res)=>{
    try{
      const[data]=await pool.query("DELETE FROM propietario WHERE propietario_id=?",[req.params.id])
     if(data.affectedRows<=0)return res.status(404).json({
      message:"Propietario no encontrado"
      })
     res.sendStatus(204)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      });
    }
  }

export const getPropietarios=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT * FROM propietario')
      res.json(rows)
    }catch(error){
        return res.status(500).json({
          message:'algo anda mal....favor de verificar'
        });

    }
}

export const getPropietario=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT *FROM propietario where propietario_id = ?',[req.params.id])
      res.json(rows)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      })
    }
}
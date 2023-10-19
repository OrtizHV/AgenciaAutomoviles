import { pool } from '../db.js'

export const addAuto=async (req,res) => { 
    try{
        const { matricula, marca, modelo, potencia, color}=req.body;
        const [data] = await pool.query("INSERT INTO autos (matricula,marca,modelo,potencia,color) values(?,?,?,?,?)",[matricula,marca,modelo,potencia,color])
        res.send({
            id:data.insertId,
            matricula,
            marca,
            modelo,
            potencia,
            color
        })
    }catch(error){
        return res.status(500).json({
            message:'algo anda mal.. favor de verificas los datos ingresados'
        });
    }
}

export const updateAuto=async(req,res)=>{
    try{
        const {id}=req.params
        const {matricula,marca,modelo,potencia,color}=req.body
        const [result]=await pool.query("UPDATE autos SET matricula=IFNULL(?,matricula),marca=IFNULL(?,marca),modelo=IFNULL(?,modelo),potencia=IFNULL(?,potencia),color=IFNULL(?,color) WHERE auto_id=?",[matricula,marca,modelo,potencia,color])
        if(result.affectedRows===0)return res.status(404).json({
            message:"auto no encontrado"
        })
        const [rows]=await pool.query("SELECT * FROM authors WHERE author_id=?",[id])
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({
          message:'algo anda mal....favor de verificar'
        });
    }
}

export const deleteAuto=async (req,res)=>{
    try{
      const[data]=await pool.query("DELETE FROM autos WHERE auto_id=?",[req.params.id])
     if(data.affectedRows<=0)return res.status(404).json({
      message:"Auto no encontrado"
      })
     res.sendStatus(204)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      });
    }
  }

export const getAutos=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT * FROM autos')
      res.json(rows)
    }catch(error){
        return res.status(500).json({
          message:'algo anda mal....favor de verificar'
        });

    }
}

export const getAuto=async(req,res)=>{
    try{
      const [rows] = await pool.query('SELECT *FROM autos where auto_id = ?',[req.params.id])
      res.json(rows)
    }catch(error){
      return res.status(500).json({
        message:'algo anda mal....favor de verificar'
      })
    }
}
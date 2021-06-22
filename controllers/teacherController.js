const teacher = require('../models').teacher

module.exports = {
    getAllTeachers:(req,res)=>{
        teacher.findAll().then(result=>{
            res.json(result)
        })
    },
    getTeacher : (req,res)=>{
        teacher.findOne({
             where: {name:req.query.name}
         }).then(
             result =>{
                res.json({
                    name: result.name,
                    image: result.image,
                    phrases:JSON.parse(result.phrases)
                })
             }
         ).catch( (err) =>{
            console.log(err)
            res.status(404).send("error maestro no encontrado")
         })
    },
    saveTeacher: (req,res)=>{
        teacher.create({
            name:req.body.name,
            image:req.body.image,
            phrases:req.body.phrases
        }).then(
            () =>{
                res.status(200).send("maestro registrado")   
            }
        ).catch(
            () =>{
                res.status(500).send("maestro no registado")
            }
        )

    }
}
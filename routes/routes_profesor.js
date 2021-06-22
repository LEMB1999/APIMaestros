const express = require("express")
const routes = express.Router()
const teacher = require("../controllers/teacherController")

//rutas de la api
routes.route("/profesor")
            .get(teacher.getTeacher)
            .post(teacher.saveTeacher)
            
routes.get("/profesores",teacher.getAllTeachers)



module.exports = routes

//npx sequelize-cli model:generate --name Profesor --attributes name:string,image:string,phrases:jsontype
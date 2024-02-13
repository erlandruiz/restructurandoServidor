import { Router } from "express";
import { usuariosModelo } from "../dao/models/usuarios.modelo.js";


import {  generaToken} from "../utils.js"; //trae el crea hash de utils.js


import passport from "passport"; //PASO 3
import { login, logout, registro } from "../controller/session.controller.js";
export const router = Router();





router.post("/login",login);


router.post("/registro", registro);


router.get('/logout', logout)




//****session de github */

router.get("/github", passport.authenticate("github", {session:false}), (req, res) => {
  //colocamos passport.authenticate('github' el mismo nombre del passport.use que esta en config.passport.js con ese se asocia
});

router.get("/callbackGithub",passport.authenticate("github", {failureRedirect: "/login", session:false
  }),
  (req, res) => {

    const token = generaToken(req.user)
    res.cookie("ecommerceCoder", token, {maxAge:1000*60*60, httpOnly:true})

   
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      // en base a la necesidad, ponemos lo que deseamos( si tenemos una lista redireccionaremos )
      message: "Acceso ok ...!!!",
      usuario: req.user,
    });
  }
);


//**end **session de github */


router.get('/current', passport.authenticate('current', { session: false }), (req, res) => {
  res.json({ user: req.user });
});

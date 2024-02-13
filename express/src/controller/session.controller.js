import { Router } from "express";
import passport  from "passport";
import { generaToken } from "../utils.js";
export const router = Router();


export const login= async (req,res,next)=>{ 

    passport.authenticate("login", {session:false}, (err, user,info)=>{
        if (err) {
          return next(err);
      }
      if (!user) {
          return res.redirect('/login?error=' + info.message);
      }
      const token = generaToken(user);
      res.cookie("ecommerceCoder", token, { maxAge: 1000 * 60 * 60, httpOnly: true });
    
    
    
      res.redirect('/perfil');
      })(req,res,next)
  }


  export const registro= async (req,res, next)=>{ 

    passport.authenticate("registro", { session: false },(err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.redirect("/registro?error=" + info.message);
        }
        let email = user.email;
        res.redirect(`/login?mensaje=Usuario ${email} registrado correctamente`); //PASO3  passport
      })(req,res,next)

    
  }



  export const logout= async (req,res)=>{ 

    res.clearCookie("ecommerceCoder");
    res.redirect('/login')

    
  }

  

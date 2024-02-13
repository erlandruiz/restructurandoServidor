import { Router } from 'express';
// import { ProductManager } from '../ProductManager.js';
export const router=Router()


import { join } from "path";//Utilizamos el path para poder trabajar con rutas absolutas
import __dirname from '../../../utils2.js'; //Importamos utils para poder trabvajar con rutas absolutas
import { ProductManager } from '../ProductManager.js';
import { io } from '../app.js';
import { productsModelo } from '../dao/models/products.model.js';
import { ProductManagerMongo } from '../dao/ProductManagerMongo.js';

import mongoose from 'mongoose';
import { CartManagerMongo } from '../dao/CartManagerMongo.js';
import { cartsModelo } from '../dao/models/carts.model.js';
import { auth } from '../utils.js';
import {  cartsCID, chat, home,  products, productsPID, realtimeproducts } from '../controller/vistas.controller.js';





const productManagerMongo = new ProductManagerMongo() //utilizamos la clase ProductManagerMongo()

const cartManagerMongo = new CartManagerMongo();





let archivo = join(__dirname, "/archivos/products.json");
console.log(archivo)

const productManager = new ProductManager(archivo)


router.get('/', auth, home)


router.get('/realtimeproducts', auth, realtimeproducts)


router.get('/chat', auth,  chat)

router.get('/products', auth,  products);

router.get('/products/:pid', productsPID)

router.get('/carts/:cid',  cartsCID)





//*******PARTE DE LOGIN */



router.get('/registro', (req,res)=>{

  let {error} = req.query
  
    
    res.setHeader('Content-Type','text/html')
    res.status(200).render('registro',{error, login:false})
  })
  
  
  router.get('/login', (req,res)=>{
  
    let {error, mensaje} = req.query
  
    
    res.setHeader('Content-Type','text/html')
    res.status(200).render('login', {error, mensaje, login:false})
  })
  
  
  router.get('/perfil', auth,(req,res)=>{
    res.setHeader('Content-Type','text/html')
    //Al pasar por el auth ya tenemos datos del usuario
    let usuario = req.user
    // console.log(usuario)
  
  
  
    
   
    res.status(200).render('perfil', {usuario, login:true})
  })
  
  
  //**Colocamos una nueva vista ADMIN para demostar que si ingresa al admin *****/
  router.get('/admin', auth, (req,res)=>{
  
    //Al pasar por el auth ya tenemos datos del usuario
    let usuario = req.user
  
  
  
    
    res.setHeader('Content-Type','text/html')
    res.status(200).render('admin', {usuario, login:true})
  })
  
  //**Colocamos una nueva vista ADMIN para demostar que si ingresa al admin *****/
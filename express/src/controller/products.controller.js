import { Router } from 'express';
export const router=Router()

import { ProductManager } from "../ProductManager.js";
import { io } from '../app.js';
import {join} from 'path';//Utilizamos el path para poder trabajar con rutas absolutas
import __dirname from '../../../utils2.js'; //Importamos utils para poder trabvajar con rutas absolutas


let archivo = join(__dirname, "/archivos/products.json");
const productManager = new ProductManager(archivo);

export const getProductsAsyncFS= async (req, res)=>{ 
  //Get que pide productos y limit
   //enviando el producto QUERY
    // http://localhost:8080/api/products sin limite muestra todos los productos.
    // http://localhost:3000/api/products?limit=3  creando limit

    let resultado = await productManager.getProductsAsyncFS();

    if (req.query.limit) {
      resultado = resultado.slice(0, req.query.limit);
    }
    res.setHeader("Content-type", "application/json");
    return res.status(200).json({ filtros: req.query, resultado });

    
}

export const getProductByIdAsyncFS= async (req, res)=>{
    //Get que pide productos por id
  // http://localhost:8080/api/products/6  Producto por ID
let {pid} = req.params
pid = parseInt(pid)


if (isNaN(pid)) {
    res.setHeader("Content-Type", "application/json");
    return res
      .status(400)
      .send({ error: "Error, ingrese un argumento id numerico" });
  }
  let resultado = await productManager.getProductByIdAsyncFS(pid)

  if (!resultado) {
    res.setHeader("Content-Type", "application/json");
    return res.status(400).send({ error: `Error, No existe el id ${pid}` });
  }
  res.setHeader("Content-type", "application/json");
  return res.status(200).json({ filtros: req.params, resultado });
    
 }


 export const addProductAsyncFS= async (req, res)=>{
    let {
        title,
        description,
        price,
        thumbnail = [],
        code,
        stock,
        category,
        status,
      } = req.body;

      if (!title || !description || !price || !code || !stock || !category) {
        res.setHeader("Content-Type", "application/json");
        return res.status(400).json({
          error: `Los datos title, description, price, code, stock , category y status son obligatorios`,
        });
      }

     let resultado =  await productManager.addProductAsyncFS(title, description,price, thumbnail, code, stock, category, status)
    //  let titulo = resultado.title;
    

    if (!resultado) {
      res.setHeader('Content-Type','application/json');
      return res.status(400).json({error:`Se ha producido un error al agregar el producto`});
    } else {
      //** IO */
    
       io.emit("nuevoProducto", resultado) //Damos inicio al IO
      
     //** IO */
     res.setHeader("Content-Type", "application/json");
     return res.status(200).json({message:'Producto Agregado', resultado });
      
    }
 }

 export const updateProductAsyncFS= async (req, res)=>{
    let {pid} = req.params;
   
   
    pid = parseInt(pid)
    if (isNaN(pid)) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(400)
          .json({ error: `Debe de ingresar un id numerico` });
      }

      let propiedadesPermitidas = [
        "title",
        "description",
        "price",
        "thumbnail",
        "code",
        "stock",
        "category",
        "status",
      ];

      let propiedadesQueLlegan = Object.keys(req.body);

      //Comparando los campos que llegan con los permitidos
      let valido = propiedadesQueLlegan.every((propiedad) => {
        return propiedadesPermitidas.includes(propiedad);
      });

      if (!valido) {
        res.setHeader("Content-Type", "application/json");
        return res
          .status(400)
          .json({
            error: `No se aceptan algunas propiedades`,
            propiedadesPermitidas,
          });
      }

    let resultado = await productManager.updateProductAsyncFS(pid, req.body)

    

    res.setHeader("Content-Type", "application/json");
     return res.status(200).json({ resultado });
 }

 export const delProductAsyncFS= async (req, res)=>{
    let { pid } = req.params;
  
    pid = parseInt(pid);
  
    if (isNaN(pid)) {
      res.setHeader("Content-Type", "application/json");
       return res.status(400).json({ error:`Debe de ingresar un id numerico` });
  
    }

    let resultado = await productManager.delProductAsyncFS(pid)

    if (!resultado) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe el producto con id ${pid}  Not Found`});
    } else {
         //** IO */
    io.emit("deleteProducto", pid) //Damos inicio al IO 
    //** IO */
      res.setHeader("Content-Type", "application/json");

    return res.status(200).json({message:'Producto Eliminado', resultado });
      
    }
 }
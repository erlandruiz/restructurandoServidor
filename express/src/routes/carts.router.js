import { Router } from 'express';
export const router=Router()


import __dirname from '../../../utils2.js'; //Importamos utils para poder trabajar con rutas absolutas


import {addCartAsyncFS, addProductToCart, getCartByIdAsyncFS, getCartsAsyncFS } from '../controller/carts.controller.js';








router.get('/',getCartsAsyncFS)




router.get('/:cid',getCartByIdAsyncFS)



router.post('/',addCartAsyncFS)

router.post("/:cid/product/:pid", addProductToCart)
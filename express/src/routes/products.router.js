import { Router } from 'express';
export const router=Router()





import { addProductAsyncFS, delProductAsyncFS, getProductByIdAsyncFS, getProductsAsyncFS, updateProductAsyncFS } from '../controller/products.controller.js';




router.get('/', getProductsAsyncFS)

router.get('/:pid',getProductByIdAsyncFS)

router.post('/',addProductAsyncFS)

router.put('/:pid',updateProductAsyncFS)

router.delete('/:pid',delProductAsyncFS)
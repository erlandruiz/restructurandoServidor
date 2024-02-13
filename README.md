# Para iniciar 
nodemon ./express/src/app.js

# http://localhost:8080/api/products
Agregar un Producto por POSTMAN
    {

        "title": "Teclado Azuls",
        "description": "Teclado Logitech",
        "price": 45,
        "thumbnail": [],
        "code": "ABC122",
        "stock": 35,
        "category": "computo"
    }

# localhost:8080/api/products/8
Borrar un producto por POSTMAN utilizando el metod DELETE



# localhost:8080/api/products/6

Para actualizar un producto por POSTMAN utilizando el metodo PUT

    {

        "title": "Teclado Azuls",
        "description": "Teclado Logitech",
        "price": 75,
        "thumbnail": [],
        "code": "ABC782",
        "stock": 35,
        "category": "computo"
    }


# localhost:8080/api/carts

Para agregar un nuevo producto a un con un carrito utilizando POSTMAN con el metodo POST

{
    "products":[
        {
            "productId":2,
            "qty":2
        }
    ]
}



# localhost:8080/api/carts/6/product/2

Para agregar un nuevo producto con ID=2  a un con un carrito con ID =6 utilizando POSTMAN con el metodo POST

        {
            "productId":2,
            "qty":2
        }


# http://localhost:8080/  
Para ingresar al home y ver todos los productos.


# http://localhost:8080/realtimeproducts
Para ver los titulos de los productos , agregar con postman y eliminar con postman

# http://localhost:8080/pagina2.html
Pagina estatica de ayuda para agregar los productos. El delete  si  solo lo hice con postman.

# http://localhost:8080/api/productsmongo
Pagina para ver los productos en Mongo Atlas.


# http://localhost:8080/api/productsmongo

Para agregar un producto a Mongo Atlas utilizando POSTAM en el modo POST
 {
  
            "title": "Teclado negro ",
            "description": "Teclado nergo terox",
            "price": 18,
            "thumbnail": [
                "www.imagen.com/image1",
                "www.imagen.com/image2"
            ],
            "code": "ABC100",
            "stock": 9,
            "category": "computo",
            "status": true
                    
        }




# http://localhost:8080/api/productsmongo/65cab66991faa284e6f35b2b

Para modificar un producto a Mongo Atlas utilizando POSTAM en el modo PUT

 {
  
            "title": "Productomodificado  para probar",
            "description": "Mesa",
            "price": 150,
            "thumbnail": [
                "www.imagen.com/image1",
                "www.imagen.com/image2"
            ],
            
            "stock": 10,
            "category": "Hogar",
            "status": true
           
          
           
        }


# http://localhost:3000/api/productsmongo/65cab66991faa284e6f35b2b

Para borrar un producto utilizando un POSTMAN en el metodo DELETE
OJO coloca el deletetedn true  , borrado logico




# http://localhost:3000/api/cartsmongo
Para buscar todos los carritos en POSTMAN utilizando el metod get

# http://localhost:8080/api/cartsmongo/cid 
# http://localhost:8080/api/cartsmongo/657c7237d87fb3caa089e5d2
Para buscar carrito por ID


# http://localhost:8080/api/cartsmongo   
usando el metodo POST , se crea un carrito , en el req.body colocar 
       {   
               
             
       }

# http://localhost:8080/api/cartsmongo/6574d5b225b51f4d783ee62f/product/6572a3511e95089a27bee8df

<!-- ejemplos para probar -->
<!-- http://localhost:8080/api/cartsmongo/6574d5bb25b51f4d783ee633/product/6572a2aa1e95089a27bee8d9 -->

<!-- http://localhost:8080/api/cartsmongo/6574d5bb25b51f4d783ee633/product/6572a2ea1e95089a27bee8dc -->

Ejemplo de agregar a un carrito con cid = 6574d5b225b51f4d783ee62f  el incremento en uno del producto pid =6572a3511e95089a27bee8df

# http://localhost:8080/api/cartsmongo/6574d5b225b51f4d783ee62f/product/6572a2ea1e95089a27bee8dc

Ejemplo de agregar a un carrito con cid = 6574d5b225b51f4d783ee62f  un nuevo producto con del pid =6572a2ea1e95089a27bee8dc


# http://localhost:8080/api/productsmongo/?limit=3
Ordenando productos con limite = 3


# http://localhost:8080/api/productsmongo/?pagina=4&limit=4&sort=1
Ordena en forma ascendete por  precio.

# http://localhost:8080/api/productsmongo/?pagina=1&limit=4&sort=-1
Ordena en forma descendente por precio


#  http://localhost:8080/api/cartsmongo/657c723ad87fb3caa089e5d4
ejemnplo Consigue por el metodo Get de POSTMAN el carrito con cid=657c723ad87fb3caa089e5d4

# http://localhost:8080/products
para ver el paginado de todos los productos y poder ver un producto.

# http://localhost:8080/api/cartsmongo/657c8f29fd01996207396277/product/6572a3511e95089a27bee8df
Ejemplo para pasar por agregar al carrito con cid = 657c8f29fd01996207396277  el producto con pid =6572a3511e95089a27bee8df   si ya existe incrementa qty en 1 , si no existe agrega el producto al carrito con qty 1

# http://localhost:8080/api/cartsmongo/6574d5bb25b51f4d783ee633/products/6572a2ea1e95089a27bee8dc
ejemplo de como eleminar un producto de un carrrito
Utilizando DELETE en POSTMAN

# http://localhost:8080/api/cartsmongo/6574d5b225b51f4d783ee62f

Ejemplo en el body  lo que tenemos que colocar en el body  usando el POSTMAN en PUT  para acutalizar los productos  del producto de id 6574d5b225b51f4d783ee62f
 {
            "_id": "6574d5b225b51f4d783ee62f",
            "products": [
                {
                    "productId": "6572a2aa1e95089a27bee8d9",
                    "qty": 2 //colocamos la cantidad que deseamos actualizar
                },
                {
                    "productId": "6572a3511e95089a27bee8df",
                    "qty": 7 //colocamos la cantidad que deseamos actualizar
                },
                {
                    "productId": "6572a2ea1e95089a27bee8dc",
                    "qty": 1//colocamos la cantidad que deseamos actualizar
                }
            ]
           
}

# http://localhost:8080/api/cartsmongo/6574d5b225b51f4d783ee62f/products/6572a2aa1e95089a27bee8d9
Ejemplo para actualizar solo la cantidad  de un producto que exite en el carrito, utilizando POSTMAN y el metodo PUT

 {
          
                    "qty": 20
              
           
}


# http://localhost:8080/api/cartsmongo/6576b78cf8806e21842156f6

Ejemplo para vaciar el carrito con id = 6576b78cf8806e21842156f6

# http://localhost:8080/carts/657cd0ca6dab0e5581321d7c
Ejemplo para ver los productos que tiene un carrito con parametro enviado por req.params


# http://localhost:8080/registro
Para registar usuario , se coloca nombre, email y password

# http://localhost:8080/login
Para loguearse con email y password

usuarios :
erland@test.com  password:123   cardId:65b32c2c9fc5c88401c0e55c
karen@test.com  password:123    cardId:65b32c609fc5c88401c0e561
maria@test.com  password:123    cardId:65b32c819fc5c88401c0e566
pedro@test.com  password:123    cardId:65b32ca89fc5c88401c0e56b


# http://localhost:8080/login

Se crea el usuario Administrator 
administrator:
usuario:  adminCoder@coder.com  password:   adminCod3r123
carId : 65b32cfb9fc5c88401c0e570

Nos muestra un mensaje acceso mas de panel de Administracion


# Nota
colocar en express/src/config/config.passport.js  los datos

clientID:
clientSecret:
callbackURL:
      

# Agrega  user.model.js
Campos agregados
first_name
last_name
email
age
password
role
cartId


# http://localhost:8080/api/sessions/current
Para ir a current










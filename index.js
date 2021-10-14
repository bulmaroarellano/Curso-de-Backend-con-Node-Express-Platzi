const express = require("express");
 const faker = require("faker");
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
  res.send("Hola mi primer server en Express JS");
});

app.get("/users",(req, res)=>{
  res.send("Hola, esta ruta será para devolver los users")
});
app.get("/categories", (req, res)=>{
  res.send("Esta es la ruta para las categorias");
});

// app.get("/products", (req, res) => {
// 	const products = [];
// 	for(let i=0; i<100; i++){
// 		products.push({
//         name : faker.commerce.productName(),
// 				price : parseInt(faker.commerce.price(), 10),
// 				image : faker.image.imageUrl(),
//     });
//   }
// 	res.json(products);
// });

app.get('/products', (req, res){
	const {size} = req.query;
	const products = [];
	const limit = size || 10;
	for(let i=0; i<limit; i++){
		products.push({
        name : faker.commerce.productName(),
				price : parseInt(faker.commerce.price(), 10),
				image : faker.image.imageUrl(),
    });
	}
	res.json(products);
})


app.get("/products/:id",(req,res)=>{
  const id = req.params.id;
  res.json([
    {
      name: "Product",
      price: 100,
      id:id
    }
  ])
});
app.listen(port, () =>{
  console.log("El puerto en funcion es",  port);
});

import express from 'express'
import ProductManager from './app.js'

const app = express()
const productManager = new ProductManager('./products.json');




app.use(express.urlencoded({extended:true}))


app.get('/bienvenida', (req , res)=>{
    res.send(`<h1 style="color:blue">Wellcome to the course<h1>`)
})
 
app.get('/products', (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
  });

app.get('/products/:pid',(req, res)=>{
    const {id} = req.params;
    res.send(products[id])
})


app.listen(8080,()=>{
    console.log('running from express')
})
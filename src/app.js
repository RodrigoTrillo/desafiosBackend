export default class ProductManager {
    constructor() {
      this.products = []; 
    }

    generateUniqueId() {

        let id = Math.random().toString(36).substr(2, 8);

        while (this.products.some(p => p.id === id)) {
          
          id = Math.random().toString(36).substr(2, 8);
        }
    
       
        return id;
      }

    addProduct(title, description, price, thumbnail, code, stock) {
    
    const id = this.generateUniqueId();

      this.products.push({
        id: id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('No se ha encontrado un producto con este id');
      }
      return product;
    }
    updateProduct(id,title, description, price, thumbnail, code, stock) {
     
        this.products.push({
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
          });
      }

      deleteProduct(id) {
        
        this.products.splice(id, 1);
  }
  }
  



let productManager = new ProductManager();


productManager.addProduct('Producto 1', 'Descripción 1', 100, 'Imagen 1', 'abc123', 25);
productManager.addProduct('Producto 2', 'Descripción 2', 200, 'Imagen 2', 'abc121', 35);
productManager.addProduct('Producto 3', 'Descripción 3', 300, 'Imagen 3', 'abc122', 45);
productManager.addProduct('Producto 4', 'Descripción 4', 400, 'Imagen 4', 'abc124', 55);






console.log(productManager.getProducts()); 
import { ProductManager } from "./ProductManager.js";
import { __dirname } from "./utils.js";

//const { ProductManager } = productManager;

console.log("dirname", __dirname);
let myFirstStore = new ProductManager("/productos.json");
myFirstStore.getProducts().then((data) => console.log(data));
//let mySecondStore = new ProductManager("./productosLacteos.json");

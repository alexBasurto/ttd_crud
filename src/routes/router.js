// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";
import productsRouter from "./productsRouter.js";

// Crea una instancia de Router para definir rutas.
const router = Router();

//Creamos ruta para Productos

router.use("/products",productsRouter);

// Exporta el objeto de rutas para su uso en la aplicación.
export default router;
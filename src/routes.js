import express from "express";
import {
  newMarket,
  listMarket,
  updateMarket,
  deleteMarket,
} from "./controller/marketController.js";
import {
  newClient,
  listClient,
  updateClient,
  deleteClient,
} from "./controller/clientController.js";
import { newItem, listItem } from "./controller/itemController.js";
import {
  newOrder,
  listOrder,
  deleteOrder,
} from "./controller/orderController.js";
import {
  newProduct,
  listProduct,
  updateProduct,
  deleteProduct,
} from "./controller/productController.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get");
  return res.json({ teste: "ok" });
});

//market
router.post("/market", newMarket);
router.get("/market", listMarket);
router.delete("/market/:market_id", deleteMarket);
router.put("/market/:market_id", updateMarket);

//client
router.post("/client", newClient);
router.get("/client/:cpf", listClient);
router.delete("/client/:cpf", deleteClient);
router.put("/client/:cpf", updateClient);

//item pedido
router.post("/itemorder/:cod_pedido", newItem);
router.get("/itemorder/:cod_pedido", listItem);

//pedido
router.post("/order", newOrder);
router.get("/order/:market_id", listOrder);
router.delete("/order/:order_id", deleteOrder);

//produto
router.post("/product", newProduct);
router.get("/product", listProduct);
router.delete("/product/:product_id", deleteProduct);
router.put("/product/:product_id", updateProduct);

export { router };

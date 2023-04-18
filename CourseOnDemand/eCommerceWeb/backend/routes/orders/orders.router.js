const express = require("express");
const {
  httpGetAllOrders,
  httpPostAnOrder,
  httpGetOrderById,
  httpUpdateOrder,
  httpDeleteOrder,
  httpReceiveTotalSales,
  httpReceiveTotalQtyOfOrders,
  httpGetUserOrderList,
} = require("./orders.controller");
const ordersRouter = express.Router();

ordersRouter.get("/", httpGetAllOrders);
ordersRouter.get("/:id", httpGetOrderById);
ordersRouter.get("/get/userorders/:userid", httpGetUserOrderList);
ordersRouter.get("/get/tatalsales", httpReceiveTotalSales);
ordersRouter.get("/get/count", httpReceiveTotalQtyOfOrders);
ordersRouter.put("/:id", httpUpdateOrder);
ordersRouter.delete("/:id", httpDeleteOrder);
ordersRouter.post("/", httpPostAnOrder);

module.exports = ordersRouter;

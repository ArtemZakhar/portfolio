const {
  getAllOrders,
  saveAnOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  receiveTotalSales,
  receiveTotalQtyOfOrders,
  getUserOrderList,
} = require("../../models/orders.model");

async function httpGetAllOrders(req, res) {
  const orderList = await getAllOrders();
  if (!orderList[0]) {
    return res.status(500).json({ success: false, message: "There are no orders in DB" });
  }

  return res.status(200).json(orderList);
}

async function httpPostAnOrder(req, res) {
  await saveAnOrder(req.body)
    .then((order) => {
      return res.status(200).json({ success: "Order has been sent", details: order });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}

async function httpGetOrderById(req, res) {
  await getOrderById(req.params.id)
    .then((prod) => {
      return res.status(200).json({ result: prod });
    })
    .catch((err) => {
      return res.status(500).json({ message: "smth went wrong", error: err });
    });
}

async function httpUpdateOrder(req, res) {
  await updateOrder(req.params.id, req.body.status)
    .then((prod) => {
      return res.status(200).json({ message: "successfully updated", result: prod });
    })
    .catch((err) => {
      return res.status(500).json({ message: "smth went wrong", error: err });
    });
}

async function httpDeleteOrder(req, res) {
  await deleteOrder(req.params.id)
    .then(() => {
      return res.status(200).json({ message: "successfully deleted" });
    })
    .catch((err) => {
      return res.status(500).json({ message: "smth went wrong", error: err });
    });
}

async function httpReceiveTotalSales(req, res) {
  await receiveTotalSales()
    .then((totalSales) => {
      return res.status(200).json({ totalSales: totalSales.pop().totalSales });
    })
    .catch((err) => {
      return res.status(400).json({ message: "smth went wrong", error: err });
    });
}

async function httpReceiveTotalQtyOfOrders(req, res) {
  await receiveTotalQtyOfOrders()
    .then((qty) => {
      return res.status(200).json({ ordersCount: qty });
    })
    .catch((err) => {
      return res.status(400).json({ message: "smth went wrong", error: err });
    });
}

async function httpGetUserOrderList(req, res) {
  await getUserOrderList(req.params.userid)
    .then((list) => {
      return res.status(200).json({ orderList: list });
    })
    .catch((err) => {
      return res.status(400).json({ message: "smth went wrong", error: err });
    });
}

module.exports = {
  httpGetAllOrders,
  httpPostAnOrder,
  httpGetOrderById,
  httpUpdateOrder,
  httpDeleteOrder,
  httpReceiveTotalSales,
  httpReceiveTotalQtyOfOrders,
  httpGetUserOrderList,
};

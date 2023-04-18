const orderDataBase = require("./orders.mongo");
const orderItemInfo = require("./order-item.mongo");

async function getAllOrders() {
  const orderList = await orderDataBase.find().populate("user", "name").sort({ dateOrdered: -1 });
  return orderList;
}
async function saveAnOrder(order) {
  const orderItemsIds = Promise.all(
    order.orderItems.map(async (orderItem) => {
      let newOrderItem = orderItemInfo({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );

  const orderItemsIdsResolved = await orderItemsIds;

  const backendTotalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await orderItemInfo.findById(orderItemId).populate("product", "price");
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );

  const backendTotalPrice = backendTotalPrices.reduce((a, b) => a + b, 0);

  let newOrder = orderDataBase({
    orderItems: orderItemsIdsResolved,
    shippingAddress1: order.shippingAddress1,
    shippingAddress2: order.shippingAddress2,
    city: order.city,
    zip: order.zip,
    country: order.country,
    phone: order.phone,
    status: order.status,
    totalPrice: backendTotalPrice,
    user: order.user,
  });

  let savedNewOrder = await newOrder.save();

  return savedNewOrder;
}

async function getOrderById(id) {
  const order = await orderDataBase
    .findById(id)
    .populate("user", "name")
    .populate({ path: "orderItems", populate: { path: "product", populate: "category" } });

  return order;
}

async function updateOrder(id, newStatus) {
  const updatedOrder = await orderDataBase.findByIdAndUpdate(
    id,
    {
      status: newStatus,
    },
    { new: true }
  );
  return updatedOrder;
}

async function deleteOrder(id) {
  const order = await orderDataBase.findById(id);
  const deletedOrderItems = order.orderItems.map((item) => {
    return item._id;
  });
  deletedOrderItems.forEach(async (itemId) => {
    await orderItemInfo.findOneAndRemove(itemId);
  });
  await orderDataBase.findOneAndRemove(id);
}

async function receiveTotalSales() {
  const totalSalesInfo = await orderDataBase.aggregate([
    { $group: { _id: null, totalSales: { $sum: "$totalPrice" } } },
  ]);
  return totalSalesInfo;
}

async function receiveTotalQtyOfOrders() {
  const totalCount = await orderDataBase.count();
  return totalCount;
}

async function getUserOrderList(id) {
  let userList = await orderDataBase
    .find({ user: id })
    .populate({
      path: "orderItems",
      populate: "product",
    })
    .sort({ dateOrdered: -1 });

  return userList;
}

module.exports = {
  getAllOrders,
  saveAnOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  receiveTotalSales,
  receiveTotalQtyOfOrders,
  getUserOrderList,
};

export const steps = ["Giỏ hàng", "Hóa đơn & địa chỉ", "Thanh toán"];
export const deliveryMethods = [
  {
    id: "standard",
    name: "Giao hàng tiêu chuẩn",
    price: 0,
    description: "Giao hàng trong vòng 3-5 ngày",
  },
  {
    id: "fast",
    name: "Giao hàng nhanh",
    price: 50000,
    description: "Giao hàng trong vòng 1-2 ngày",
  },
];
export const paymentMethods = [
  {
    id: "vnpay",
    type: "online",
    name: "Thanh toán qua VNPay",
    description: "Bạn sẽ được chuyển hướng đến trang web PayPal để hoàn tất giao dịch mua của mình một cách an toàn.",
    icon: "/static/icon/vnpay.svg",
  },
  {
    id: "cod",
    type: "offline",
    name: "Thanh toán khi nhận hàng",
    description: "Thanh toán bằng tiền mặt khi đơn đặt hàng của bạn được giao.",
  },
];

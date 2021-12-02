
// lista de cupones
const coupons = [
  {
      name: "test1",
      discount: 15,
  },
  {
      name: "test2",
      discount: 25,
  },
  {
      name: "test3",
      discount: 30,
  },
];

// métodos para calcular precios y verificar si el descuento ingresado existe

function calcularPrecioFinal(price, discount) {
  return price - ((price * discount)/100)
}

function calcularDescuento() {
  const getFullPrice = document.getElementById('price')
  const getDiscount = document.getElementById('discount')

  const price = parseInt(getFullPrice.value, 10)
  const discount = getDiscount.value

  const isCouponValueValid = function (coupon) {
    return coupon.name === discount;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
      alert("El cupón " + discount + "no es válido");
  }

  const result = document.getElementById('finalPrice')
  result.innerHTML = calcularPrecioFinal(price, userCoupon.discount)  
}


function calcularPrecioFinal(price, discount) {
  const precioFinal = price - ((price * discount)/100)
  return precioFinal
}

function calcularDescuento() {
  const getFullPrice = document.getElementById('price')
  const getDiscount = document.getElementById('discount')

  const price = parseInt(getFullPrice.value, 10)
  const discount = parseInt(getDiscount.value, 10)

  const result = document.getElementById('finalPrice')
  result.innerHTML = calcularPrecioFinal(price, discount)
}
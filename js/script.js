"use strict"

function calculate() {
  const length = parseInt(document.getElementById("pay").value)
  const width = parseInt(document.getElementById("pay2").value)

  const area = length * width * 0.18
  const perimeter = length * width * (1.0 - 0.18)
  const TAX_RATE = 0.18

  document.getElementById("area").innerHTML =
    "The governemnt will take: " + area + "$"
  document.getElementById("perimeter").innerHTML =
    "your pay will be: " + perimeter + "$"
}


let unitToConvert = 20
let meterToFeet = (unitToConvert * 3.28).toFixed(3)
let feetToMeter = (unitToConvert/3.28).toFixed(3)
console.log(feetToMeter)


document.getElementById("digit-holder").textContent = unitToConvert


let meterToFeetEl = document.getElementById("meter-to-feet-conversion")
console.log(meterToFeetEl)
let feetToMeterEl= document.getElementById("feet-to-meter-conversion")
console.log(feetToMeterEl)

meterToFeetEl.textContent = unitToConvert + " "+"meters" +" "+ "=" + " "+ meterToFeet+ " "+ "feet" +" "

feetToMeterEl.textContent = unitToConvert + " "+"feet" +" "+ "=" + " "+ feetToMeter+ " "+ "meter" +" "


let unitToConvert = 0

// length conversion calculation
let meterToFeet = (unitToConvert * 3.28).toFixed(3)
let feetToMeter = (unitToConvert/3.28).toFixed(3)

// volume conversion calculation
let litersToGallons =(unitToConvert * 0.264172).toFixed(3)
let gallonsToLiters = (unitToConvert * 3.785).toFixed(3)


// mass conversion calculation
let kilosToPounds = (unitToConvert * 2.20462).toFixed(3)
let poundsToKilos = (unitToConvert / 2.20462).toFixed(3)



// grabs content of the html digit
document.getElementById("digit-holder").textContent = unitToConvert

// grabs the content of the html docs by id 
let meterToFeetEl = document.getElementById("meter-to-feet-conversion")
let feetToMeterEl= document.getElementById("feet-to-meter-conversion")
let literToGallonEl = document.getElementById("liter-to-gallon-conversion")
let gallonToLiterEl = document.getElementById("gallons-to-liters-conversion")
let kiloToPoundEl = document.getElementById("kilo-to-pound-conversion")
let poundToKiloEl = document.getElementById("pound-to-kilo-conversion")


// changes the span text to the desired calculations
meterToFeetEl.textContent = unitToConvert + " "+"meters" +" "+ "=" + " "+ meterToFeet+ " "+ "feet" +" "
feetToMeterEl.textContent = unitToConvert + " "+"feet" +" "+ "=" + " "+ feetToMeter+ " "+ "meter" +" "
literToGallonEl.textContent = unitToConvert + " "+"liters" +" "+ "=" + " "+ litersToGallons+ " "+ "gallons" +" "
gallonToLiterEl.textContent = unitToConvert + " "+"gallons" +" "+ "=" + " "+ gallonsToLiters+ " "+ "liters" +" "
kiloToPoundEl.textContent = unitToConvert + " "+"kilos" +" "+ "=" + " "+ kilosToPounds+ " "+ "pounds" +" "
poundToKiloEl.textContent = unitToConvert + " "+"pounds" +" "+ "=" + " "+ poundsToKilos+ " "+ "kilos" +" "



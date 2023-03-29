const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
console.log(e)
console.log(pi)
console.log(gravity)
console.log(humanBodyTemp)
console.log(waterBoilingTemp)

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin,est,sw,den,nor] = countries
console.log(fin)
console.log(est)
console.log(sw)
console.log(den)
console.log(nor)

// Destructure the rectangle object by its properties or keys.

let {width,height,area,perimeter} = rectangle
console.log(width)
console.log(height)
console.log(area)
console.log(perimeter)
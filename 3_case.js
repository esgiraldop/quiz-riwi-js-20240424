const elPassBinary = "01110010_01101001_01110111_01101001"
// Text to produce: "riwi"

//Transforming from binary to ASCII code
const elPassBinaryArray = elPassBinary.split("_")
let elPassASCII = []
elPassBinaryArray.forEach(element => {
    let transfElem = element.split("").reduce((accum, elem, index) => {
        return accum + (Number(elem) * 2**(element.length - index - 1 ))
    }, 0)
    elPassASCII.push(transfElem)
})

// After getting the ASCII codes, i will transform them into characters and then join the array to form a string with the
    // decoded password
const elPassDecoded = elPassASCII.map(element => String.fromCharCode(element)).join("")

console.log(elPassDecoded)
const case3 = (initMoney, time) =>{
    const pricePerHour = 50000
    const elPassBinary = "01110010_01101001_01110111_01101001"
    //Transforming from binary to ASCII code
    const elPassBinaryArray = elPassBinary.split("_")
    let elPassASCII = [], remMoney, transfElem
    elPassBinaryArray.forEach(element => {
        transfElem = element.split("").reduce((accum, elem, index) => {
            return accum + (Number(elem) * 2**(element.length - index - 1 ))
        }, 0)
        elPassASCII.push(transfElem)
    })

    // After getting the ASCII codes, I will transform them into characters and then join the array to form a string with the
        // decoded password
    const elPassDecoded = elPassASCII.map(element => String.fromCharCode(element)).join("")
    remMoney = initMoney - time*pricePerHour
    alert(`The password is "${elPassDecoded}"`)
    alert(`(Hildebrando has been connected to the wifi for over ${time} hour(s), `+
     `so the cost is ${time*pricePerHour}).\n` + `The remaining money is ${remMoney}`)
    return remMoney
}

export {case3}
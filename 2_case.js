const case2 = () =>{
    // Allowed size
    const allowedHeight = 55 //cms
    const allowedLength = 40 //cms
    const allowedWidth = 20 //cms
    const allowedArea = allowedHeight * allowedLength

    // Hildebrando's suitcase size
    const hiderHeight = 60 //cms
    const hiderLength = 40 //cms
    const hiderWidth = 20 //cms
    const hiderArea = hiderHeight * hiderLength

    // Hildebrando's suitcase reduction factors
    const heightRedFact = allowedHeight/hiderHeight
    const lengthRedFact = allowedLength/hiderLength
    const widthRedFact = allowedWidth/hiderWidth

    const minRedFact = Math.min(heightRedFact, lengthRedFact, widthRedFact)
    console.log(`The minimum factor is ${minRedFact}`)
    // Hildebrando's suitcase reduced size
    const newHeight = Math.round(hiderHeight * minRedFact * 100) /100
    const newLength = Math.round(hiderLength * minRedFact * 100) /100
    const newWidth = Math.round(hiderWidth * minRedFact * 100) /100
    const newArea = newHeight * newLength

    console.log("allowedArea: ", allowedArea)
    console.log("hiderArea: ", hiderArea)
    console.log("newArea: ", newArea)

    alert("Hildebrando, the allowed dimensions for your suit case are:\n" +
        `\tHeight: ${allowedHeight} cms Length: ${allowedLength} cms Width: ${allowedWidth} cms\n`+
         "The dimensions of your suit case are:\n" +
        `\tHeight: ${hiderHeight} cms Length: ${hiderLength} cms Width: ${hiderWidth} cms\n`+
        `However, your suitcase dimensions need to be reduced ${Math.round(minRedFact * 10000)/10000} times proportionally so it fits in the airplane cargo hold\n`+
        "The new dimensions of your suit case would be then :\n" +
        `\tHeight: ${newHeight} cms Length: ${newLength} cms Width: ${newWidth} cms`)
}

export {case2}
const case4 = () => {
    let text = "Taxi me puede llevar al hotel mariposas amarillas"
    let regex = /[aeou]/g
    let letter, newText
    letter = "i"
    newText = text.replace(regex, letter)
    alert(`The translated sentence to that weird langauge is "${newText}"`)
}

export {case4}
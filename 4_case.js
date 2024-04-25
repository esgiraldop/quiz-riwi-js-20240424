let text = "Taxi me puede llevar al hotel mariposas amarillas"
let regex = /[aeou]/g
letter = "i"

newText = text.replace(regex, letter)
alert(`The original sentence is "${text}"`)
alert(`The translated sentence to that weird langauge is "${newText}"`)
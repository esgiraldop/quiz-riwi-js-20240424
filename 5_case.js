import {askOption} from "./utilities.js"

let usrAns, taxiDriverAns, newMoney, taxiDriverWins
const betMoney = 300000, money = 2500000
const gameOptions = ["Paper", "Scisssors", "Rock"] // Giving the order so the one at the left is always higher

alert("The taxi drives is charging you COP 300.000 so you challenge him to play+" +
    " rock, scisssors and paper. If you win or tie, you do not have to pay anything." +
    " If you lose, you pay that amount of money.")

let msg = "Please choose your option: 1. Paper 2.Scissors 3. Rock"
let options = ['1', '2', '3']
usrAns = Number(askOption(msg, options)) - 1
console.log(usrAns)
// Taxi driver selection => Random selection among the options
let upp = gameOptions.length - 1
let low = 1 - 1
taxiDriverAns = Math.floor(Math.random() * (upp - low + 1)) + low
msg = `You choose ${gameOptions[usrAns]} and the taxi driver chooses ${gameOptions[taxiDriverAns]}\nSo `

if(usrAns !== taxiDriverAns){
    taxiDriverWins = taxiDriverAns === (usrAns + 1) % gameOptions.length
    msg += taxiDriverWins ? "the taxi driver wins!\n":"you win and don't pay anything!\n"
}else{
    msg += "it's a tie and you don't pay anything\n"
}
newMoney = taxiDriverWins ? money - betMoney:money
msg += `Your current money is ${newMoney}`
alert(msg)
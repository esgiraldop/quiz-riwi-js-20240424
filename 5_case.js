import {askOption} from "./utilities.js"

const case5 = (initMoney) =>{
    let usrAns, taxiDriverAns, newMoney, taxiDriverWins
    const betMoney = 300000
    const gameOptions = ["Paper", "Scisssors", "Rock"] // Giving the order so the one at the left is always higher
    let msg = "Please choose your option:\n1. Paper\n2. Scissors\n3. Rock"
    let options = ['1', '2', '3']
    usrAns = Number(askOption(msg, options)) - 1
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
    newMoney = taxiDriverWins ? initMoney - betMoney:initMoney
    msg += `Your current money is ${newMoney}`
    alert(msg)
    return newMoney
}

export {case5}
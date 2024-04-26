import {askOption} from "./utilities.js";
const case1 = (initMoney) =>{
    let crrntMoney, options, ans
    const almoPrice = 15000, subwayPrice = 23000
    let msg = `Hi Hildebrando. Your available money is COP ${initMoney}. `+"" +
        "What do you want to buy?\n"  +
        "The available options are:\n"+
        "1. Almohabana and soda --> Price: COP 15.000\n"+
        "2. Subway with soda --> 23.000\n" +
        "3. Quit"
    options = ['1', '2', '3']
    ans = askOption(msg, options)

    if(ans === '3'){
        crrntMoney = initMoney
        alert(`(Hildebrando Does not buy anything) The remaining money you have for your trip is ${crrntMoney}`)
    }

    if(ans ==='1'){
        crrntMoney = initMoney - almoPrice
        alert(`(Hildebrando gets sick!) The remaining money you have for your trip is ${crrntMoney}`)
    }

    if(ans === '2'){
        crrntMoney = initMoney - subwayPrice
        alert(`(Hildebrando gets is full and happy) The remaining money you have for your trip is ${crrntMoney}`)
    }
    return crrntMoney
}

export {case1}
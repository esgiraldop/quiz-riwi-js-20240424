const askOption = (msg, options) => {
    //Function to ask for an answer and return a validated option
    do{
       ans = prompt(msg)
        if(options.includes(ans) === false){
            alert("Invalid option. Please try again")
        }
    }while(options.includes(ans) === false)
    return ans
}

const main = () =>{
    let initMoney = 2500000
    const almoPrice = 15000
    const subwayPrice = 23000
    let msg = `Hi Hildebrando. Your available money is COP ${initMoney}.`+"" +
        "What do you want to buy?\n"  +
        "The available options are:\n"+
        "1. Almohabana and soda --> Price: COP 15.000\n"+
        "2. Subway with soda --> 23.000\n" +
        "3. Quit"
    options = ['1', '2', '3']
    ans = askOption(msg, options)

    if(ans === '3'){
        alert(`(Hildebrando Does not buy anything) The remaining money you have for your trip is ${initMoney}`)
    }

    if(ans ==='1'){
        alert(`(Hildebrando gets sick!) The remaining money you have for your trip is ${initMoney - almoPrice}`)
    }

    if(ans === '2'){
        alert(`(Hildebrando gets is full and happy) The remaining money you have for your trip is ${initMoney - subwayPrice}`)
    }

}

main()
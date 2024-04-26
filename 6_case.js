import {askOption} from "./utilities.js"

const winsBingoFunc = () => {
    const winLooseArray = [false, true, false, false] // 25% of winning
    const up = winLooseArray.length - 1
    const low = 0
    const randNum = Math.floor(Math.random() * (up - low + 1)) + low
    return winLooseArray[randNum]
    }

const case6 = initMoney =>{
    let usrAns, msg, options, holidayEnds = false, plannedDays = 4, hilderDies = false
    let hotelSpentMoney, hotelSpentMoneyPerDay = 200000, otherSpentMoney = 0, totalSpentMoney, remMoney, numDays

    for(let dayNum= 1; dayNum <= plannedDays; dayNum++){
        msg = `Please choose your shirt color for your day No. ${dayNum} at the hotel:
                1. Yellow
                2.Green
                3. Red
                4. Blue`
        options = ['1', '2', '3', '4']
        usrAns = Number(askOption(msg, options))
        switch(usrAns){
        case 1:
            // Yellow
            alert("(Hildebrando chooses to go to the pool. The water smells weird)")
            msg = "Hildebrando, do you want to get in the pool?\n" +
                "1. Yes\n2. No"
            options = ['1', '2']
            usrAns = Number(askOption(msg, options))
            console.log(usrAns)
            if(usrAns === 1){
                msg = "(There is too much chlorine in the pool. Hildebrando dies)\n"
                holidayEnds = true; hilderDies = true
            }else{
                msg = "(Hildebrando spends a good time around the pool but without getting in it)\n"
            }
            break
        case 2:
            // Green
            alert("(Hildebrando chooses to go to a walk.)")
            msg = "You have been walking for a while. Please choose an option\n" +
                "1. Finish trip with the guides\n2. Go back to the hotel by yourself"
            options = ['1', '2']
            usrAns = Number(askOption(msg, options))
            if(usrAns === 1){
                msg = "(Hildebrando continues the trip to the end," +
                    " goes to a waterfall and takes a lot of pictures.)\n"
            }else{
                msg = "(Hildebrando chooses to go to back to the hotel, " +
                    "gets lost in the forest during the night and dies)\n"
                holidayEnds = true; hilderDies = true
            }
            break
        case 3:
            // Red
            alert("(Hildebrando chooses to go to the beach")
            msg = "Please choose the activity you want to do\n" +
                "1. Play volleyball and have a nice time\n" +
                "2. Swim in the sea and ride a jet ski\n" +
                "3. Drink cocktails while taking a rest"
            options = ['1', '2', '3']
            usrAns = Number(askOption(msg, options))
            if(usrAns === 1){
                msg = "(Hildebrando has a nice day playing volleyball\n)"
            }else if(usrAns === 2){
               msg = "(Hildebrando has a nice day swimming in the sea and riding a jet ski\n)"
            }else{
                msg = "(Hildebrando just took adulterated chirrinchi. " +
                    "He gets a strong headache and has to go back home\n"
                holidayEnds = true
            }
            break
        case 4:
            // Blue
            alert("(Hildebrando chooses to stay at the hotel)")
            msg = "Please choose the activity you want to do\n" +
                "1. Play bingo\n" +
                "2. Dance\n" +
                "3. Go to the casino"
            options = ['1', '2', '3']
            usrAns = Number(askOption(msg, options))
            if(usrAns === 1){
                msg = "(Hildebrando has a nice time playing bingo "
                let winsBingo = winsBingoFunc()
                if(winsBingo){
                    otherSpentMoney += 200000
                    msg += "and he wins)\n"
                }else{
                    otherSpentMoney -= 200000
                    msg += "and he loses)\n"
                }
                if((initMoney - otherSpentMoney) < 500000){
                    msg += "(However, Hildebrando ran out of money and only has the money for the transport back home\n)"
                    holidayEnds = true
                }
            }else if(usrAns === 2){
               msg = "(Hildebrando dances and has a good time\n)"
            }else{
                msg = "(Hildebrando plays at the casino, but loses all of his money and has to go back home)"
                holidayEnds = true
                hotelSpentMoney = hotelSpentMoneyPerDay * dayNum
                otherSpentMoney = initMoney - hotelSpentMoney - 500000 // Calculating spent money
            }
        }
        alert(msg+`Day ${dayNum}/${plannedDays}`)
        if(holidayEnds){
            hotelSpentMoney = hotelSpentMoneyPerDay * dayNum
            totalSpentMoney = hotelSpentMoney + otherSpentMoney
            remMoney = initMoney - totalSpentMoney
            msg = "(The good time at the hotel has finished. "
            if(hilderDies){
                msg += "Unfortunately, Hildebrando has died)\n"
            }else{
                msg += "Hildebrando has to go back home)\n"
            }
            msg += `The total expenses at the hotel were COP${totalSpentMoney}, ` +
            `so the remaining money is COP ${remMoney}`
            alert(msg)
            numDays = dayNum
            break
        }
        }
    return [remMoney, numDays]
}

export {case6}
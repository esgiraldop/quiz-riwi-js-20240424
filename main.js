import {case1} from "./1_case.js"
import {case2} from "./2_case.js"
import {case3} from "./3_case.js"
import {case4} from "./4_case.js";
import {case5} from "./5_case.js";
import {case6} from "./6_case.js"

let initMoney = 2500000, crrntMoney

alert("(Hildebrando gets to El Dorado airport since he is heading to Macondo for his vacation)")
crrntMoney = case1(initMoney)

alert("(Hildebrando gets to the airport hold room and notices his suitcase size is greater than the allowed size.\n")
case2()

alert("(Hildebrando flies from Bogotá to Medellín and once he arrives, he tries to connect to the wifi network." +
    "However, the password is encoded as '01110010_01101001_01110111_01101001', but he has an app that helps him" +
    "decoding the password")
let time = 1 //Hours
crrntMoney = case3(crrntMoney, time)

alert("(Hildebrando flies from Medellin to Macondo and takes a cab to the hotel.\n" +
    "He learns everybody speaks a weird language in which all vowels are replaced by 'i'\n"+
    "Fortunately, he has an app to translate from his language to the Macondian language)")
alert("(He needs to translate 'Taxi me puede llevar al hotel mariposas amarillas')")
case4()

alert("(The taxi then leaves for the hotel.\n"+
    "Hildebrando gets surprised when arriving at the hotel, the taxi driver charges him COP 300.000\n"+
    "He makes a deal with the taxi driver. They will play rock, paper, scissors.\n" +
    " If the taxi driver wins, Hildebrando has to pay the money\n"+
    "if Hildebrando wins or there is a draw, he does not pay anything.\n"+
    "There is only one round)")
crrntMoney = case5(crrntMoney)

alert("(Hildebrando finally gets to the hotel and he notices that for the activities in the hotel, he has to dress " +
    "accordingly. There is a color to pick for his shirt according to the activity)")
case6(crrntMoney)
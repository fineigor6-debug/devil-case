import { Header } from "../components/Header.js"
import { Roulette } from "../components/Roulette.js"
import { BottomNav } from "../components/BottomNav.js"

export function renderCase(app){

 app.innerHTML = `

 ${Header("Тестовый кейс", true)}

 ${Roulette()}

 <p>Дроп:
 NFT Cat
 NFT Dog
 NFT Demon
 NFT Devil
 </p>

 ${BottomNav()}

 `

}

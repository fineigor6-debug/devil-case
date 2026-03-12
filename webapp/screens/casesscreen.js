import { Header } from "../components/Header.js"
import { CaseCard } from "../components/CaseCard.js"
import { BottomNav } from "../components/BottomNav.js"

export function renderCases(app){

 app.innerHTML = `

 ${Header("Кейсы", true)}

 ${CaseCard()}

 ${BottomNav()}

 `

}

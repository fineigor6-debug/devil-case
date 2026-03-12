import { navigate } from "../router.js"

export function CaseCard(){

 return `
 <div class="case-card">

   <h3>Тестовый кейс</h3>

   <button onclick="navigate('case')">
   Открыть
   </button>

 </div>
 `

}

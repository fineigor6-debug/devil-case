import { navigate } from "../router.js"
import { BottomNav } from "../components/BottomNav.js"

export function renderHome(app){

 app.innerHTML = `

 <div class="header">
  <h2>Devil Case</h2>
 </div>

 <div class="menu">

  <button onclick="navigate('cases')">
   Кейсы
  </button>

  <button disabled>
   Крафт (в разработке)
  </button>

  <button disabled>
   Ракета (в разработке)
  </button>

 </div>

 ${BottomNav()}
 `

}

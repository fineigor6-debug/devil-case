import { navigate } from "../router.js"

export function BottomNav(){

 return `
 <div class="nav">

  <button onclick="navigate('home')">Главная</button>
  <button disabled>Лидерборд</button>
  <button onclick="navigate('profile')">Профиль</button>

 </div>
 `

}

import { BottomNav } from "../components/BottomNav.js"
import { InventoryItem } from "../components/InventoryItem.js"

export function renderProfile(app){

 app.innerHTML = `

 <div class="header"></div>

 <div class="profile">

  <img src="https://placehold.co/100">

  <h3>Player</h3>

  <p>ID: 1001</p>

  <p>Balance: 0 ⭐</p>

  <h4>Inventory</h4>

  ${InventoryItem("NFT Cat")}
  ${InventoryItem("NFT Demon")}

 </div>

 ${BottomNav()}

 `

}

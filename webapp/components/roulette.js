export function Roulette(){

 const items = [
  "NFT Cat",
  "NFT Dog",
  "NFT Demon",
  "NFT Devil"
 ]

 const item = items[Math.floor(Math.random()*items.length)]

 return `
 <div class="roulette">

   <p>🎰 Рулетка</p>

   <button onclick="alert('Вы выбили: ${item}')">
   Открыть кейс
   </button>

 </div>
 `

}

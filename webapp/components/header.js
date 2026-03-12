export function Header(title, back){

 return `
  <div class="header">

   ${back ? `<button onclick="history.back()">←</button>` : ""}

   <h2>${title}</h2>

  </div>
 `

}

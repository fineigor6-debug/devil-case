import { renderHome } from "./screens/HomeScreen.js"
import { renderCases } from "./screens/CasesScreen.js"
import { renderCase } from "./screens/CaseOpenScreen.js"
import { renderProfile } from "./screens/ProfileScreen.js"

export function navigate(screen){

 const app = document.getElementById("app")

 app.innerHTML = ""

 if(screen === "home") renderHome(app)
 if(screen === "cases") renderCases(app)
 if(screen === "case") renderCase(app)
 if(screen === "profile") renderProfile(app)

}

const tg = window.Telegram.WebApp

tg.expand()

export function getUser(){

 return tg.initDataUnsafe.user || {
  username:"Player",
  first_name:"Player"
 }

}

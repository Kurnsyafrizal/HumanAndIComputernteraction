let statusNav = false
const itemListNav = document.getElementById("list-nav")

itemListNav.style.display = "none"

function atClickMenuToogle(){
  if(!statusNav){
    itemListNav.style.display = "block"
    statusNav = true
    return
  }
  itemListNav.style.display = "none"
  statusNav = false
  return
}
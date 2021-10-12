showContainerPart()

function showContainerPart(index){
  index = (index||0)
  const container = document.getElementsByClassName("container")

  for (i = 0; i < container.length; i++) {
    container[i].style.display = "none";
  }

  container[index].style.display = "grid"
}

function moveToDetailPage(namaProduk, namaImage){  
  
  namaProduk = (namaProduk||"")
  namaImage = (namaImage||"")

  const urlBefore = window.location.href?.split("/")

  let baseURL = ""

  for(let i=0; i<=urlBefore?.length-2;i++){
    baseURL = baseURL + urlBefore[i] + "/"
  }  

  const url = new URL(`${baseURL}detail.html`)

  url.searchParams.append("product", namaProduk)
  url.searchParams.append("image", namaImage)  

  window.location.href = url

} 
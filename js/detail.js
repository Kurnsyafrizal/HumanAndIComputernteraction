
const urlParams = new URLSearchParams(window.location.search);
const productParam = urlParams.get('product');
const imageParam = urlParams.get('image');

document.getElementById("namaProduct").innerText = productParam

document.getElementById("imgDetail").setAttribute("src", `../assets/img/${imageParam}`)

function submit(){
  const nameVal = document.getElementById("name").value
  const phoneVal = document.getElementById("tel").value
  const alamatVal = document.getElementById("alamat").value
  const qtyVal = document.getElementById("qty").value
  const warna = document.getElementById("warna")?.value  
  if(nameVal?.length < 6){
    alert("Nama Harus Lebih Dari 6 Karakter")
  }
  else if(nameVal?.length === 0){
    alert("Nama tidak boleh kosong")
  }
  if(phoneVal?.length < 10 && phoneVal?.length > 12){
    alert("No Handphone Terdiri dari 10 sampai 12 Karakter")
  }
  else if(phoneVal?.length === 0){
    alert("No Handphoen tidak boleh kosong")
  }
  if(alamatVal?.length > 200){
    alert("Alamat tidak boleh lebih dari 200 Kata")
  }
  else if(alamatVal?.length === 0){
    alert("Alamat tidak boleh kosong")
  }
  if(qtyVal?.length === 0){
    alert("Jumlah tidak boleh kosong")
  }
  try {
    const _ = parseInt(qtyVal)
  } catch (error) {
    alert("Jumlah harus berupa angka") 
  }   
  if(warna === ""){
    alert("Warna tidak boleh kosong")
  } 
}
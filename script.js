function openModal(){
  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function login(){
  const name = document.getElementById("username").value.trim();
  if(name===""){
    alert("Kullanıcı adı gir");
    return;
  }

  localStorage.setItem("bliUser", name);
  document.getElementById("auth").style.display="none";
  document.getElementById("account").style.display="block";
  closeModal();
}

function logout(){
  localStorage.removeItem("bliUser");
  location.reload();
}

window.onload = ()=>{
  if(localStorage.getItem("bliUser")){
    document.getElementById("auth").style.display="none";
    document.getElementById("account").style.display="block";
  }
};

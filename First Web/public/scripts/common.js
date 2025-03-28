window.onload = () => {
    if (!sessionStorage.name) {
      window.location = "../index.html";
    } else {
      const menuGame = document.getElementById("menuGame");
      menuGame.setAttribute("href", "./game.html?id=" + sessionStorage.id);
      const h1 = document.getElementById("greeting");
      h1.innerHTML = "Hola " + sessionStorage.name;
    }
  };
  
  const logout = document.getElementById("btn-logout");
  logout.addEventListener("click", () => {
    sessionStorage.clear();
    window.location = "../index.html";
  }
);
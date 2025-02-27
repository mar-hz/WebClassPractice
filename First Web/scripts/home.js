window.onload = () => {
    if (sessionStorage.name) {
        const h1 = document.getElementById("h1");
        h1.innerHTML = "Hola " + sessionStorage.name;
        console.log("hola", sessionStorage.name);
    } else {
        window.location = "../index.html";
    }

    const logout = () => {
        sessionStorage.removeItem("name");
        window.location = "../index.html";
    }

    const btnLogout = document.getElementById("btn-logout");
    btnLogout.addEventListener("click", logout);
}
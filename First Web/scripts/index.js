window.onload= () => {
    const btnLogin = document.getElementById("btn-login");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const login = () => {
        if (username.value === "meee" && password.value === "123") {
            sessionStorage.setItem("name", "Marian Hdz")
            window.location = "./pages/home.html";
        } else {
            alert("Credenciales incorrectas!");
        }
    };
    
    btnLogin.addEventListener("click",  login);
    password.addEventListener("keydown",  (e) => {
        if (e.key === "Enter") {
            login();
        }
    });
}
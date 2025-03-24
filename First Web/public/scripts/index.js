window.onload= () => {
    const btnLogin = document.getElementById("btn-login");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const login = async () => {
        const user = {username: username.value, password: password.value};
        const respuesta = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        });
        const data = await respuesta.json();

        if (data.isLogin) {
            sessionStorage.setItem("id", data.user.user_id);
            sessionStorage.setItem("name", data.user.first_name);
            window.location = "./pages/home.html?id="+data.user.user_id;
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
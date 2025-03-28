window.onload = () => {
    if (sessionStorage.name) {
        const h1 = document.getElementById("h1");
        h1.innerHTML = "Hola " + sessionStorage.name;
        console.log("hola", sessionStorage.name);
    } else {
        window.location = "../index.html";
    }

    const sendMsg = () => {
        chat.value += "\n" + msg.value;
        msg.value = "";
    }
    
    const btnSend = document.getElementById("btn-send");
    const chat = document.getElementById("chat");
    const msg = document.getElementById("msg");

    btnSend.addEventListener("click", sendMsg);
}
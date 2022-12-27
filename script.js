const btnSenha = document.querySelector(".btnSenha")
const inputSenha = document.querySelector(".inputSenha")
const inputUser = document.querySelector(".inputUser")
const input = document.querySelector(".input")
const btnLogin = document.querySelector(".btnLogin")
const errorUser = document.querySelector(".error")
const placeholderUser = document.querySelector(".placeholderUser")
const errorSenha = document.querySelector(".errorSenha")
let p

function exibirOcultarSenha() {
    
    if (inputSenha.type === "password") {
        inputSenha.type = "text"

        btnSenha.innerHTML = "Ocultar"

    }
    else {
        inputSenha.type = "password"
        btnSenha.innerHTML = "Exibir"
    }

}

inputSenha.addEventListener("keypress", () => {
    if(inputSenha.innerHTML = '') {
        return
    } else {
        inputSenha.innerHTML = ''
        btnSenha.style.visibility = "visible"   
    }

})
  
inputSenha.addEventListener("focusout", () => {
    if (inputSenha.value == '') {
        btnSenha.style.visibility = "hidden" 
    }

    inputSenha.type = "password"
})

inputUser.addEventListener("focusout", () => {
    let errorUser = document.querySelector(".error")
    let placeholderUser = document.querySelector(".placeholderUser")

    if (inputUser.value == '') {
        errorUser.style.display = "none"
        inputUser.style.borderColor = "#45f3ff"
        placeholderUser.style.color = "#8f8f8f"
    }
})

function validacaoUser() {
    if (inputUser.value.length <= 4 ) {
        errorUser.style.display = "block"
        inputUser.style.borderColor = "red"
        placeholderUser.style.color = "red"
        if (inputUser.value == '') {
            return p = 0
        }
        return p = 1
    }
    if(inputUser.value.length >= 5 ) {
        errorUser.style.display = "none"
        inputUser.style.borderColor = "#45f3ff"
        placeholderUser.style.color = "#8f8f8f"
        return p = 0
    }

}

function validacaoGeral() {

    let error = document.querySelector(".errorData")
    
    inputUser.value == '' || inputSenha.value == '' ? error.style.display = "block" : false;

    setTimeout(() => {
        error.style.display = "none"
    }, 2500);

}

function btnLoginInvalidado() {
    if (btnLogin.classList.contains("c")) {
        btnLogin.classList.remove("c")
        btnLogin.classList.add("a")
        return
    }
    if (btnLogin.classList.contains("a")) {
        btnLogin.classList.remove("a")
        btnLogin.classList.add("b")
        return
    }
    if (btnLogin.classList.contains("b")) {
        btnLogin.classList.remove("b")
        btnLogin.classList.add("a")
        return
    }
}

btnLogin.addEventListener("mouseover", () => {
    p == 1 ? btnLoginInvalidado() : false;
})
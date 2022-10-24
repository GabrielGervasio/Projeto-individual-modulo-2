const BUTAO = document.getElementById('btn');
const ESCOLHE = document.getElementById('escolher');
const ENVIO = document.getElementById('caixinha');
const DESVIO = document.getElementById('decodigo');
const ESCLADIO = document.getElementsByClassName('radio');
const PARAMETRO = document.querySelector('#incrementar')

function codificarCesar(ab, par) {
    return ab.map((obv) => {
        let texto = obv.charCodeAt()
        if (texto >= 65 && texto <= 90) {
            return String.fromCharCode(((texto - 65 + par) % 26) + 65)
        } else if (texto >= 97 && texto <= 122) {
            return String.fromCharCode(((texto - 97 + par) % 26) + 97)
        } else {
            return obv
        }
    }
    ).join('')
}
//dividir                                      

function decodificarCesar(ac, par) {
    return ac.map((qtv) => {
        let texto = qtv.charCodeAt()
        if (texto >= 65 && texto <= 90) {
            return String.fromCharCode(((texto - 90 - par) % 26) + 90)
        } else if (texto >= 97 && texto <= 122) {
            return String.fromCharCode(((texto - 122 - par) % 26) + 122)
        } else {
            return qtv
        }
    }
    ).join('')
}

function toc(base) {
    if (base === "vazio") {
        alert('Escolha um tipo de codificação')
    }
    if (ENVIO.value === "") {
        alert('Escreva um texto')

    }

}

function trocarbutao() {
    let claro = ESCLADIO[0]
    let escuro = ESCLADIO[1]
    if (claro.checked) {
        BUTAO.value = "codificar"
        BUTAO.style.backgroundColor = "#97c9bf"
        BUTAO.style.color = "black"
    } if (escuro.checked) {
        BUTAO.value = "decodificar"
        BUTAO.style.backgroundColor = "#97c9bf"
        BUTAO.style.color = "black"
    }
}


function sumir() {
    let sel = ESCOLHE.value;
    if (sel === "vazio") {
        document.getElementById('escnum').style.display = "none"
        document.getElementById('incrementar').style.display = "none"
        document.getElementById('vazio').style.display = "none"
    }
    if (sel === "b64") {
        document.getElementById('escnum').style.display = "none"
        document.getElementById('incrementar').style.display = "none"
        document.getElementById('vazio').style.display = "none"
    }
    if (sel === "cesar") {
        document.getElementById('escnum').style.display = "inline"
        document.getElementById('incrementar').style.display = "inline"
        document.getElementById('vazio').style.display = "inline"
    }
}
// juntar



BUTAO.addEventListener("click", (a) => {
    a.preventDefault();
    let thor = ESCOLHE.value;
    if (thor == "cesar" && ESCLADIO[0].checked) {
        let msgValor = ENVIO.value.toUpperCase()
        msgValor = ENVIO.value.split('')
        let incremento1 = parseInt(PARAMETRO.value)
        DESVIO.value = codificarCesar(msgValor, incremento1)
    }
    else if (thor == "cesar" && ESCLADIO[1].checked) {
        let msgValor = ENVIO.value.toUpperCase()
        msgValor = ENVIO.value.split('')
        let incremento1 = parseInt(PARAMETRO.value)
        DESVIO.value = decodificarCesar(msgValor, incremento1)

    }
    else if (thor == "b64" && ESCLADIO[0].checked) {
        let encodeb64 = window.btoa(ENVIO.value)
        return DESVIO.value = encodeb64

    }
    else if (thor == "b64" && ESCLADIO[1].checked) {
        let decob64 = window.atob(ENVIO.value)
        return DESVIO.value = decob64
    }
})
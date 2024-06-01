var cepInput

 function SubmitFormAndSendData(){
    SubmitForm()
    sendData()
}
function ToggleLigthMode() {
    document.body.classList.add('ligth-mode')
    document.body.classList.remove('dark-mode')
}

function ToggleDarkMode() {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('ligth-mode')
}
cepInput = document.querySelector('#cep')
cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /^[0-9]$/

    if (!onlyNumbers.test(e.key)) {
        e.preventDefault()
    }
})

function consultarCEP() {
    var cep = cepInput.value
    cep = cep.replace('-', '')

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/', true)

    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)
            exibirResultado(data)
        } else {
            console.error('Erro ao consultar o CEP')
        }
    }

    xhr.send()
}

function exibirResultado(data) {
    if (data.erro) {
        alert('CEP não encontrado.')
    } else {
        document.getElementById('cidade').value = data.localidade
        document.getElementById('rua').value = data.logradouro
    }
}


function SubmitForm() {
        var nomeInput = document.querySelector('#name')
        var datanascInput = document.querySelector('#nascimento')
        var emailInput = document.querySelector('#email')
        var cidadeInput = document.querySelector('#cidade')
        var ruaInput = document.querySelector('#rua')
        var numInput = document.querySelector('#num')

        nomeInput.value = ''
        datanascInput.value = ''
        emailInput.value = ''
        cidadeInput.value = ''
        ruaInput.value = ''
        numInput.value = ''
        cepInput.value = ''

        alert("formulario preenchido com sucesso")

    }
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
            var data = JSON.parse(xhr.responseText);
            exibirResultado(data)
        } else {
            console.error('Erro ao consultar o CEP')
        }
    }

    xhr.send();
}

function exibirResultado(data) {
    if (data.erro) {
        alert('CEP não encontrado.');
    } else {
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('rua').value = data.logradouro;
    }
}


function SubmitForm() {
        var nomeInput = document.querySelector('#name');
        var datanascInput = document.querySelector('#nascimento');
        var emailInput = document.querySelector('#email');
        var cidadeInput = document.querySelector('#cidade');
        var ruaInput = document.querySelector('#rua');
        var numInput = document.querySelector('#num');
        var generoInput = document.getElementsByName('genero');

        nomeInput.value = '';
        datanascInput.value = '';
        emailInput.value = '';
        cidadeInput.value = '';
        ruaInput.value = '';
        numInput.value = '';

    }
    function sendData() {
        var formData = new FormData(document.forms['forms']);
    
        fetch('https://script.google.com/macros/s/AKfycbwt5chgKC8a-Uyap5r3L2BzQAzrCgyDjZYAoaFXZHdKHRSiwpaBV4lLJnpyul56z5h0/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Erro ao enviar dados. Código de resposta: ' + response.status);
            }
        })
        .then(data => {
            alert('Dados enviados com sucesso!\n' + data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados. Por favor, tente novamente.');
        });
    }
    
    
  

function ToggleLigthMode(){
    document.body.classList.add('ligth-mode')
    document.body.classList.remove('dark-mode')
}
function ToggleDarkMode(){
    document.body.classList.add('dark-mode')
    document.body.classList.remove('ligth-mode')
}
function SubmitForm(){
    var nomeInput = document.querySelector('#name')
    var datanascInput = document.querySelector('#nascimento')
    var emailInput = document.querySelector('#email')
    var cidadeInput = document.querySelector('#cidade')
    var ruaInput = document.querySelector('#rua')
    var numInput = document.querySelector('#num')
    var generoInput = document.getElementsByName('genero')

    if (
        nomeInput.value.trim() !== '' &&
        datanascInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' &&
        cidadeInput.value.trim() !== '' &&
        ruaInput.value.trim() !== '' &&
        numInput.value.trim() !== '' &&
        generoInput !== ''
    ) {
        alert('Formulário preenchido com sucesso')
        nomeInput.value = ''
        datanascInput.value = ''
        emailInput.value = ''
        cidadeInput.value = ''
        ruaInput.value = ''
        numInput.value = ''
    } else {
        alert('Preencha todos os campos')
    }
}
let password = document.getElementById('password')
let generateBtn = document.getElementById('generateBtn')
let copyBtn = document.getElementById('copyBtn')

function generatePassword() {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 12
    let passwordString = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordString += characters.substring(randomNumber, randomNumber + 1)
    }
    password.value = passwordString
}

function copyPassword() {
    navigator.clipboard.writeText(password.value)
    alert("Password Copied to Clipboard!")
}

generateBtn.addEventListener('click', generatePassword)

copyBtn.addEventListener('click', copyPassword)

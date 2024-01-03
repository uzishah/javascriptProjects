var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrtuvwxyz"
var numbers = "1234567890"
var specialCharacter = "!@#$%^&*()~}{[]\|?,"




var passBox = document.getElementById("password")
var totalInput = document.getElementById("length")
var upperInput = document.getElementById("UpperCase")
var lowerInput = document.getElementById("LowerCase")
var numbersInput = document.getElementById("numbers")
var specialInput= document.getElementById("special")


const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]

}

const generatePassword = (password = "")=> {
    if(upperInput.checked){
        password += getRandomData(upperCase)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerCase)
    }
    if(numbersInput.checked){
        password += getRandomData(numbers)
    } 
    if(specialInput.checked){
        password += getRandomData(specialCharacter)
    }
if(password.length < totalInput.value){
    return generatePassword(password)
}

passBox.setAttribute("value", truncateString(password, totalInput.value));
};

generatePassword()
document.getElementById("generate").addEventListener(
    "click",
    function(){
        generatePassword()
    }
)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
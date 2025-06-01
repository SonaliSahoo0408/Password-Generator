
let slider = document.querySelector("#myRange");
let output = document.getElementById("char-count");
let inputPassword = document.getElementById('password-length');

slider.oninput = function() {
    output.innerHTML = this.value;
    inputPassword.setAttribute('maxlength',this.value)
  }



let numCheckBox = document.getElementById('numCheck');
let letterCheckBox = document.getElementById('letterCheck');
let mixedCaseCheckBox = document.getElementById('mixedCaseCheck');
let punctuationCheckBox = document.getElementById('punctuationCheck');


const number = numCheckBox.checked ;
const lowerCase = letterCheckBox.checked;
const upperCase = mixedCaseCheckBox.checked;
const punctuation = punctuationCheckBox.checked;

const noCheckBoxSelectedAlert = document.getElementById('checkbox-selection-alert');
const passwordCopiedAlert = document.getElementById('password-copy');


function checkMarked() {
  if(!number && !lowerCase && !upperCase && !punctuation)
  {
    console.log(noCheckBoxSelectedAlert.innerText);
    noCheckBoxSelectedAlert.style.display = 'inline-block';
    setTimeout(()=>{
      noCheckBoxSelectedAlert.style.display = 'none';
    },3000);
  }
}

function generatePassword(passwordLength,characters) {
    let password = '';
    let num="0123456789";
    let small='abcdefghijklmnopqrstuvwxyz';
    let big='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let special='!@#$%^&*';
    let numFlage=false;
    let smallFlage=false;
    let bigFlage=false;
    let specialFlage=false;

    if(characters.includes('0')){
      numFlage=true
    }
    if(characters.includes('a')){
      smallFlage=true
    }
    if(characters.includes('A')){
      bigFlage=true
    }
    if(characters.includes('!')){
      specialFlage=true
    }
    // console.log(characters)
    // console.log(passwordLength)

    for (let i = 0; i < passwordLength; i++) {
        if(numFlage){
           password += num[Math.floor(Math.random()* num.length)];
        } 
        if(smallFlage){
          password += small[Math.floor(Math.random()* small.length)];
         
        } 
        if(bigFlage){
          password += big[Math.floor(Math.random()* big.length)];
          
        } 
        if(specialFlage){
          password += special[Math.floor(Math.random()* special.length)];
         
        }

    }

    let result="";
    for(let i=0;i<passwordLength;i++){
      result+=password[i];
    }

    return result;
}



let uppercase;
  let lowercase;
  let numbers;
  let symbols;


function buildCharacterSet(upperCase, lowerCase, number, punctuation) {
  let allPossibleCharacters = '';
  if(number) allPossibleCharacters += '0123456789';
  if(lowerCase) allPossibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
  if(upperCase) allPossibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(punctuation) allPossibleCharacters += '!@#$%^&*';
  return allPossibleCharacters;
}
 

const copyButton = document.querySelector('#copy');
const createButton = document.querySelector('#create');

copyButton.addEventListener('click',()=>{
   
    navigator.clipboard.writeText(password);
    passwordCopiedAlert.style.display='inline-block'
    setTimeout(() => {
        passwordCopiedAlert.style.display = 'none';
    }, 3000);
  
})

createButton.addEventListener('click', ()=>{
  console.log("hii");
  
   uppercase = mixedCaseCheckBox.checked;
   lowercase = letterCheckBox.checked;
   numbers = numCheckBox.checked;
   symbols = punctuationCheckBox.checked;
  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(symbols);

   if(!uppercase && !lowercase && !numbers && !symbols){
      inputPassword.value='';
      // console.log(noCheckBoxSelectedAlert.innerText);
      noCheckBoxSelectedAlert.style.display = 'inline-block';
      setTimeout(()=>{
        noCheckBoxSelectedAlert.style.display = 'none';
      },3000);
    }
  else{
    const characters = buildCharacterSet(uppercase, lowercase, numbers, symbols);
   
    
  const password = generatePassword(output.innerHTML,characters);
  console.log(password);
  
  inputPassword.value = password;
  }
})

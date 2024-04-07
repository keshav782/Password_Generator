const passwordDisplay=document.querySelector(".display");
const copyPassword=document.querySelector('.copy-tooltip');
const passwordlength=document.querySelector('.length-container');
const slider=document.querySelector('.slider');
const uppercasePassword=document.getElementById('uppercase');
const lowercasePassword=document.querySelector('#lowercase');
const symbolcasePassword=document.querySelector('#symbols');
const numbercasePassword=document.querySelector('#numbers');
const strengthPassword=document.querySelector('.indicator');
const btn=document.querySelector('.generateBtn');
const ig=document.getElementById("ig")
const len=document.querySelector('.length');
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
let AlphabetUppercase="ABCDEFGHIJKMNOPQRSTUVWXYZ";
let AlphabetowerCase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let includeUpper=false;
let includeLower=false;
let includeUnmber=false;
let includeSymbols=false;
var ans="";
copyPassword.style.opacity=0;
ig.addEventListener('click',()=>{
   setTimeout(() => {
    copyPassword.style.opacity=0;
   }, 2000);
   copyPassword.style.opacity=1;
   
   window.navigator.clipboard.writeText(pass)
    
})
uppercasePassword.addEventListener('change',()=>{
    if(uppercasePassword.checked)
    {
        includeUpper=true;
         ans=ans+AlphabetUppercase
       
    }
    else
    {
        includeUpper=false;
        
    }
});
lowercasePassword.addEventListener('change',()=>{
    if(lowercasePassword.checked)
    {
        includeLower=true;
        ans=ans+AlphabetowerCase
       
    }
    else
    {
        includeLower=false;
    }
});
symbolcasePassword.addEventListener('change',()=>{
    if(symbolcasePassword.checked)
    {
        includeSymbols=true;
        ans=ans+symbols
       
    }
    else{
        includeSymbols=false;
       
    }
});
numbercasePassword.addEventListener('change',()=>{
    if(numbercasePassword.checked)
    {
        includeUnmber=true;
        ans=ans+number
       
    }
    else{
        includeUnmber=false;
       
    }
});
var pass="";
 len.textContent=slider.value;
slider.addEventListener('input',()=>{
    len.innerHTML=slider.value;
    // slider.style.backgroundSize = ((slider.value-slider.min)*100/(slider.max-slider.min)) + "% 100%";
    
});


function gettingPassword()
{
    pass="";
    if(includeLower==false && includeUpper==false && includeUnmber==false && includeSymbols==false)
    {
        alert("marks any checkbox");
        return pass;
    }
    let i=0;
    while(i<slider.value)
    {
        pass=pass+ans.charAt(Math.random()*ans.length);
        i++;
    }
  return pass;
   
}

btn.addEventListener('click',()=>{
    passwordDisplay.value=gettingPassword();
    
})


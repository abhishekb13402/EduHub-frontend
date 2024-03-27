const generateButton=document.getElementById("generateButton");
const copyButton=document.getElementById("copyButton");
const show=document.getElementById("show");
const passwordInput=document.getElementById("password");

generateButton.onclick=function generatePassword(){
    const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*_";
    const pwdLength =16;
    let password="";

    for(let i=0;i<pwdLength;i++){
        let genratePwd = Math.floor(Math.random() * character.length)
        password += character.substring(genratePwd,genratePwd+1);
    }
    passwordInput.value=password;
}

copyButton.onclick=function copyPwd(){
    const passwordValue = passwordInput.value;
    if(passwordValue.trim()==="")
    {
        alert("Password is empty. Generate a password first.");
    }else{
        navigator.clipboard.writeText(passwordValue).then(function(){
        alert("Your new Password is: "+passwordValue);
        passwordInput.value="";
        });
    }

}
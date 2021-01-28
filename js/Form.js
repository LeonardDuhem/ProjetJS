var formValid = document.getElementById('bouton_envoi');
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            
formValid.addEventListener('click', validation);
            
function validation(event){
//Si le champ est vide
if (prenom.validity.valueMissing){
event.preventDefault();
missPrenom.textContent = 'Prénom manquant';
missPrenom.style.color = 'red';
//Si le format de données est incorrect
}else if (prenomValid.test(prenom.value) == false){
                    event.preventDefault();
                    missPrenom.textContent = 'Format incorrect';
                    missPrenom.style.color = 'orange';
                }else{ 
                }
                if (nom.validity.valueMissing){
                  event.preventDefault();
                  missNom.textContent = 'Nom manquant';
                  missNom.style.color = 'red';
              //Si le format de données est incorrect
              }else if (NomValid.test(Nom.value) == false){
                  event.preventDefault();
                  missNom.textContent = 'Format incorrect';
                  missNom.style.color = 'orange';
              }else{ 
              }
              
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if (inputtxt.value.match(phoneno)){
    return true;
  }else{
    alert("Numéro non valide");
    return false;
   }
  }
function creditCardValidation(creditCradNum)
{
var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
   if(creditCradNum.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Entrez un numéro de carte valide");
     return false;
     }
}    
function Validation()
{
var a = document.form.address.value;
if(a=="")
{
alert("Entrez une adresse valide");
document.form.address.focus();
return false;
}
if((a.length < 20) || (a.length > 100))
{
alert("Votre texte doit contenir entre 20 et 100 caractères");
document.form.address.select();
return false;
}
}
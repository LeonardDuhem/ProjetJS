let body = document.querySelector('tbody');
let cart = document.querySelectorAll('.add-to-cart');
let liste = document.querySelector('#cart-table');
let allName = document.querySelectorAll('h4');
let allPrice = document.querySelectorAll('.discount');
let allImg = document.querySelectorAll('img');
let allStock = document.querySelectorAll('.stock');


cart.forEach(function(elem){
elem.addEventListener("click" , clicBtn)
    
})
//Vérif du clique
function clicBtn(e){
    //Valeur en html
    const course = e.target.parentElement.parentElement;
    getInfoElem(course)
    
    
}
//Récupération valeur
function getInfoElem(course){
//Nom du Cours
let name = course.querySelector('h4').textContent
console.log(name)
//Prix
let price = course.querySelector('.discount').textContent
console.log(price)
//Image
let img =course.querySelector('img').src
console.log(img)
//Place dans la liste de cours
let place = course.querySelector('a').getAttribute('data-id')
console.log(place)
//Nombre en Stock
let stock = course.querySelector('.stock').textContent
console.log(stock)

addcart(img ,name , price, 1)



}
//Création "thead"
function addcart(Img ,Article , Prix , Qt){
    
    let newTr = document.createElement('tr');

    let newImg = document.createElement('td');
    newImg.innerHTML +=`<img src=${Img}>`;
    
    newTr.appendChild(newImg);
    
    

    let newName = document.createElement('td');
    newTr.appendChild(newName);
    newName.innerHTML = Article;

    let newPrice = document.createElement('td');
    newTr.appendChild(newPrice);
    newPrice.innerHTML = Prix;

    let newQt = document.createElement('td');
    newTr.appendChild(newQt);
    newQt.innerHTML = Qt;

    let newRemove = document.createElement('td');
    newTr.appendChild(newRemove);
    
    body.appendChild(newTr);

    
    
    

}


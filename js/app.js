let tbody = document.querySelector('tbody');
let cart = document.querySelectorAll('.add-to-cart');
let liste = document.querySelector('#cart-table');
let allName = document.querySelectorAll('h4');
let allPrice = document.querySelectorAll('.discount');
let allImg = document.querySelectorAll('img');
let allStock = document.querySelectorAll('.stock');
let body = document.querySelector('body');
let notif = document.createElement('ul');
notif.setAttribute('id','notification_container');
let toutSupp = document.querySelector('#empty-cart');
toutSupp.addEventListener('click',supprimerToutArticle)

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
notifications(name , true)
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

    let newSupp = document.createElement('td');
    let img = document.createElement('img');
    img.addEventListener('click', supprimerArticle);
    img.setAttribute('src', 'img/close.png');
    img.className = 'supprimer-item';
    newSupp.appendChild(img);
    newTr.appendChild(newSupp);
    
    tbody.appendChild(newTr);

}

function notifications(Article, isAjout) {
    const infoNotif = document.createElement('li');
    infoNotif.setAttribute('class','content');

    const imgNotif = document.createElement('img');
    imgNotif.setAttribute('src','img/info.png');

    if (isAjout === true){
        const textNotif = document.createElement('p');
        textNotif.innerHTML = Article + ' a été ajouté au panier';

        infoNotif.appendChild(imgNotif);
        infoNotif.appendChild(textNotif);
        notif.appendChild(infoNotif);
        body.appendChild(notif);
    }
    else{
        const textNotif = document.createElement('p');
        textNotif.innerHTML = Article + ' a été supprimé du panier';

        infoNotif.appendChild(imgNotif);
        infoNotif.appendChild(textNotif);
        notif.appendChild(infoNotif);
        body.appendChild(notif);
    }

    setTimeout(function() {
        notif.removeChild(infoNotif);
    },2000);
}

function supprimerArticle(elem) {
    const name = elem.target.parentElement.parentElement.querySelectorAll('td')[1].textContent;
    elem.target.parentElement.parentElement.remove();
    notifications(name, false);
}
    
function supprimerToutArticle(){
    tbody.removeChild();
}


var products = [
    { img:"https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg",
    title:"Amelia 1 Seater Sofa in Charcoal Grey Colour CasaCraft by Pepperfry",
    price:21999,
    cutPrice:35999},

  
]

localStorage.setItem('checkout',JSON.stringify(products));

function append(el){

   let p = document.createElement('p');
   p.innerHTML = el.title;

let title = document.getElementById('appendp');
title.append(p);


let img = document.createElement('img');
img.src= el.img;

let image = document.getElementById('img');
image.append(img);

let cutp = document.createElement('p');
cutp.innerHTML = el.cutPrice;

let price = document.getElementById('price1');
price.append(cutp);

let pr = document.createElement('p');
pr.innerHTML = el.price;

let mprice = document.getElementById('price2');
mprice.append(pr);





}

function show(){
   let data = JSON.parse(localStorage.getItem('checkout'));

   data.forEach(function (el){
       append(el);
   });
}
show();

function success(){
   window.location.href = "successPage.html"
}

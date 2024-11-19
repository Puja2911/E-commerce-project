function openModal() {
    document.getElementById('customizeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('customizeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  function selectColor(element) {
    // Remove selected class from all color options
    document.querySelectorAll('.color-option').forEach(option => {
      option.classList.remove('selected');
    });
    // Add selected class to clicked option
    element.classList.add('selected');
  }

  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target == document.getElementById('customizeModal')) {
      closeModal();
    }
  }

  // Handle form submission
  document.getElementById('customizeForm').onsubmit = function(e) {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  }

  // File upload preview
  document.getElementById('designFile').onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      // Add your file handling logic here
      const fileName = file.name;
      e.target.parentElement.querySelector('p').textContent = `Selected file: ${fileName}`;
    }
  }
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.purchase-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all content sections
            document.querySelectorAll('.purchase-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected content
            const contentId = tab.getAttribute('data-tab') + '-content';
            document.getElementById(contentId).classList.add('active');
        });
    });
});

// Rental price calculator
function updateRentalPrice() {
    const monthlyRate = 999;
    const months = parseInt(document.getElementById('rental-period').value);
    const totalAmount = monthlyRate * months;
    
    document.querySelector('.total-rent').textContent = 
        `Total Rental Amount: ₹${totalAmount.toLocaleString()}`;
}

// Add hover effects for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.opacity = '0.9';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.opacity = '1';
    });
});

// Animate price changes
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
        current += increment;
        element.textContent = Math.floor(current);
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
            element.textContent = end;
        }
    }, 16);
}
var count = 0;
  

function carousel() {
    
    console.log('count:', count)
    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
       img.src = arrImage[count];
       div1.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+1];
       
       div2.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+2];
       div3.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+3];
       div4.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+4];
       div5.innerHTML=`<img src=${img.src} alt="">` 
  
}

carousel();

function nextImage() {
    count += 4;
    if (count > 4)
        count = 4;
    console.log('count:', count)
    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img")  
 
    if (count  < arrImage.length - 1) {
        img.src = arrImage[count];
        div1.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div1.innerHTML = ``;
           
    if (count + 1 < arrImage.length - 1) {
        img.src = arrImage[count + 1];
        div2.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div2.innerHTML = ``;
       
    if (count + 2 < arrImage.length - 1) {
        img.src = arrImage[count + 2];
        div3.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div3.innerHTML = ``;
       
    if (count + 3 < arrImage.length - 1) {
        img.src = arrImage[count + 3];
        div4.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div4.innerHTML = ``;
     if (count + 4 < arrImage.length - 1) {
        img.src = arrImage[count + 4];
        div5.innerHTML = `<img src=${img.src} alt="">`
    }
    else
        div5.innerHTML = ``;
        
  
}
             
function prevImage() {
    count -= 4;
    if (count < 0)
        count = 0;
    console.log('count:', count)

    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
    img.src = arrImage[count];
    div1.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+1];
    
    div2.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+2];
    div3.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+3];
    div4.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+4];
    div5.innerHTML=`<img src=${img.src} alt="">` 
  
}
              


function changeImage(){
    
let div_Image1 = document.getElementById("div-image");
    
    
let divs1=document.querySelectorAll(".mouse")
    
    for(let i=0;i<divs1.length;i++)
    {
        
        divs1[i].addEventListener("mouseover", function () {
            
            divs1[i].style.border = "1px solid red";
             
            div_Image1.innerHTML = ` ${divs1[i].innerHTML}  `
              
                divs1[i].addEventListener("mouseout",function(){
                   
                  divs1[i].style.border="1px solid white";
                  
                }) 
             
            })   
        }

   }   
   
   changeImage()

 

  
function aboutUs(){                   
    window.location.href="footerAboutPage.html"
}
   function gohome(){ 
       window.location.href = "homePage.html"
   }

   function incart(){ 
       window.location.href = "cartPage.html"
   }

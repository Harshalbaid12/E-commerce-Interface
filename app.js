const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navlinks = document.querySelectorAll('.nav-links li');
const likes = document.querySelectorAll('.like');



// Responsive Hamburger Dom
burger.addEventListener('click',function(){
    nav.classList.toggle('nav-active');
  
    burger.classList.toggle('rotateburger');
})

navlinks.forEach(link => {
    link.style.opacity='1'; 
   
})




// Like Toggle Dom

likes.forEach(like=>{
    like.addEventListener('click',function(){
           like.classList.toggle('liked');
    })
})

// Card Shadow Dom and Card Click Dom

const card = document.querySelectorAll('.card');

card.forEach(carditem=>{
    carditem.addEventListener('mouseover',function(){
        carditem.classList.add('cardshadow');
        
    });

    carditem.addEventListener('mouseout',function(){
        carditem.classList.remove('cardshadow');
    });

    // Card Click Dom
    
     carditem.addEventListener('click',function(){
        console.log(carditem.children);
    carditem.style.display='none';
    
    const div = document.querySelector('.largeview');
    const body = document.querySelector('.items');
    body.style.pointerEvents='none';
    body.style.backgroundColor="rgba(0,0,0,0.102)" ; 
    
     div.style.display="block";
     div.style.backgroundColor="white";
     div.style.pointerEvents="auto";

     const title = carditem.querySelector('.title');
     const img=carditem.querySelector('.object')
     const price = carditem.querySelector('.price');
     const desc = carditem.querySelector('.description')
     const button1 = carditem.querySelector('#buynow')
     const button2 = carditem.querySelector('#addtocart')
     const likeelement = carditem.querySelector('.like')

     
     desc.classList.add('descriptionview');
    
     likeelement.classList.add('togglelike');


     price.classList.add('center');
     price.style.marginTop="3%"

     title.classList.add('center');
     
     
     img.classList.add('toggleimg');
    


     button1.classList.add('togglebutton');
     button2.classList.add('togglebutton');
     
     div.appendChild(title);
     div.appendChild(img);
     div.appendChild(desc);
     div.appendChild(price); 
     div.appendChild(button1);
     div.appendChild(button2);
     div.appendChild(likeelement);



    //  Cancel Large view

    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('click',function(){
        body.style.pointerEvents='auto';
        div.style.display="none";
        carditem.style.display="block";
        body.style.backgroundColor="white";
        body.style.opacity="1";
        
        button1.classList.remove('togglebutton');
     button2.classList.remove('togglebutton');

     img.classList.remove('toggleimg');

    //  price.classList.remove('center');
     price.style.marginTop='0';
     console.log(price);

     likeelement.classList.remove('togglelike');

      desc.classList.remove('descriptionview');
      desc.classList.add('description');
    
     carditem.appendChild(title);
     carditem.appendChild(img);
     carditem.appendChild(desc);
     carditem.appendChild(price); 
     carditem.appendChild(button1);
     carditem.appendChild(button2);
     carditem.appendChild(likeelement);
            

    })
        
    })
})

// See All t-shirts dom

const seeAll = document.querySelectorAll('.seeall');
seeAll.forEach(seeItem=>{

    seeItem.addEventListener('click',function(){
        console.log(seeItem.parentElement.id);
        window.location.href = seeItem.parentElement.id+".html";
    })
     console.log(seeItem.value);
})





   
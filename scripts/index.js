const menu= document.getElementById('mob-menu')

document.getElementById('open-mob-menu').onclick=()=>{
   menu.classList.add('mob-menu--open')
}

document.getElementById('mob-menu__close').onclick=()=>{
   menu.classList.remove('mob-menu--open')
}

const dropdowns= document.querySelectorAll('.dropdown');

dropdowns.forEach(item=>{
   item.querySelector(".dropdown__title").onclick =(event)=>{
      event.stopPropagation()
      if(item.className.includes("dropdown--open")){
               item.classList.remove('dropdown--open');
      }else 
         item.classList.add("dropdown--open")      
   }
})
document.body.onclick = function(event) {
   dropdowns.forEach(item=>{
   if (event.target!=item && window.innerWidth > 992) {
      item.classList.remove('dropdown--open');
      console.log('close');
      
   } 
})
}
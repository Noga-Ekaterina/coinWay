const aside = document.querySelector('#aside');

document.querySelector("#aside-btn").onclick =(event)=>{
   event.stopPropagation()
   if(aside.className.includes("api-body__aside--open")){
            aside.classList.remove('api-body__aside--open');
   }else 
      aside.classList.add("api-body__aside--open")      
}
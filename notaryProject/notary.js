//navbar buttons
const contactNav =document.querySelector("#contactNav")
const servicesNav=document.querySelector("#servicesNav")
//contact div
const contact=document.querySelector("#contact")
//queryselectoralls
const allService =document.querySelectorAll(".service")
const allSubservice=document.querySelectorAll(".subservice")



//services to contact
contactNav.addEventListener("click", () =>{
    allService.forEach((jolo)=>{
        jolo.classList.add("hidden")   
    });    
        contact.classList.remove("hidden")   
  });

//contact to services and services in general 
servicesNav.addEventListener("click", () =>{
    allService.forEach((jolo)=>{
        jolo.classList.remove("hidden")   
    });  
    allSubservice.forEach((jolo)=>{
        jolo.classList.add("hidden")   
    });  
    contact.classList.add("hidden")
  });




//general to power of attorny subservices 
const powerOfAttorney = document.querySelector("#powerOfAttorney");
const allPowerOfAttorney=document.querySelectorAll(".powerOfAttorney")
powerOfAttorney.addEventListener("click", () =>{
    allService.forEach((jolo)=>{
        jolo.classList.add("hidden")   
    });  
    allPowerOfAttorney.forEach((jolo)=>{
        jolo.classList.remove("hidden")   
    });  
    contact.classList.add("hidden")
  });




//general to online power of attorny subservices 
  const onlinePowerOfAttorney = document.querySelector("#onlinePowerOfAttorney");
  const allOnlinePowerOfAttorney=document.querySelectorAll(".onlinePowerOfAttorney")
  onlinePowerOfAttorney.addEventListener("click", () =>{
    allService.forEach((jolo)=>{
        jolo.classList.add("hidden")   
    });  
    allOnlinePowerOfAttorney.forEach((jolo)=>{
        jolo.classList.remove("hidden")   
    });  
    contact.classList.add("hidden")
  });


  const declaredPowerOfAttorney =document.querySelector("#declaredPowerOfAttorney")
  const declaredPowerOfAttorneyText =document.querySelector("#declaredPowerOfAttorneyText")

  declaredPowerOfAttorney.addEventListener("click", () =>{
    allService.forEach((jolo)=>{
        jolo.classList.add("hidden")   
    });    
    declaredPowerOfAttorneyText.classList.remove("hidden")   ;  
    contact.classList.add("hidden")
  });
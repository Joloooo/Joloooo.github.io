//navbar buttons
const contactNav =document.querySelector("#contactNav")
const servicesNav=document.querySelector("#servicesNav")
//contact div
const contact=document.querySelector("#contact")
//main queryselectoralls
const allService =document.querySelectorAll(".service")
const allSubservice=document.querySelectorAll(".subservice")
const allSelectors=document.querySelectorAll(".selector")


// Select the search bar
const searchBar = document.querySelector("#searchBar");

// Add event listener to detect input in the search bar
searchBar.addEventListener("input", () => {
  
  // Iterate over each element in allSelectors
  allSelectors.forEach((jolo) => {
    // Check if the element's text content includes the search bar's value
    if (jolo.textContent.toLowerCase().includes(searchBar.value.toLowerCase())) {
      // If it matches, remove the "hidden" class
      jolo.classList.remove("hidden");
    } else {
      // If it doesn't match, add the "hidden" class
      jolo.classList.add("hidden");
    }
  });
});












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


// Linking undeclaredPowerOfAttorney to undeclaredPowerOfElectronicAttorneyText
const undeclaredPowerOfAttorney = document.querySelector("#undeclaredPowerOfAttorney");
const undeclaredPowerOfAttorneyText = document.querySelector("#undeclaredPowerOfAttorneyText");
undeclaredPowerOfAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    undeclaredPowerOfAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking realEstatePowerOfAttorney to realEstatePowerOfElectronicAttorneyText
const realEstatePowerOfAttorney = document.querySelector("#realEstatePowerOfAttorney");
const realEstatePowerOfAttorneyText = document.querySelector("#realEstatePowerOfAttorneyText");
realEstatePowerOfAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    realEstatePowerOfAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking lawyerPowerOfAttorney to lawyerPowerOfElectronicAttorneyText
const lawyerPowerOfAttorney = document.querySelector("#lawyerPowerOfAttorney");
const lawyerPowerOfAttorneyText = document.querySelector("#lawyerPowerOfAttorneyText");
lawyerPowerOfAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    lawyerPowerOfAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});


// Linking bankPowerOfAttorney to bankPowerOfElectronicAttorneyText
const bankPowerOfAttorney = document.querySelector("#bankPowerOfAttorney");
const bankPowerOfAttorneyText = document.querySelector("#bankPowerOfAttorneyText");
bankPowerOfAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    bankPowerOfAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking declaredPowerOfElectronicAttorney to declaredPowerOfElectronicAttorneyText
const declaredPowerOfElectronicAttorney = document.querySelector("#declaredPowerOfElectronicAttorney");
const declaredPowerOfElectronicAttorneyText = document.querySelector("#declaredPowerOfElectronicAttorneyText");
declaredPowerOfElectronicAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    declaredPowerOfElectronicAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking undeclaredPowerOfElectronicAttorney to undeclaredPowerOfElectronicAttorneyText
const undeclaredPowerOfElectronicAttorney = document.querySelector("#undeclaredPowerOfElectronicAttorney");
const undeclaredPowerOfElectronicAttorneyText = document.querySelector("#undeclaredPowerOfElectronicAttorneyText");
undeclaredPowerOfElectronicAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    undeclaredPowerOfElectronicAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking realEstatePowerOfElectronicAttorney to realEstatePowerOfElectronicAttorneyText
const realEstatePowerOfElectronicAttorney = document.querySelector("#realEstatePowerOfElectronicAttorney");
const realEstatePowerOfElectronicAttorneyText = document.querySelector("#realEstatePowerOfElectronicAttorneyText");
realEstatePowerOfElectronicAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    realEstatePowerOfElectronicAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});

// Linking lawyerPowerOfElectronicAttorney to lawyerPowerOfElectronicAttorneyText
const lawyerPowerOfElectronicAttorney = document.querySelector("#lawyerPowerOfElectronicAttorney");
const lawyerPowerOfElectronicAttorneyText = document.querySelector("#lawyerPowerOfElectronicAttorneyText");
lawyerPowerOfElectronicAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    lawyerPowerOfElectronicAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});


// Linking bankPowerOfElectronicAttorney to bankPowerOfElectronicAttorneyText
const bankPowerOfElectronicAttorney = document.querySelector("#bankPowerOfElectronicAttorney");
const bankPowerOfElectronicAttorneyText = document.querySelector("#bankPowerOfElectronicAttorneyText");
bankPowerOfElectronicAttorney.addEventListener("click", () => {
    allService.forEach((jolo) => {
        jolo.classList.add("hidden");
    });
    bankPowerOfElectronicAttorneyText.classList.remove("hidden");
    contact.classList.add("hidden");
});


























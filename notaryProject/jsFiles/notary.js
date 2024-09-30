

// Initialize EmailJS SDK
(function () {
  emailjs.init("DkDzsgry6J4fnQBFI");
})();

import servicesData from './data.js'





// Function to update URL
function updateURL(queryString) {
  const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${queryString}`;
  history.pushState({ path: newURL }, '', newURL);
}

///// Function to handle URL query parameters
function handleQueryParameters() {
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get('service');
  const subserviceId = params.get('subservice');
  const action = params.get('action');

  if (serviceId) {
    const selectedService = servicesData.find(service => service.id === serviceId);
    if (selectedService) {
      if (subserviceId) {
        const selectedSubservice = selectedService.subservices.find(subservice => subservice.id === subserviceId);
        if (selectedSubservice) {
          if (action === 'registration') {
            renderRegistrationForm(selectedSubservice);
          } else {
            renderDescription(selectedSubservice);
          }
        }
      } else {
        renderSubservices(selectedService);
      }
    }
  } else {
    renderMainServices();
  }
}

// Listen for the 'popstate' event to handle browser back/forward navigation
window.addEventListener('popstate', () => {
  handleQueryParameters();
});

// Initialize the page with main services or handle URL parameters to maintain state
handleQueryParameters();





// Function to render main services
function renderMainServices() {
    const main = document.querySelector("main");
    main.innerHTML = ""; 
  
    servicesData.forEach((service) => {
      const serviceElement = document.createElement("p");
      serviceElement.classList.add("service", "roundbox", "selector");
      serviceElement.textContent = service.name;
      serviceElement.addEventListener("click", () => {
        updateURL(`service=${service.id}`);
        renderSubservices(service);
      });
      main.appendChild(serviceElement);
    });
  }
  
  // Function to render subservices
  function renderSubservices(service) {
    const main = document.querySelector("main");
    main.innerHTML = "";
  
    service.subservices.forEach((subservice) => {
      const subserviceElement = document.createElement("p");
      subserviceElement.classList.add("subservice", "roundbox", "selector");
      subserviceElement.textContent = subservice.name;
      subserviceElement.addEventListener("click", () => {
        updateURL(`service=${service.id}&subservice=${subservice.id}`);
        renderDescription(subservice);
      });
      main.appendChild(subserviceElement);
    });
  }
  
  // Function to render descriptions with the 'Online Registration' button
  function renderDescription(subservice) {
    const main = document.querySelector("main");
    main.innerHTML = `
      <div class="textbox">
        ${subservice.description}
        <button id="onlineRegistration">ონლაინ რეგისტრაცია</button>
      </div>
    `;
  
    // Add event listener for the "Online Registration" button
    document.querySelector("#onlineRegistration").addEventListener("click", () => {
      updateURL(`service=${subservice.serviceId}&subservice=${subservice.id}&action=registration`);
      renderRegistrationForm(subservice);
    });
  }
  // Function to render the registration form
// Function to render the registration form
function renderRegistrationForm(subservice) {
  const main = document.querySelector("main");

  // Wrap the form content in a single div
  let formHTML = `
    <div id="registrationContainer">
      <h2>ონლაინ რეგისტრაცია</h2>
      <h3>${subservice.name}</h3>
      <form id="registrationForm">
        <ol>
  `;

  // Add list items with input fields from the registration data
  subservice.registration.formFields.forEach((field, index) => {
    if (field.elementType === "input") {
      // Render input fields
      formHTML += `
        <li>${field.label}: <input type="${field.type}" id="input-${index}" name="input-${index}" required></li>
      `;
    } else if (field.elementType === "h3") {
      // Render h3 heading
      formHTML += `<h3>${field.label}</h3>`;
    } else if (field.elementType === "h4") {
      // Render h4 heading
      formHTML += `<h4>${field.label}</h4>`;
    }
  });

  formHTML += `
        </ol>
        <button type="submit">ონლაინ რეგისტრაციის დასრულება</button>
      </form>
    </div>
  `;

  main.innerHTML = formHTML;

  // Add event listener for form submission
  document.querySelector("#registrationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail(subservice.name, subservice.registration.formFields);
  });
}
  
// Function to send email using EmailJS
function sendEmail(subserviceName, formFields) {
  const subject = subserviceName;
  let message = "";

  // Collect data from input fields based on registration form fields
  formFields.forEach((field, index) => {
      const userInput = document.querySelector(`#input-${index}`).value;
      message += `${field.label}: ${userInput}\n`;
  });

  emailjs
      .send("service_mqrn02q", "template_ID", {
          subject: subject,
          message: message,
      })
      .then((response) => {
          alert("Registration sent successfully!");
          console.log("Email sent:", response.status, response.text);
      })
      .catch((error) => {
          alert("An error occurred while sending registration.");
          console.error("Email sending error:", error);
      });
}

  


// Event listeners for menu navigation
const contactNav = document.querySelector("#contactNav");
contactNav.addEventListener("click", () => {
    updateURL("section=contact");
    showContactInfo();
});

// Reset to main services when clicking "Services"
const servicesNav = document.querySelector("#servicesNav");
servicesNav.addEventListener("click", () => {
    updateURL(""); // Clears the URL to default
    renderMainServices();
});

// Function to display the contact information
function showContactInfo() {
    const main = document.querySelector("main");
    main.innerHTML = `
        <div id="contact">
            <div id="textContactDiv">
                <h2>დაგვიკავშირდით სამუშაო საათებში</h2>
                <i class="fa fa-phone" aria-hidden="true"><span>+995-551-178-118</span></i>
                <i class="fa fa-envelope" aria-hidden="true"><span>mziaanaarsenashvili@gmail.com</span></i>
                <i class="fa fa-location-arrow" aria-hidden="true"><span>ვაჟა ფშაველას N90 (ვაჟა ფშაველას და უნივერსიტეტის მეტროს შორის. რესტორან შუა-ქალაქის გვერდით)</span></i> 
            </div>
            <a href='https://www.google.com/maps/place/...'><img id="contactImage" src="images/contact_screen.png" alt="location"></a>
        </div>`;
}


////////////// imported searchbar
import * as searchBarModule from './searchBar.js';
searchBarModule.setupSearchBarListener(searchBar, servicesData, renderMainServices, renderSubservices, renderDescription);
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
      console.log(`Rendering input field with ID: input-${index}`); // Debug statement
      formHTML += `<li>${field.label}: <input type="${field.type}" id="input-${index}" name="input-${index}" required></li>`;
    } else if (field.elementType === "h3") {
      formHTML += `<h3>${field.label}</h3>`;
    } else if (field.elementType === "h4") {
      formHTML += `<h4>${field.label}</h4>`;
    }
  });

  formHTML += `
        </ol>
        <button id="finalSubmit" type="submit">ონლაინ რეგისტრაციის დასრულება</button>
      </form>
    </div>
  `;

  main.innerHTML = formHTML;

  // Attach the event listener for the "finalSubmit" button
  document.querySelector("#registrationForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    sendEmail(subservice.name, subservice.registration.formFields);    
  });
}




// Updated sendEmail function to handle non-input elements
function sendEmail(subserviceName, formFields) {
  console.log("Form Fields Data:", formFields); // Log formFields for debugging
  let message = ""; // Initialize an empty message string
  let missingField = false; // Flag to track missing fields

  // Collect data from all input fields in the form
  formFields.forEach((field, index) => {
    // Skip non-input elements (h3, h4, etc.)
    if (field.elementType !== "input") {
      return; // Continue to the next element
    }

    const userInputElement = document.querySelector(`#input-${index}`);

    // Check if the input element exists
    if (userInputElement) {
      const userInput = userInputElement.value;
      message += `${field.label}: ${userInput}\n`; // Build the message string
    } else {
      console.error(`Input element with ID #input-${index} not found. Expected label: ${field.label}`);
      missingField = true; // Set flag if an input element is missing
    }
  });

  // If any field was missing, alert the user and stop the function
  if (missingField) {
    alert("One or more fields are missing or incorrectly rendered. Please try again.");
    return;
  }

  // Check if the message has content
  if (message.trim() === "") {
    alert("Form is incomplete. Please fill in all required fields.");
    return;
  }

  // Log the message to ensure it is constructed correctly
  console.log("Message to be sent:", message);

  // Send the email using EmailJS
  emailjs.send("service_mqrn02q", "template_ho8b34i", {
    message: message, // Pass the entire message
    to_name: subserviceName // Adjust this if you have more template variables
  })
  .then((response) => {
    alert("რეგისტრაცია დასრულდა წარმატებით");
    console.log("Email sent:", response.status, response.text);
  })
  .catch((error) => {
    console.error("სამწუხაროდ სისტემური პრობლემაა. ბოდიშს გიხდით დისკომფორტისთვის", error);
    alert("Failed to send registration. Please try again later.");
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
            <a href='https://www.google.com/maps/place/%E1%83%A1%E1%83%90%E1%83%9C%E1%83%9D%E1%83%A2%E1%83%90%E1%83%A0%E1%83%9D+%E1%83%91%E1%83%98%E1%83%A3%E1%83%A0%E1%83%9D+%E1%83%9C%E1%83%9D%E1%83%A2%E1%83%90%E1%83%A0%E1%83%98%E1%83%A3%E1%83%A1%E1%83%98+%E1%83%9B%E1%83%96%E1%83%98%E1%83%90+%E1%83%90%E1%83%A0%E1%83%A1%E1%83%94%E1%83%9C%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98/@41.7231622,44.7227097,17z/data=!3m1!4b1!4m6!3m5!1s0x4044734a881e52d3:0x31775f7fd3910322!8m2!3d41.7231622!4d44.7252846!16s%2Fg%2F11rc1z2520?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'><img id="contactImage" src="images/contact_screen.png" alt="location"></a>
        </div>`;
}

////////////// imported searchbar
import * as searchBarModule from './searchBar.js';
searchBarModule.setupSearchBarListener(searchBar, servicesData, renderMainServices, renderSubservices, renderDescription);
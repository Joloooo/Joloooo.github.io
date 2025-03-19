// Define the services data as an array of objects with all services and subservices
const servicesDataEnglish = [
    {
      id: "powerOfAttorney",
      name: "Power of Attorney",
      subservices: [
        {
          id: "declaredPowerOfAttorney",
          name: "Power of Attorney for a Declared Car or Motorcycle",
          description: `<h2>Power of Attorney for a Declared Car or Motorcycle</h2>
            <h3>Documents required for the agreement:</h3>
            <ol>
                <li>ID card, driver's license, or passport of the grantor (must be valid, and the person in the picture should match)</li>
                <li>Vehicle’s technical passport (must be valid)</li> 
                <li>The presence of the grantee is not required</li>  
            </ol>
            <h3>Agreement cost: 25 GEL</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Who are you granting the Power of Attorney to? (Grantee)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Car or Motorcycle" },
              { elementType: "input", label: "Make", type: "text", value: "" },
              { elementType: "input", label: "Model", type: "text", value: "" },
              { elementType: "input", label: "Year of Manufacture", type: "number", value: "" },
              { elementType: "input", label: "Identification Number (VIN Code)", type: "text", value: "" },
              { elementType: "input", label: "Registration Certificate Number (as indicated in the technical passport, e.g., AM8020140)", type: "text", value: "" },
              { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
            ]
          }
        },
        {
          id: "undeclaredPowerOfAttorney",
          name: "Power of Attorney for an Undeclared Car or Motorcycle",
          description: `<h2>Power of Attorney for an Undeclared Car or Motorcycle</h2>
            <h3>Documents required for the agreement:</h3>
            <ol>
                <li>ID card, driver's license, or passport of the grantor (must be valid, and the person in the picture should match)</li>
                <li>A contract or other type of document that confirms vehicle ownership</li> 
                <li>The presence of the grantee is not required</li>  
            </ol>
            <h3>Agreement cost: 25 GEL</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Who are you granting the Power of Attorney to? (Grantee)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Car or Motorcycle" },
              { elementType: "input", label: "Make", type: "text", value: "" },
              { elementType: "input", label: "Model", type: "text", value: "" },
              { elementType: "input", label: "Year of Manufacture", type: "number", value: "" },
              { elementType: "input", label: "Identification Number (VIN Code)", type: "text", value: "" },
              { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
            ]
          }
        },
        {
          id: "realEstatePowerOfAttorney",
          name: "Power of Attorney for Real Estate",
          description: `<h2>Power of Attorney for Real Estate</h2>
            <h3>Documents required for the agreement:</h3>
            <ol>
                <li>ID card, driver's license, or passport of the grantor</li>
                <li>The cadastral code of the real estate where the grantor is listed as the owner</li> 
                <li>The presence of the grantee is not required</li>  
            </ol>
            <h3>Agreement cost: 25 GEL</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Who are you granting the Power of Attorney to? (Grantee)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Real Estate" },
              { elementType: "input", label: "Address", type: "text", value: "" },
              { elementType: "input", label: "Size (in sq. meters)", type: "number", value: "" },
              { elementType: "input", label: "Cadastral Code", type: "text", value: "" },
              { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
            ]
          }
        },
        {
          id: "lawyerPowerOfAttorney",
          name: "Power of Attorney for a Lawyer",
          description: `<h2>Power of Attorney for a Lawyer</h2>
            <h3>Documents required for the agreement:</h3>
            <ol>
                <li>ID card, driver's license, or passport of the grantor</li>
                <li>The grantor must know the lawyer's personal details: ID number, first name, last name</li> 
                <li>The lawyer's presence is not required</li>  
            </ol>
            <h3>Agreement cost: 25 GEL</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Lawyer" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
            ]
          }
        }
      ]
    },
    {
      id: "onlinePowerOfAttorney",
      name: "Online Power of Attorney (via Skype, Messenger, WhatsApp, etc.)",
      subservices: [
        {
          id: "declaredPowerOfElectronicAttorney",
          name: "Online Power of Attorney for a Declared Car or Motorcycle",
          description: `<h2>Online Power of Attorney for a Declared Car or Motorcycle</h2>
            <h3>Documents required for the agreement:</h3>
            <ol> 
                <li>The grantor must have their ID card, driver's license, or passport on hand during the call (must be valid)</li>
                <li>Vehicle's technical passport</li> 
                <li>Two witnesses must come to the notary office, one of whom should not be a relative of the grantor</li>
                <li>Both witnesses must present a valid ID card</li>                 
                <li>The grantor must provide the names of the witnesses during the call. Otherwise, the Power of Attorney cannot be processed.</li>
            </ol>
            <h3>Agreement cost: 65 GEL</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "To whom are you giving the Power of Attorney? (Grantee)" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the First Witness" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Second Witness" },
              { elementType: "input", label: "First name, Last name", type: "text", value: "" },
              { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
              { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
              { elementType: "input", label: "Date of birth", type: "date", value: "" },
              { elementType: "h4", label: "Information about the Car or Motorcycle" },
              { elementType: "input", label: "Make", type: "text", value: "" },
              { elementType: "input", label: "Model", type: "text", value: "" },
              { elementType: "input", label: "Year of Manufacture", type: "number", value: "" },
              { elementType: "input", label: "Identification Number (VIN Code)", type: "text", value: "" },
              { elementType: "input", label: "Registration Certificate Number (as indicated in the technical passport, e.g., AM8020140)", type: "text", value: "" },
              { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
            ]
          }
        },
        {
            id: "undeclaredPowerOfElectronicAttorney",
            name: "Online Power of Attorney for an Undeclared Car or Motorcycle",
            description: `<h2>Online Power of Attorney for an Undeclared Car or Motorcycle</h2>
                <h3>Documents required for the agreement:</h3>
                <ol> 
                    <li>The grantor must have their ID card, driver's license, or passport (must be valid)</li>
                    <li>A contract or other document proving vehicle ownership</li> 
                    <li>Two witnesses must come to the notary office</li>  
                </ol>
                <h3>Agreement cost: 65 GEL</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "To whom are you giving the Power of Attorney? (Grantee)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the First Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Second Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Car or Motorcycle" },
                { elementType: "input", label: "Make", type: "text", value: "" },
                { elementType: "input", label: "Model", type: "text", value: "" },
                { elementType: "input", label: "Year of Manufacture", type: "number", value: "" },
                { elementType: "input", label: "Identification Number (VIN Code)", type: "text", value: "" },
                { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
              ]
            }
          },
          {
            id: "realEstatePowerOfElectronicAttorney",
            name: "Online Power of Attorney for Real Estate",
            description: `<h2>Online Power of Attorney for Real Estate</h2>
                <h3>Documents required for the agreement:</h3>
                <ol> 
                    <li>The grantor's ID card, driver's license, or passport</li>
                    <li>The cadastral code of the real estate</li> 
                    <li>At least two witnesses must come to the notary office</li>  
                </ol>
                <h3>Agreement cost: 65 GEL</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "To whom are you giving the Power of Attorney? (Grantee)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the First Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Second Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Real Estate" },
                { elementType: "input", label: "Address", type: "text", value: "" },
                { elementType: "input", label: "Size (in sq. meters)", type: "number", value: "" },
                { elementType: "input", label: "Cadastral Code", type: "text", value: "" },
                { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
              ]
            }
          },
          {
            id: "lawyerPowerOfElectronicAttorney",
            name: "Online Power of Attorney for a Lawyer",
            description: `<h2>Online Power of Attorney for a Lawyer</h2>
                <h3>Documents required for the agreement:</h3>
                <ol> 
                    <li>The grantor's ID card, driver's license, or passport</li>
                    <li>The lawyer's details: personal ID number, first name, last name</li> 
                    <li>At least two witnesses must come to the notary office</li>  
                </ol>
                <h3>Agreement cost: 65 GEL</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "To whom are you giving the Power of Attorney? (Lawyer’s details)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the First Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Second Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
              ]
            }
          },
          {
            id: "bankPowerOfElectronicAttorney",
            name: "Online Power of Attorney for a Bank",
            description: `<h2>Online Power of Attorney for a Bank</h2>
                <h3>Documents required for the agreement:</h3>
                <ol> 
                    <li>The grantor's ID card, driver's license, or passport</li>
                    <li>The bank's details</li> 
                    <li>At least two witnesses must come to the notary office</li>  
                </ol>
                <h3>Agreement cost: 65 GEL</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Bank Details" },
                { elementType: "input", label: "Name of the Bank", type: "text", value: "" },
                { elementType: "input", label: "Account Number", type: "text", value: "" },
                { elementType: "input", label: "Swift/BIC Code", type: "text", value: "" },
                { elementType: "input", label: "Bank Address", type: "text", value: "" },
                { elementType: "h4", label: "Information about the First Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Second Witness" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address (if abroad, provide foreign address)", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" }
              ]
            }
          }
          
      ]
    },
    {
        id: "rent",
        name: "Rent",
        subservices: [
          {
            id: "houseRent",
            name: "Real Estate Lease",
            description: `<h2>Real Estate Lease</h2>
              <h3>Documents required for the agreement:</h3>
              <ol> 
                  <li>The lessor and lessee must be present with their valid ID or passport</li>
                  <li>The lessor must know the cadastral code of the property, and it should be registered in the lessor's name</li>
              </ol>
              <h3>Cost: Depends on the specific agreement, average price for real estate is 150 GEL</h3>
              <h3>If a translator is involved, an additional 120 GEL is typically charged</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is renting out the property? (Lessor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Who is renting the property? (Lessee)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Property" },
                { elementType: "input", label: "Address", type: "text", value: "" },
                { elementType: "input", label: "Area Size (in sq. meters)", type: "number", value: "" },
                { elementType: "input", label: "Cadastral Code", type: "text", value: "" },
                { elementType: "input", label: "For how long is the property being rented? (e.g., 5 days/1 month/1 year/indefinitely)", type: "text", value: "" },
                { elementType: "input", label: "Which day of the month should the payment be made?", type: "text", value: "" },
                { elementType: "input", label: "Does the lessee have permission to sublease the property?", type: "checkbox", value: "" }
              ]
            }
          },
          {
            id: "carRent",
            name: "Car Rental",
            description: `<h2>Car Rental</h2>
              <h3>Documents required for the agreement:</h3>
              <ol> 
                  <li>The lessor and lessee must be present with their valid ID or passport</li>
                  <li>The lessor must also have a valid vehicle technical passport</li>
              </ol>
              <h3>Cost: Depends on the specific agreement, average cost is 150 GEL</h3>
              <h3>If a translator is involved, an additional 120 GEL is typically charged</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is renting out the car? (Lessor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Who is renting the car? (Lessee)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Vehicle" },
                { elementType: "input", label: "Make", type: "text", value: "" },
                { elementType: "input", label: "Model", type: "text", value: "" },
                { elementType: "input", label: "Year of Manufacture", type: "number", value: "" },
                { elementType: "input", label: "Identification Number (VIN Code)", type: "text", value: "" },
                { elementType: "input", label: "Registration Certificate Number (as indicated in the technical passport, e.g., AM8020140)", type: "text", value: "" },
                { elementType: "h4", label: "Additional Terms of the Agreement" },
                { elementType: "input", label: "For how long is the car being rented? (e.g., 5 days/1 month/1 year/indefinitely)", type: "text", value: "" },
                { elementType: "input", label: "Which day of the month should the payment be made?", type: "text", value: "" },
                { elementType: "input", label: "Does the lessee have permission to sublease the car?", type: "checkbox", value: "" }
              ]
            }
          }
        ]
      },
      {
        id: "translation",
        name: "Translation",
        subservices: [
          {
            id: "passportTranslation",
            name: "Passport Translation",
            description: `<h2>Passport Translation</h2>
              <h3>Required information:</h3>
              <p>The cost depends on the translator's fee, approximately 25 GEL.</p>`,
            registration: {
              formFields: [
                { elementType: "input", label: "Upload the document", type: "file", value: "" },
                { elementType: "h4", label: "Note: The original passport must be presented when collecting the translated document to verify its validity." }
              ]
            }
          },
          {
            id: "birthCertificateTranslation",
            name: "Birth Certificate Translation",
            description: `<h2>Birth Certificate Translation</h2>
              <h3>Required information:</h3>
              <p>The cost depends on the translator's fee, approximately 25 GEL.</p>`,
            registration: {
              formFields: [
                { elementType: "input", label: "Upload the document", type: "file", value: "" },
                { elementType: "h4", label: "Note: The original birth certificate must be presented when collecting the translated document to verify its validity." }
              ]
            }
          },
          {
            id: "rentTranslation",
            name: "Rental Agreement Translation",
            description: `<h2>Rental Agreement Translation</h2>
              <h3>Required information:</h3>
              <p>The cost depends on the translator's fee.</p>`,
            registration: {
              formFields: [
                { elementType: "input", label: "Upload the document", type: "file", value: "" },             
                { elementType: "h4", label: "The cost will be determined after the document is evaluated by the translator." }
              ]
            }
          },
          {
            id: "attorneyTranslation",
            name: "Power of Attorney with Translator's Involvement",
            description: `<h2>Power of Attorney with Translator's Involvement</h2>
                 <h3>Required information:</h3>
              <p>The cost depends on the translator's fee.</p>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Who is issuing the Power of Attorney? (Grantor)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Who are you granting the Power of Attorney to? (Grantee)" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" },
                { elementType: "h4", label: "Information about the Power of Attorney" },              
                { elementType: "input", label: "For how long is the Power of Attorney granted? (e.g., for 5 days/1 month/1 year/indefinitely)", type: "text", value: "" },
                { elementType: "textarea", label: "Details regarding the purpose of the Power of Attorney", type: "text", value: "" }
              ]
            }
          }
        ]
      },
      {
        id: "signatureAuthentication",
        name: "Signature Authentication",
        subservices: [
          {
            id: "documentAuthentication",
            name: "Signature Authentication on a Document",
            description: `<h2>Signature Authentication on a Document</h2>
             <h3>Required information:</h3>
              <p>The person signing the document must appear in person with a valid ID, which is not expired or suspended.</p>  
               <p>Cost: The fee per signature is determined based on the number of pages:
               <ol>
                <li>1 page: 6 GEL</li>
                <li>2-10 pages: 4 GEL per page</li>
                <li>10-30 pages: 3 GEL per page</li>
              </ol> 
              </p>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Details of the person signing the document" },
                { elementType: "input", label: "First name, Last name", type: "text", value: "" },
                { elementType: "input", label: "Current address", type: "text", value: "" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text", value: "" },
                { elementType: "input", label: "Date of birth", type: "date", value: "" }
              ]
            }
          }
        ]
      },
      {
        id: "inheritance",
        name: "Inheritance",
        subservices: [
          {
            id: "inheritanceDocuments",
            name: "Inheritance Issuance within 6 Months after Death",
            description: `<h2>Inheritance Issuance within 6 Months after Death</h2>
                        <h3>Documents required for inheritance:</h3>
              <ol>
                  <li>Death certificate - issued by the Public Service Hall</li>
                  <li>Document proving kinship: (e.g., the decedent's marriage certificate, birth certificate indicating parents) – issued by the Public Service Hall</li>
                  <li>Information card (confirming the decedent's property in Georgia) - issued by the Public Service Hall</li>
                  <li>Certificate regarding the presence or absence of a will - issued by the Public Service Hall</li>
              </ol>
              <h3>After 6 months from the person's death, the notary will issue an inheritance certificate, which allows the transfer of the decedent's property.</h3>
              <h3>The agreement cost depends on the property's value:</h3>
              <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Transaction Value</th>
                    <th>Fee Amount in GEL (percentage of transaction value)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Up to 500 GEL</td><td>3%</td></tr>
                  <tr><td>2</td><td>501 to 1,000 GEL</td><td>15 GEL + 2.5% for the amount over 500 GEL</td></tr>
                  <tr><td>3</td><td>1,001 to 2,000 GEL</td><td>27.5 GEL + 1.5% for the amount over 1,000 GEL</td></tr>
                  <tr><td>4</td><td>2,001 to 3,000 GEL</td><td>42.5 GEL + 1% for the amount over 2,000 GEL</td></tr>
                  <tr><td>5</td><td>3,001 to 5,000 GEL</td><td>52.5 GEL + 0.5% for the amount over 3,000 GEL</td></tr>
                  <tr><td>6</td><td>5,001 to 20,000 GEL</td><td>62.5 GEL + 0.4% for the amount over 5,000 GEL</td></tr>
                  <tr><td>7</td><td>20,001 to 100,000 GEL</td><td>122.5 GEL + 0.3% for the amount over 20,000 GEL</td></tr>
                  <tr><td>8</td><td>100,001 to 500,000 GEL</td><td>362.5 GEL + 0.2% for the amount over 100,000 GEL</td></tr>
                  <tr><td>9</td><td>500,001 to 1,000,000 GEL</td><td>1,162.5 GEL + 0.1% for the amount over 500,000 GEL</td></tr>
                  <tr><td>10</td><td>Over 1,000,000 GEL</td><td>1,662.5 GEL + 0.05% for the amount over 1,000,000 GEL</td></tr>
                </tbody>
              </table>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Registration for inheritance is not possible online; please visit the notary office in person." }
              ]
            }
          },
          {
            id: "inheritanceAfter6Months",
            name: "Inheritance Issuance after 6 Months from Death (Delayed Inheritance)",
            description: `<h2>Inheritance Issuance after 6 Months from Death (Delayed Inheritance)</h2>
              <p>Since the legally defined period of 6 months has expired, inheritance with a notary is possible only if you have already taken possession of the property (e.g., you are already residing in a property registered in the decedent's name or have possession of the vehicle registered to the decedent).</p> 
              <p>In the absence of these circumstances, the notary issues a certificate of refusal for inheritance, which must be presented to a court to restore the inheritance period.</p>
              <h3>After restoring the period, the following documents must be presented:</h3>          
              <ol>
                  <li>Death certificate - issued by the Public Service Hall</li>
                  <li>Document proving kinship: (e.g., the decedent's marriage certificate, birth certificate indicating parents) - issued by the Public Service Hall</li>
                  <li>Information card (confirming the decedent's property in Georgia) - issued by the Public Service Hall</li>
                  <li>Certificate regarding the presence or absence of a will - issued by the Public Service Hall</li>
              </ol>
              <h3>After 6 months from the person's death, the notary will issue an inheritance certificate, which allows the transfer of the decedent's property.</h3>
              <h3>The agreement cost depends on the property's value:</h3>
              <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Transaction Value</th>
                    <th>Fee Amount in GEL (percentage of transaction value)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Up to 500 GEL</td><td>3%</td></tr>
                  <tr><td>2</td><td>501 to 1,000 GEL</td><td>15 GEL + 2.5% for the amount over 500 GEL</td></tr>
                  <tr><td>3</td><td>1,001 to 2,000 GEL</td><td>27.5 GEL + 1.5% for the amount over 1,000 GEL</td></tr>
                  <tr><td>4</td><td>2,001 to 3,000 GEL</td><td>42.5 GEL + 1% for the amount over 2,000 GEL</td></tr>
                  <tr><td>5</td><td>3,001 to 5,000 GEL</td><td>52.5 GEL + 0.5% for the amount over 3,000 GEL</td></tr>
                  <tr><td>6</td><td>5,001 to 20,000 GEL</td><td>62.5 GEL + 0.4% for the amount over 5,000 GEL</td></tr>
                  <tr><td>7</td><td>20,001 to 100,000 GEL</td><td>122.5 GEL + 0.3% for the amount over 20,000 GEL</td></tr>
                  <tr><td>8</td><td>100,001 to 500,000 GEL</td><td>362.5 GEL + 0.2% for the amount over 100,000 GEL</td></tr>
                  <tr><td>9</td><td>500,001 to 1,000,000 GEL</td><td>1,162.5 GEL + 0.1% for the amount over 500,000 GEL</td></tr>
                  <tr><td>10</td><td>Over 1,000,000 GEL</td><td>1,662.5 GEL + 0.05% for the amount over 1,000,000 GEL</td></tr>
                </tbody>
              </table>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Registration for inheritance is not possible online; please visit the notary office in person." }
              ]
            }
          }
        ]
      },
      {
        id: "debtRecognition",
        name: "Debt Recognition and Enforcement Document Issuance",
        subservices: [
          {
            id: "debtAgreement",
            name: "Debt Recognition Agreement",
            description: `<h2>Debt Recognition Agreement</h2>
              <p>If someone owes you money, you can formalize a debt recognition agreement with a notary.</p>   
              <p>Advantages of the debt recognition agreement:</p>   
              <p>If the debtor fails to repay the debt within the agreed period, you won't need to go to court. The notary can issue an enforcement document, allowing enforcement against the debtor's assets.</p> 
              <h3>Documents required to enter into the agreement:</h3>
              <ol>
                <li>Both creditor and debtor must appear in person with a valid ID</li>
                <li>The fee is determined by the debt amount based on legal requirements</li>
              </ol>
              <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>When the transaction amount is</th>
                    <th>The fee amount in GEL based on transaction value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Up to 500 GEL</td><td>3%</td></tr>
                  <tr><td>2</td><td>501 to 1,000 GEL</td><td>15 GEL + 2.5% for the amount over 500 GEL</td></tr>
                  <tr><td>3</td><td>1,001 to 2,000 GEL</td><td>27.5 GEL + 1.5% for the amount over 1,000 GEL</td></tr>
                  <tr><td>4</td><td>2,001 to 3,000 GEL</td><td>42.5 GEL + 1% for the amount over 2,000 GEL</td></tr>
                  <tr><td>5</td><td>3,001 to 5,000 GEL</td><td>52.5 GEL + 0.5% for the amount over 3,000 GEL</td></tr>
                  <tr><td>6</td><td>5,001 to 20,000 GEL</td><td>62.5 GEL + 0.4% for the amount over 5,000 GEL</td></tr>
                  <tr><td>7</td><td>20,001 to 100,000 GEL</td><td>122.5 GEL + 0.3% for the amount over 20,000 GEL</td></tr>
                  <tr><td>8</td><td>100,001 to 500,000 GEL</td><td>362.5 GEL + 0.2% for the amount over 100,000 GEL</td></tr>
                  <tr><td>9</td><td>500,001 to 1,000,000 GEL</td><td>1,162.5 GEL + 0.1% for the amount over 500,000 GEL</td></tr>
                  <tr><td>10</td><td>Over 1,000,000 GEL</td><td>1,662.5 GEL + 0.05% for the amount over 1,000,000 GEL</td></tr>
                </tbody>
              </table>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Creditor's Information" },
                { elementType: "input", label: "First name, Last name", type: "text" },
                { elementType: "input", label: "Current address", type: "text" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text" },
                { elementType: "input", label: "Date of birth", type: "date" },
                { elementType: "h4", label: "Debtor's Information" },
                { elementType: "input", label: "First name, Last name", type: "text" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text" },
                { elementType: "input", label: "Date of birth", type: "date" },
                { elementType: "h4", label: "Debt Amount Information" },
                { elementType: "input", label: "Details about the debt repayment terms", type: "text" }
              ]
            }
          },
          {
            id: "executoryDocumentIssuance",
            name: "Issuance of an Enforcement Document",
            description: `<h2>Issuance of an Enforcement Document</h2>
              <p>If you already have a debt recognition agreement and the debtor has violated the terms, you can obtain an enforcement document.</p>
              <p>Cost: Issuance of the enforcement document is 140 GEL. Amendments, cancellations, or issuance of a duplicate enforcement document costs 50 GEL.</p>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Creditor's Information" },
                { elementType: "input", label: "First name, Last name", type: "text" },
                { elementType: "input", label: "Current address", type: "text" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text" },
                { elementType: "input", label: "Date of birth", type: "date" }
              ]
            }
          }
        ]
      },
      {
        id: "copyCertification",
        name: "Copy Certification",
        subservices: [
          {
            id: "certifyCopy",
            name: "Document Copy Certification",
            description: `<h2>Document Copy Certification</h2>
              <p>The notary does not verify the authenticity of the document but only certifies that the copy corresponds to the original document presented.</p>
              <p>Cost: 4 GEL per certified page</p>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "Information about the person requesting the certified copy" },
                { elementType: "input", label: "First name, Last name", type: "text" },
                { elementType: "input", label: "Current address", type: "text" },
                { elementType: "input", label: "Personal ID number or passport number", type: "text" },
                { elementType: "input", label: "Date of birth", type: "date" },
                { elementType: "h4", label: "Document Information" },
                { elementType: "input", label: "How many copies of the document would you like to be certified?", type: "text" },
                { elementType: "input", label: "Upload the document", type: "file" }
              ]
            }
          }
        ]
      }      
];

export default servicesDataEnglish;
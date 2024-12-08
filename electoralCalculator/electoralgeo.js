const dynamicDiv = document.querySelector("#dynamicDiv");
const additiondiv = document.querySelector("#additiondiv");
const valuesDiv = document.querySelector("#valuesDiv");
const resultdiv = document.querySelector("#resultDescription");

// Global variable to store the total sum
let totalSum;

// Create and style tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip'; // Assign the class to the tooltip
tooltip.style.display = 'none';
document.body.appendChild(tooltip);







// Function to update the sum
const updateSum = () => {
  totalSum = 0;
  const inputs = document.querySelectorAll('.percentInput');
  inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value) && value >= 5) {
      totalSum += value;
    }
  });
  return totalSum;
};

// Function to get the total sum
const getTotalSum = () => {
  return totalSum;
};




const updateSeats = () => {
  let totalSeats = 0; // Declare totalSeats locally within the function
  const elements = document.querySelectorAll('.totalSeats');
  
  elements.forEach(element => {
    const value = parseFloat(element.innerText); // Use innerText to get the value from <span>
    if (!isNaN(value)) {
      totalSeats += value; // Sum up the total seats
    }
  });
  
  return totalSeats;
};






const mirrorSeats = () => {
  updateSum(); // Ensure totalSum is updated before calculating

  const dynamicResults = document.querySelectorAll('.descrcolumn');

  dynamicResults.forEach((result, index) => {
    const percentInput = document.querySelector(`#percentInput-${index + 1}`);
    const seatNumber = result.querySelector(`#seatNumber-${index + 1}`);
    const totalSeats = result.querySelector(`#totalSeats-${index + 1}`);
    const gainedSeats = result.querySelector(`#gainedSeats-${index + 1}`);

    const percentValue = parseFloat(percentInput.value);

    if (!isNaN(percentValue)) {
      if (percentValue < 5) {
        seatNumber.innerText = "ვერ გადალახა 5% ბარიერი";
        totalSeats.innerText = "ვერ გადალახა 5% ბარიერი";
        gainedSeats.innerText = "ვერ გადალახა 5% ბარიერი";
      } else if (totalSum > 0 && percentValue > 0) {
        const seatNumberValue = Math.floor((percentValue * 150 / 100).toFixed(2));
        const totalSeatsValue = Math.floor((percentValue * 150 / totalSum).toFixed(2));

        seatNumber.innerText = seatNumberValue;
        totalSeats.innerText = totalSeatsValue;

        // Calculate gained seats based on the difference between seatNumber and totalSeats
        gainedSeats.innerText = (parseFloat(totalSeatsValue) - parseFloat(seatNumberValue));
      }
    }
  });

  // Call updateSeats after the calculations to get the updated total seats
  const total = updateSeats();

  distributeExtraSeats();
};







const distributeExtraSeats = () => {
  let totalSeats = updateSeats();  // Get the current total seats after mirrorSeats
  let extraSeats = 150 - totalSeats;  // Calculate the number of extra seats

  if (extraSeats <= 0 || totalSeats==0) {
    return;  // No extra seats to distribute
  }

  const seatFractions = [];  // To store fractional values and their index
  const totalSeatsElements = document.querySelectorAll('.totalSeats');  // Select all totalSeats elements

  totalSeatsElements.forEach((element, index) => {
    const totalSeatsValue = parseFloat(element.textContent);  // Get the total seats value
    const fraction = totalSeatsValue - Math.floor(totalSeatsValue);  // Get the fractional part

    seatFractions.push({ index, fraction });
  });

  // Sort parties based on the fractional part in descending order
  seatFractions.sort((a, b) => b.fraction - a.fraction);

  // Distribute the extra seats to parties with the highest fractional parts
  let i = 0;
  while (extraSeats > 0 && i < seatFractions.length) {
    const partyIndex = seatFractions[i].index;
    const totalSeatsElement = totalSeatsElements[partyIndex];
    const currentSeats = parseFloat(totalSeatsElement.textContent);
    
    // Increase the total seats for the current party by 1
    totalSeatsElement.textContent = (currentSeats + 1);  // Update the element's textContent

    extraSeats--;  // Reduce the number of extra seats
    i++;  // Move to the next party with the highest fractional part
  }

  // Log the updated total seats after extra seat distribution
  const finalTotalSeats = updateSeats();
  console.log('Final total seats after distributing extra seats:', finalTotalSeats);
};








































// Function to remove the dynamic element if inputs are empty
const removeDynamicElement = (partyInput, percentInput, dynamicElement, resultElement) => {
  if (partyInput.value === "" && percentInput.value === "") {
    valuesDiv.removeChild(dynamicElement);
    resultdiv.removeChild(resultElement);
  }
};

// Function to create dynamic elements and link event listeners
const createdynamic = () => {
  const currentCount = document.querySelectorAll('.dynamicDiv').length + 1;
  
  const newDynamic = document.createElement('div');
  newDynamic.classList.add('dynamicDiv');
  newDynamic.id = `dynamicDiv-${currentCount}`;

  const partyInputID = `partyInput-${currentCount}`;
  const percentInputID = `percentInput-${currentCount}`;
  
  newDynamic.innerHTML = `
    <div id="labels">
      <label id="partyLabel">პარტია</label>
      <label id="percentLabel">პროცენტი (%)</label>
    </div>
    <div id="inputs">
      <input type="text" class="partyInput" id="${partyInputID}">
      <input min="0" class="percentInput" id="${percentInputID}" type="number">
    </div>
  `;

  valuesDiv.appendChild(newDynamic);

  const newresult = document.createElement('p');
  newresult.classList.add('descrcolumn');

  const partyNameID = `partyName-${currentCount}`;
  const seatNumberID = `seatNumber-${currentCount}`;
  const gainedSeatsID = `gainedSeats-${currentCount}`;
  const totalSeatsID = `totalSeats-${currentCount}`;

  newresult.innerHTML = `
    <span id="${partyNameID}" data-party-id="party-${currentCount}"></span>
    <span class="seatNumber" id="${seatNumberID}" data-party-id="party-${currentCount}"></span>
    <span id="${gainedSeatsID}" data-party-id="party-${currentCount}"></span>
    <span class="totalSeats" id="${totalSeatsID}" data-party-id="party-${currentCount}"></span>
  `;
  
  resultdiv.appendChild(newresult);

  // for capturing party names
  const partyInput = document.querySelector(`#${partyInputID}`);
  const partyResultName = document.querySelector(`#${partyNameID}`);

  const mirrorText = () => {
    partyResultName.innerText = partyInput.value;
    removeDynamicElement(partyInput, document.querySelector(`#${percentInputID}`), newDynamic, newresult);
  };

  partyInput.addEventListener('input', mirrorText);

  // for capturing party percentages and seats
  const percentInput = document.querySelector(`#${percentInputID}`);
  percentInput.addEventListener('input', () => {
    mirrorSeats();
    removeDynamicElement(partyInput, percentInput, newDynamic, newresult);
  });

  // Update the semicircle after creating new elements
  updateSemicircle();
};

// Adding event listener to create dynamic elements
additiondiv.addEventListener('click', createdynamic);

// Initial partyNameinput linkage
let partyFirstInputName = document.querySelector('#partyInput-1');
let partyFirstResultName = document.querySelector('#partyName-1');
const initMirrorText = () => {
  partyFirstResultName.innerText = partyFirstInputName.value;
};
partyFirstInputName.addEventListener('input', initMirrorText);

// Ensure the initial static input also triggers the calculation
const firstPercentInput = document.querySelector('#percentInput-1');
firstPercentInput.addEventListener('input', mirrorSeats);

// Function to add data-party-id attribute to static HTML elements
const setupInitialDataAttributes = () => {
  document.querySelector('#partyName-1').setAttribute('data-party-id', 'party-1');
  document.querySelector('#seatNumber-1').setAttribute('data-party-id', 'party-1');
  document.querySelector('#gainedSeats-1').setAttribute('data-party-id', 'party-1');
  document.querySelector('#totalSeats-1').setAttribute('data-party-id', 'party-1');
};

// Initial calculation in case there's already input values
mirrorSeats();

// Function to generate semicircle based on totalCircles
const generateSemicircle = (totalCircles) => {
  const svg = document.getElementById('semicircle');
  svg.innerHTML = ''; // Clear previous circles

  const totalRows = 5;
  const circleRadius = 4; // Radius of each small circle
  const rowHeight = 25; // Vertical distance between rows
  const semicircleRadius = 150;

  // Adjusted number of circles per row to total 150
  const circlesPerRow = [44, 36, 30, 24, 16];

  // Initial black color
  const initialColor = "#000000";

  // Adjust viewBox to ensure no cropping
  const svgWidth = semicircleRadius * 2;
  const svgHeight = semicircleRadius;
  svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  let circleId = 1; // Initialize a counter for unique IDs
  let circlesDrawn = 0; // Track the number of circles drawn

  totalCircles = totalCircles || circlesPerRow.reduce((a, b) => a + b, 0); // If no totalCircles passed, draw all possible circles

  for (let column = 0; column < Math.max(...circlesPerRow); column++) {
      for (let row = 0; row < totalRows; row++) {
          if (column >= circlesPerRow[row]) continue; // Skip if this row has no more circles

          if (circlesDrawn >= totalCircles) return; // Stop if we've drawn enough circles

          const currentRadius = semicircleRadius - (row * rowHeight);
          const angle = Math.PI * (column / (circlesPerRow[row] - 1)); // Angle in radians
          const x = semicircleRadius + currentRadius * Math.cos(angle); // X coordinate
          const y = semicircleRadius - currentRadius * Math.sin(angle); // Y coordinate

          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", x);
          circle.setAttribute("cy", y);
          circle.setAttribute("r", circleRadius);

          circle.setAttribute("fill", initialColor); // Set initial color to black
          circle.setAttribute("id", `circle-${circleId}`); // Assign a unique ID
          circle.setAttribute('data-party-id', `party-${circleId}`); // Assign party ID for linking
          circleId++; // Increment the ID counter

          svg.appendChild(circle);
          circlesDrawn++;
      }
  }
};

// Function to highlight the entire <p> element associated with a party
const highlightPartyElement = (partyId) => {
  // Find the parent <p> element using the data-party-id attribute
  const associatedElement = document.querySelector(`.descrcolumn [data-party-id="${partyId}"]`).parentElement;
  
  // Add highlight to the entire parent <p> element
  if (associatedElement) {
    associatedElement.style.backgroundColor = 'black';
    associatedElement.style.color = 'white';
  }
};

// Function to clear all highlights
const clearAllHighlights = () => {
  // Remove highlight from all parent <p> elements
  document.querySelectorAll('.descrcolumn').forEach(p => {
    p.style.backgroundColor = '';
    p.style.color = '';
  });
};

// Function to color the circles based on the .totalSeats values
const updateCirclesColor = () => {
  const totalSeatsElements = document.querySelectorAll('.totalSeats');
  const circles = document.querySelectorAll('circle');

  // Reset all circles to black
  circles.forEach(circle => {
    circle.setAttribute("fill", "#000000");
    circle.removeAttribute('data-party-name');
  });

  let currentIndex = 0;

  totalSeatsElements.forEach((element, index) => {
    const totalSeatsValue = parseFloat(element.innerText);
    const partyName = document.querySelector(`#partyName-${index + 1}`).innerText;
    const partyId = `party-${index + 1}`;

    if (!isNaN(totalSeatsValue) && totalSeatsValue > 0) {
      const color = getColorForIndex(index); // Get a color for this index
      for (let i = 0; i < totalSeatsValue && currentIndex < circles.length; i++) {
        circles[currentIndex].setAttribute("fill", color);
        circles[currentIndex].setAttribute('data-party-name', partyName);
        circles[currentIndex].setAttribute('data-party-id', partyId); // Set party ID
        currentIndex++;
      }
    }
  });
};

// Function to handle hover over circles for tooltip and effects
const setupHoverEventListeners = () => {
    const svg = document.getElementById('semicircle');

    svg.addEventListener('mousemove', (event) => {
        const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
        if (hoveredElement && hoveredElement.tagName === 'circle') {
            const partyId = hoveredElement.getAttribute('data-party-id');
            
            // Tooltip
            tooltip.style.display = 'block';
            tooltip.innerText = hoveredElement.getAttribute('data-party-name');
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;

            // Scale and shadow effect
            document.querySelectorAll(`circle[data-party-id="${partyId}"]`).forEach(circle => {
                circle.style.transform = 'scale(1.05)';
                circle.style.filter = 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3))';
                circle.style.transition = 'transform 0.2s ease, filter 0.2s ease';
            });
        } else {
            // Remove tooltip and scale/shadow effect when moving out of the circle area
            tooltip.style.display = 'none';
            document.querySelectorAll('circle').forEach(circle => {
                circle.style.transform = 'scale(1)';
                circle.style.filter = 'none';
            });
        }
    }, true);

    svg.addEventListener('click', (event) => {
        const clickedElement = document.elementFromPoint(event.clientX, event.clientY);
        if (clickedElement && clickedElement.tagName === 'circle') {
            const partyId = clickedElement.getAttribute('data-party-id');
            clearAllHighlights(); // Clear any existing highlights
            highlightPartyElement(partyId); // Highlight the entire parent <p> element
        }
    }, true);
};

// Function to add event delegation for handling circle clicks
const setupClickEventDelegation = () => {
  const svg = document.getElementById('semicircle');

  svg.addEventListener('click', (event) => {
    if (event.target.tagName === 'circle') {
      event.stopPropagation(); // Prevent the global click listener from firing
      const partyId = event.target.getAttribute('data-party-id');
      clearAllHighlights(); // Clear any existing highlights
      highlightPartyElement(partyId); // Highlight the entire parent <p> element
    }
  });

  // Handle clicks on the initial static elements
  document.querySelectorAll('[data-party-id]').forEach(element => {
    element.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the global click listener from firing
      const partyId = event.target.getAttribute('data-party-id');
      clearAllHighlights(); // Clear any existing highlights
      highlightPartyElement(partyId); // Highlight the entire parent <p> element
    });
  });
};

// Function to get a color based on index
const getColorForIndex = (index) => {
  const colors = [
    "#FF0000", "#FF7F00", "#FFFF00", "#7FFF00", "#00FF00", 
    "#00FF7F", "#00FFFF", "#007FFF", "#0000FF", "#7F00FF", 
    "#FF00FF", "#FF007F", "#7F0000", "#7F3F00", "#7F7F00",
    "#3F7F00", "#007F3F", "#007F7F", "#003F7F", "#3F007F"
  ];
  return colors[index % colors.length];
};

// Function to update the semicircle based on the totalSeats value
const updateSemicircle = () => {
  const totalSeatsElements = document.querySelectorAll('.totalSeats');
  let totalCircles = 0;

  totalSeatsElements.forEach(el => {
    const value = parseFloat(el.innerText);
    if (!isNaN(value) && value > 0) {
      totalCircles += value;
    }
  });

  generateSemicircle(totalCircles); // Initially generate black circles
  updateCirclesColor(); // Then color them based on totalSeats
};

// Global click listener to clear highlights when clicking outside
document.addEventListener('click', () => {
  clearAllHighlights();
});

// Adding event listener to update circles when .totalSeats changes
document.addEventListener('input', updateSemicircle);

// Initial setup for static HTML elements
setupInitialDataAttributes();
setupHoverEventListeners();
setupClickEventDelegation();
generateSemicircle(); // Draw all circles as black initially
updateSemicircle();

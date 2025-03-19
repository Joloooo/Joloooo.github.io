// Define a mapping from Latin to Georgian characters
export const transliterationMap = {
    "a": "ა", "b": "ბ", "g": "გ", "d": "დ", "e": "ე", "v": "ვ", 
    "z": "ზ", "t": "თ", "i": "ი", "k": "კ", "l": "ლ", "m": "მ", 
    "n": "ნ", "o": "ო", "p": "პ", "j": "ჟ", "r": "რ", "s": "ს", 
    "u": "უ", "f": "ფ", "q": "ქ", "gh": "ღ", "sh": "შ", "ch": "ჩ", 
    "ts": "ც", "dz": "ძ", "ts'": "წ", "ch'": "ჭ", "kh": "ხ", "h": "ჰ"
};

// Function to transliterate Latin input to Georgian
export function transliterate(input) {
    let result = "";
    let i = 0;

    while (i < input.length) {
        // Check for two-letter combinations first
        const twoLetter = input.slice(i, i + 2).toLowerCase();
        if (transliterationMap[twoLetter]) {
            result += transliterationMap[twoLetter];
            i += 2;
        } else {
            // Check for single-letter matches
            const oneLetter = input[i].toLowerCase();
            result += transliterationMap[oneLetter] || input[i];
            i += 1;
        }
    }

    return result;
}

// Add event listener to detect input in the search bar
export function setupSearchBarListener(searchBar, servicesData, renderMainServices, renderSubservices, renderDescription) {
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        
        // Convert the search term to Georgian using transliteration
        const georgianSearchTerm = transliterate(searchTerm);

        // If search bar is empty, render the main services
        if (searchTerm.trim() === "") {
            renderMainServices();
            return;
        }

        // Clear the main content area
        const main = document.querySelector("main");
        main.innerHTML = "";

        // Iterate through servicesData to find matches
        servicesData.forEach(service => {
            // Check if the main service name matches the search term
            if (service.name.toLowerCase().includes(georgianSearchTerm)) {
                // Render the matching service name
                const serviceElement = document.createElement("p");
                serviceElement.classList.add("service", "roundbox", "selector");
                serviceElement.textContent = service.name;
                serviceElement.addEventListener("click", () => renderSubservices(service));
                main.appendChild(serviceElement);
            }
            
            // Iterate through subservices to find matches
            service.subservices.forEach(subservice => {
                if (subservice.name.toLowerCase().includes(georgianSearchTerm)) {
                    // Render the matching subservice name
                    const subserviceElement = document.createElement("p");
                    subserviceElement.classList.add("subservice", "roundbox", "selector");
                    subserviceElement.textContent = subservice.name;
                    subserviceElement.addEventListener("click", () => renderDescription(subservice));
                    main.appendChild(subserviceElement);
                }
            });
        });
    });
}

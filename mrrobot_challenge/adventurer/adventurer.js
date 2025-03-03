function validateInput(step, correctValue) {
    const input = document.getElementById(`step${step}-input`).value;
    const submitButton = document.getElementById(`step${step}-submit`);
    if (input.toLowerCase() === correctValue.toLowerCase()) {
        submitButton.textContent = 'Completed';
    } else {
        submitButton.textContent = 'Submit';
    }
}

function showApprovedAnswer(questionId, correctValue) {
    const answerButton = document.getElementById(`${questionId}-submit`);
    answerButton.textContent = 'See Approved Answer';
    answerButton.addEventListener('click', function() {
        alert(correctValue);
    });
}

function handleKeyPress(event, step, correctValue) {
    if (event.key === 'Enter') {
        validateInput(step, correctValue);
    }
}

function handleQuestionKeyPress(event, questionId, correctValue) {
    if (event.key === 'Enter') {
        showApprovedAnswer(questionId, correctValue);
    }
}

function showHint(questionId, hintText) {
    const hintTextElement = document.getElementById(`${questionId}-hint-text`);
    hintTextElement.innerHTML = hintText;
    hintTextElement.style.display = 'block';
    setTimeout(() => {
        hintTextElement.style.display = 'none';
    }, 3000); // Show hint for 3 seconds
}

// Add event listeners for hints
document.getElementById('q1-hint').addEventListener('click', function() {
    showHint('q1', 'Check out OWASP for more information.');
});

document.getElementById('q2-hint').addEventListener('click', function() {
    showHint('q2', 'Check out OWASP for more information.');
});

document.getElementById('q3-hint').addEventListener('click', function() {
    showHint('q3', 'Check out https://www.fortinet.com/resources/cyberglossary/brute-force-attack for more information.');
});

document.getElementById('q4-hint').addEventListener('click', function() {
    showHint('q4', 'You can do this on your own! We believe in you!');
});

document.getElementById('q5-hint').addEventListener('click', function() {
    showHint('q5', 'Check out OWASP for more information.');
});

document.getElementById('q6-hint').addEventListener('click', function() {
    showHint('q6', 'Check out OWASP for more information.');
});

document.getElementById('q7-hint').addEventListener('click', function() {
    showHint('q7', 'Codecademy and TechTarget offer good resources.');
});

document.getElementById('q8-hint').addEventListener('click', function() {
    showHint('q8', 'Codecademy and TechTarget offer good resources.');
});

document.getElementById('q9-hint').addEventListener('click', function() {
    showHint('q9', 'Remember what you did in step 1.');
});

document.getElementById('q10-hint').addEventListener('click', function() {
    showHint('q10', 'One of the tools is based on the serial killer from the 19th century, Jack the Ripper.');
});

document.getElementById('q11-hint').addEventListener('click', function() {
    showHint('q11', 'Research guidelines from "Jack the Reapper" [name is intentionally left incorrect].');
});

document.getElementById('q12-hint').addEventListener('click', function() {
    showHint('q12', 'Consider how you might save time by preparing results in advance for repetitive tasks.');
});

document.getElementById('q13-hint').addEventListener('click', function() {
    showHint('q13', 'Think about a method that benefits from extensive preparation rather than real-time computation.');
});

document.getElementById('q14-hint').addEventListener('click', function() {
    showHint('q14', 'Reflect on how adding a unique element to each instance of a process can disrupt uniform approaches.');
});

document.getElementById('q15-hint').addEventListener('click', function() {
    showHint('q15', 'Investigate the typical length and character patterns of different hash functions.');
});

document.getElementById('step1-submit').addEventListener('click', function() {
    validateInput(1, '123456');
});

document.getElementById('step2-submit').addEventListener('click', function() {
    validateInput(2, 'ashley');
});

document.getElementById('step3-submit').addEventListener('click', function() {
    validateInput(3, 'destiny');
});

document.getElementById('step4-submit').addEventListener('click', function() {
    validateInput(4, 'loveme1');
});

document.getElementById('step5-submit').addEventListener('click', function() {
    validateInput(5, 'princess');
});

document.getElementById('step1-hint').addEventListener('click', function() {
    showHint('step1', 'Try using a common password list.');
});

document.getElementById('step2-hint').addEventListener('click', function() {
    showHint('step2', 'Consider common names.');
});

document.getElementById('step3-hint').addEventListener('click', function() {
    showHint('step3', 'Think of common words people use.');
});

document.getElementById('step4-hint').addEventListener('click', function() {
    showHint('step4', 'Use hash cracking tools.');
});

document.getElementById('step5-hint').addEventListener('click', function() {
    showHint('step5', 'Try a personal touch.');
});

document.getElementById('q1-submit').addEventListener('click', function() {
    showApprovedAnswer('q1', 'Brute force attacks exploit weak passwords and systems without proper security measures, such as account lockouts, CAPTCHAs, or rate limiting. They systematically try all possible combinations to find the correct password.');
});

document.getElementById('q2-submit').addEventListener('click', function() {
    showApprovedAnswer('q2', 'A brute force tool targets login forms and authentication endpoints, such as database authentication servers, and the backend server handling authentication logic and user sessions.');
});

document.getElementById('q3-submit').addEventListener('click', function() {
    showApprovedAnswer('q3', 'The main types of brute force attacks include simple brute force attacks, dictionary attacks, hybrid brute force attacks, reverse brute force attacks, and credential stuffing.');
});

document.getElementById('q4-submit').addEventListener('click', function() {
    showApprovedAnswer('q4', 'Burp Suite und OWASP ZAP');
});

document.getElementById('q5-submit').addEventListener('click', function() {
    showApprovedAnswer('q5', 'Wordlists.');
});

document.getElementById('q6-submit').addEventListener('click', function() {
    showApprovedAnswer('q6', 'Rate limiting, account lockout policies.');
});

document.getElementById('q7-submit').addEventListener('click', function() {
    showApprovedAnswer('q7', 'Fixed-length strings generated by hash functions from input data of any size, acting as "trapdoor" functions that are easy to compute but hard to reverse. They ensure data integrity and security, commonly used to secure passwords and verify data.');
});

document.getElementById('q8-submit').addEventListener('click', function() {
    showApprovedAnswer('q8', 'Encrypted files can be decrypted while hashes cannot. Encrypted text can be decrypted with the proper private key while hashes cannot.');
});

document.getElementById('q9-submit').addEventListener('click', function() {
    showApprovedAnswer('q9', 'Using dictionary attacks where cleartext words are hashed and compared to the original hash value if they match.');
});

document.getElementById('q10-submit').addEventListener('click', function() {
    showApprovedAnswer('q10', 'John the Ripper, Hashcat.');
});

document.getElementById('q11-submit').addEventListener('click', function() {
    showApprovedAnswer('q11', 'First, you need to convert the RAR file password into an actual hash that can be cracked.');
});

document.getElementById('q12-submit').addEventListener('click', function() {
    showApprovedAnswer('q12', 'Precomputed tables of hash values for every possible password, used to reverse cryptographic hash functions to crack passwords quickly.');
});

document.getElementById('q13-submit').addEventListener('click', function() {
    showApprovedAnswer('q13', 'Using rainbow tables, because they precompute hashes, reducing the computation needed during the actual attack.');
});

document.getElementById('q14-submit').addEventListener('click', function() {
    showApprovedAnswer('q14', 'Salted hashes include a unique random value added to each password before hashing, making precomputed attacks like those using crack stations ineffective.');
});

document.getElementById('q15-submit').addEventListener('click', function() {
    showApprovedAnswer('q15', 'Hashes can be identified by their length and format. SHA-1 hashes are 40 characters long, usually starting with "a-f" or "0-9," while MD5 hashes are 32 characters long.');
});

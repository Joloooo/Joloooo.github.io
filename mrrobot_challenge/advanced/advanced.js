function validateInput(step, correctValue) {
    const input = document.getElementById(`step${step}-input`).value;
    const submitButton = document.getElementById(`step${step}-submit`);
    if (input.toLowerCase() === correctValue.toLowerCase()) {
        submitButton.textContent = 'Completed';
    } else {
        submitButton.textContent = 'Submit';
    }
}

function handleKeyPress(event, step, correctValue) {
    if (event.key === 'Enter') {
        validateInput(step, correctValue);
    }
}

function showHint(step) {
    const hintText = document.getElementById(`step${step}-hint-text`);
    hintText.style.display = 'block';
    setTimeout(() => {
        hintText.style.display = 'none';
    }, 3000); // Show hint for 3 seconds
}

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
    showHint(1);
});

document.getElementById('step2-hint').addEventListener('click', function() {
    showHint(2);
});

document.getElementById('step3-hint').addEventListener('click', function() {
    showHint(3);
});

document.getElementById('step4-hint').addEventListener('click', function() {
    showHint(4);
});

document.getElementById('step5-hint').addEventListener('click', function() {
    showHint(5);
});

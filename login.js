function toggleForm(formId) {
    // Hide all forms and deactivate tabs
    var forms = document.getElementsByClassName('auth-form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].classList.remove('active');
    }
    var tabs = document.getElementsByClassName('tabs')[0].getElementsByTagName('button');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Show selected form and activate corresponding tab
    document.getElementById(formId).classList.add('active');
    document.getElementById(formId + 'Tab').classList.add('active');
}

function validateForm(formType) {
    var username, password, errorMsgId, redirectUrl;

    if (formType === 'login') {
        username = document.getElementById('loginUsername').value;
        password = document.getElementById('loginPassword').value;
        errorMsgId = 'loginErrorMsg';
        redirectUrl = 'dashboard.html'; // Redirect to dashboard after login
    } else if (formType === 'signup') {
        username = document.getElementById('signupUsername').value;
        password = document.getElementById('signupPassword').value;
        errorMsgId = 'signupErrorMsg';
        redirectUrl = 'welcome.html'; // Redirect to welcome page after sign up
    }

    var errorMsg = document.getElementById(errorMsgId);

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        errorMsg.textContent = 'Please enter both username and password.';
        return false;
    }

    // You can add more advanced validation here (e.g., checking against database)

    // For demonstration, simulate form submission and redirect
    simulateFormSubmission(username, redirectUrl);
    return true;
}

function simulateFormSubmission(username, redirectUrl) {
    // Simulate form submission with a brief delay
    setTimeout(function() {
        console.log('User ' + username + ' authenticated successfully.');
        window.location.href = redirectUrl; // Redirect to the specified URL
    }, 1000); // Delay of 1 second (1000 milliseconds)
}

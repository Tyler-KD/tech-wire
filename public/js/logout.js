// Handler for logging out
const logout = async () => {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the Homepage
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// Event listener for logging out after clicking 'Logout'
document.querySelector('#logout').addEventListener('click', logout);
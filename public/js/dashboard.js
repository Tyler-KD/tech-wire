// Handler for creating a user's blog
const newFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Blog form
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // If response is successful, redirect the browser to the dashboard page after clicking 'Create'
        if (response.status < 400) {
            document.location.replace('/dashboard');
        // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to create blog');
            document.location.replace('/login');
        }
    }
};

// Event listener for creating a user's blog after clicking 'Create'
document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
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

// Handler for deleting a user's blog
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

// Event listener for creating a user's blog after clicking 'Create'
document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
// Event listener for deleting a user's blog after clicking 'DELETE'
document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
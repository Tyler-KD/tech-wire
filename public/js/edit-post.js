// Handler for updating a user's blog
const upFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Update a a Blog form
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const id = window.location.href.split('/')[4];

    if (title && content) {
        // Send an UPDATE request to the API endpoint
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // If response is successful, redirect the browser to the dashboard page after clicking 'Update'
        if (response.status < 400) {
            document.location.replace('/dashboard');
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to update blog');
            document.location.replace('/login');
        }
    }
};

// Event listener for creating a user's blog after clicking 'Update'
document
    .querySelector('.new-blog-form')
    .addEventListener('submit', upFormHandler);
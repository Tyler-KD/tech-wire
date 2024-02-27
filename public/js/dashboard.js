// Handler for creating a user's blog
const newFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Blog form
    const title = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-desc').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
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

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
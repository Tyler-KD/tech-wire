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

// Handler for deleting a user's blog
const delButtonHandler = async (event) => {
    // Collect blog_id from the window
    const id = window.location.href.split('/')[4];

    if (event.target.hasAttribute('data-id')) {
        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });
        // If response is successful, redirect the browser to the dashboard page after clicking 'DELETE'
        if (response.status < 400) {
            console.log(response);
            document.location.replace('/dashboard');
        // If the response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to delete blog');
            document.location.replace('/login');
        }
    }
};

// Event listener for creating a user's blog after clicking 'Update'
document
    .querySelector('.update-form').addEventListener('click', upFormHandler);
// Event listener for deleting a user's blog after clicking 'DELETE'
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short circuits
// and evaluates to undefined instead of throwing an error.
// When deleting a blog, "TypeError: Cannot read properties of null" will not display since 'DELETE' button is no longer rendered.
document
.querySelector('.blog-form')?.addEventListener('click', delButtonHandler);
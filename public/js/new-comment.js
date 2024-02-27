// Handler for creating a user's comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Comment form
    const comment_input = document.querySelector('#textarea-comment').value.trim();
    const blog_id = parseInt(window.location.pathname.split('/').pop());

    if (comment_input) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_input, blog_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
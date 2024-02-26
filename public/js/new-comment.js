// Handler for creating a user's comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Comment form
    const content = document.querySelector('#textarea-comment').value.trim();

    if (content) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_input }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/');
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
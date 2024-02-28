// Handler for creating a user's comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Comment form
    const comment_input = document.querySelector('#textarea-comment').value.trim();
    // To get blog_id, parseINT() converts a string to an integer
    // window.location.pathname returns the path and filename of the current page
    // .split('/') splits ["http://localhost:3001/blog/1"] into ["http://localhost:3001", "blog", "1"]
    // .pop() removes the last element from an array and returns it
    const blog_id = parseInt(window.location.pathname.split('/').pop());

    if (comment_input) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            // Passes comment_input and blog_id through the rendered sub layout {{{body}}} of main.handlebars
            body: JSON.stringify({ comment_input, blog_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, reload the page after clicking "Submit:"
            // Comment History is populated with each comment on page
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

// Event listener for creating a comment for a blog after clicking 'Submit'
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
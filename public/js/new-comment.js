// Handler for creating a user's comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Comment form
    const comment_input = document.querySelector('#textarea-comment').value.trim();
    // To get blog_id, parseINT() converts a string to an integer
    // window.location.pathname returns the path and filename of the current page
    // .split('/') splits ["http://localhost:3001/blog/1"] into ["http://localhost:3001", "blog", "1"] based on the delimiter (/)
    // .pop() removes the last element from an array and returns it
    //const blog_id = parseInt(window.location.pathname.split('/').pop());
    // The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.
    // The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
    const blog_id = event.target.getAttribute("data-id");
    console.log(event.target)

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
        // If response is successful, reload the page after clicking "Submit:"
        if (response.status < 400) {
            // Comment History is populated with each comment on page
            document.location.reload();
        // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to create comment');
            document.location.replace('/login');
        }
    }
};

// Event listener for creating a comment for a blog after clicking 'Submit'
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short circuits
// and evaluates to undefined instead of throwing an error.
// When logged out, displaying a blog will not give "TypeError: Cannot read properties of null" since new-comment-form is not rendered.
document
    .querySelector('.new-comment-form')?.addEventListener('submit', newCommentFormHandler);
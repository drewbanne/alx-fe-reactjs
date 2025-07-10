// src/WelcomeMessage.jsx

// Define a functional component named WelcomeMessage.
// In React, components are functions that return JSX.
function WelcomeMessage() {
    // JSX (JavaScript XML) is a syntax extension for JavaScript.
    // It looks like HTML but allows you to write UI components.
    return (
        // A div is used here to wrap multiple JSX elements.
        // In React, a component must return a single root element,
        // or a Fragment (<></>) if you don't want an extra div.
        <div>
            {/* Modified <h1> tag text as per the assignment */}
            <h1>Hello everyone, I am learning React at ALX!</h1>
            {/* Original paragraph tag */}
            <p>This is a simple JSX component.</p>
            {/* New paragraph tag added as per the assignment */}
            <p>I am learning about JSX!</p>
        </div>
    );
}

// Export the WelcomeMessage component as the default export.
// This makes it available for other files (like App.jsx) to import and use.
export default WelcomeMessage;

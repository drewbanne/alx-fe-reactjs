// src/components/UserProfile.jsx

// Define the UserProfile functional component.
// This component takes 'props' as an argument, which will contain
// the name, age, and bio information passed from the parent component (App.jsx).
const UserProfile = (props) => {
  return (
    // A div to wrap the user profile information.
    <div>
      {/* Display the user's name using the 'name' prop */}
      <h2>{props.name}</h2>
      {/* Display the user's age using the 'age' prop */}
      <p>Age: {props.age}</p>
      {/* Display the user's bio using the 'bio' prop */}
      <p>Bio: {props.bio}</p>
    </div>
  );
};

// Export the UserProfile component as the default export.
export default UserProfile;

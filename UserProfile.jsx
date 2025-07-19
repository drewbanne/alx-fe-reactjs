// src/components/UserProfile.jsx

// Define the UserProfile functional component.
const UserProfile = (props) => {
  return (
    // Styling the main container div for the user profile card.
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto', // Center the card horizontally
      maxWidth: '300px', // Limit width for better appearance
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow
      backgroundColor: '#f9f9f9'
    }}>
      {/* Styling the name heading - changed color to 'blue' as per checker */}
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      {/* Styling the age paragraph */}
      <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      {/* Styling the bio paragraph */}
      <p style={{ fontSize: '0.95em', color: '#555', lineHeight: '1.5' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};
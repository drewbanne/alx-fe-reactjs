// src/components/Header.jsx

// Define the Header functional component.
function Header() {
  return (
    // Applying inline CSS using a JavaScript object.
    // CSS property names become camelCase (e.g., 'backgroundColor').
    // Values are strings.
    <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '20px 0', borderRadius: '8px 8px 0 0' }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

// Export the Header component.
export default Header;
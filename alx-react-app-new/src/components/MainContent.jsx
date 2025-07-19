// src/components/MainContent.jsx

// Define the MainContent functional component.
function MainContent() {
  return (
    // Styling the main content area.
    <main style={{
      padding: '20px',
      margin: '0 auto', // Center content
      maxWidth: '800px',
      backgroundColor: '#ffffff',
      borderLeft: '1px solid #eee',
      borderRight: '1px solid #eee',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}
// src/components/UserProfile.jsx

// Define the UserProfile functional component.
function UserProfile() {
  return (
    // Container (div.user-profile):
    // bg-gray-100: cool gray background
    // p-8: padding of 8 units
    // max-w-sm: maximum width of 384px (close to 400px)
    // mx-auto: center horizontally
    // my-20: margin-top and margin-bottom of 80px (center vertically roughly)
    // rounded-lg: medium rounded border
    // shadow-lg: large shadow for depth
    // flex flex-col items-center: to center content (image, text) vertically within the card
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg flex flex-col items-center">
      {/* Image (img): */}
      {/* rounded-full: makes the image circular */}
      {/* w-36 h-36: width and height of 144px (close to 150px) */}
      {/* mx-auto: centers the image horizontally within its flex container */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />

      {/* Heading (h1): */}
      {/* text-xl: larger font size (1.25rem) */}
      {/* text-blue-800: deep blue color */}
      {/* my-4: vertical margin of 16px */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>

      {/* Paragraph (p): */}
      {/* text-gray-600: gray text color */}
      {/* text-base: default font size (1rem) */}
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

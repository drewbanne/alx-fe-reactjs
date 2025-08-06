// src/components/UserProfile.jsx

// Define the UserProfile functional component.
function UserProfile() {
  return (
    // Container (div.user-profile):
    // bg-gray-100: cool gray background
    // sm:p-4 (small screens and up), md:p-8 (medium screens and up): responsive padding
    // max-w-xs (small screens), md:max-w-sm (medium screens and up): responsive max-width
    // mx-auto: center horizontally
    // my-10 (default/small screens), md:my-20 (medium screens and up): responsive vertical margin
    // rounded-lg: medium rounded border
    // shadow-lg: large shadow for depth
    // flex flex-col items-center: to center content (image, text) vertically within the card
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg flex flex-col items-center">
      {/* Image (img): */}
      {/* rounded-full: makes the image circular */}
      {/* w-24 h-24 (small screens), md:w-36 md:h-36 (medium screens and up): responsive width and height */}
      {/* mx-auto: centers the image horizontally within its flex container */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
      />

      {/* Heading (h1): */}
      {/* text-lg (small screens), md:text-xl (medium screens and up): responsive font size */}
      {/* text-blue-800: deep blue color */}
      {/* my-4: vertical margin of 16px */}
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>

      {/* Paragraph (p): */}
      {/* text-sm (small screens), md:text-base (medium screens and up): responsive font size */}
      {/* text-gray-600: gray text color */}
      <p className="text-gray-600 text-sm md:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

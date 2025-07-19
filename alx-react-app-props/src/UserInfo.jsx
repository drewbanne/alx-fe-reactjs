// src/UserInfo.jsx

import UserDetails from './UserDetails';

// UserInfo no longer needs to receive userData as a prop.
// It simply renders UserDetails.
function UserInfo() {
  return (
    <div>
      <h3>User Information (Context Refactored)</h3>
      <UserDetails />
    </div>
  );
}

export default UserInfo;

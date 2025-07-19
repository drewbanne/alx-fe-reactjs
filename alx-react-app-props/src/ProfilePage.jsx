// src/ProfilePage.jsx

import UserInfo from './UserInfo';

// ProfilePage no longer needs to receive userData as a prop.
// It simply renders UserInfo.
function ProfilePage() {
  return (
    <div>
      <h2>Profile Page (Context Refactored)</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;

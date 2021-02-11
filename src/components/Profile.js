import React from "react";

function Profile({ user: { age, name, image } }) {
  
  return (
    <div>
      <h1>Profile</h1>
      <h1>{name}</h1>
      <h3>Age: {age}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

export default Profile;

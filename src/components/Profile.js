import React from "react";

function Profile({ currentUser }) { //guard from getting hit before current_user is set
  
  return (
    <div className="ui card">
  <div className="content">
    <div className="header">{currentUser.name}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">PROFILE</h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
             <p>Age: {currentUser.age}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Ethnicity: {currentUser.ethnicity}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Gender Identity: {currentUser.genderIdentity}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Political Party: {currentUser.politicalParty}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Location: {currentUser.location}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Religion: {currentUser.religion}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Profile;

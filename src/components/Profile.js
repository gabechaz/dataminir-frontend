import React from "react";

function Profile({ currentUser, currentUserWallet }) { //guard from getting hit before current_user is set
  
  return (
    <div className="ui centered card">
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
          <p>Gender Identity: {currentUser.gender_identity}</p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          <p>Political Party: {currentUser.political_party}</p>
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
          <div>
            <p> Wallet: {currentUserWallet}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Profile;

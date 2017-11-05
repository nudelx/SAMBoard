import React from 'react'

const User = ({ user, date }) => {
  const cleanUser = user.replace('/', '')
  return (
    <div className="user-card">
      <div className="image-holder">
        <img
          alt="user"
          src={`https://avatars1.githubusercontent.com/${cleanUser}`}
        />
      </div>
      <div className="user-holder">
        <div className="name-holder">
          {cleanUser}
        </div>
        <div className="user-date">
          {date}
        </div>
      </div>
    </div>
  )
}

export default User

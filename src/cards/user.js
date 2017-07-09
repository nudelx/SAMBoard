import React from 'react'

const User = ({ user }) => {
  const cleanUser = user.replace('/', '')
  return (
    <div className="user-card">
      <div className="image-holder">
        <img
          alt="user"
          width="20px"
          height="20"
          src={`https://avatars1.githubusercontent.com/${cleanUser}`}
        />{' '}
      </div>
      <div className="name-holder">
        {cleanUser}
      </div>
    </div>
  )
}

export default User

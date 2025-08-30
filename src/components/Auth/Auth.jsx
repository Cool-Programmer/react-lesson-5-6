import React from 'react'
import Login from './Login/Login'
import Registration from './Registration/Registration'

function Auth({handleAddUser, users}) {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <Login users={users}/>
          </div>

          <div className="col-md-6">
            <Registration handleAddUser={handleAddUser}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
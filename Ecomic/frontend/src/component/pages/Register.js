import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  

  return (
    <div className='admin-wrapper'>
      <div className='register-wrapper'>
        <div className='header'>
          <h3>Create account</h3>
        </div>
        <form action="/">
          <div class="form-group">
            <label for="fname">First name</label>
            <input type="text" class="form-control" id="fname" />
          </div>
          <div class="form-group">
            <label for="lname">Last name</label>
            <input type="text" class="form-control" id="lname" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <div class="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <div class="clearfix">
          <button type="submit" class="btn btn-default float-left">Submit</button>
          <Link to="/login" className='btn float-right btn-primary'>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
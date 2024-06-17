import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    const url = evt.currentTarget.action;
    const data = { fname, lname, username, password };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Return the parsed JSON
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    console.log(data, options);
  }

  const onKeyupHandler = (evt) => {
    const { id, value } = evt.currentTarget;
    if (id === 'email') {
      setUsername(value);
    } else if (id === 'pwd') {
      setPassword(value);
    } else if (id === 'fname') {
      setFname(value)
    } else if (id === 'lname') {
      setLname(value)
    } else {
      console.log("ok");
    }
    console.log(id);
  }
  return (
    <div className='admin-wrapper'>
      <div className='register-wrapper'>
        <div className='header'>
          <h3>Create account</h3>
        </div>
        <form onSubmit={onSubmitHandler} action='https://bacd-125-99-156-162.ngrok-free.app/login'>
          <div class="form-group">
            <label for="fname">First name</label>
            <input type="text" class="form-control" id="fname" onKeyUp={onKeyupHandler} />
          </div>
          <div class="form-group">
            <label for="lname">Last name</label>
            <input type="text" class="form-control" id="lname" onKeyUp={onKeyupHandler} />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" onKeyUp={onKeyupHandler} />
          </div>
          <div class="form-group">
            <label for="pwd">Password</label>
            <input type="password" class="form-control" id="pwd" onKeyUp={onKeyupHandler} />
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
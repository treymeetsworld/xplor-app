import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    pw: ''
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.login(formData)
      .then(() => {
        props.handleSignupOrLogin()
        navigate('/profile')
      })
      .catch(err => {
        alert('Invalid Credentials')
      })
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="formContainer"
    >
      <div className="inputContainer">
        <label htmlFor="email" className="label">Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="button">Log In</button>
        <Link to="/profile">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
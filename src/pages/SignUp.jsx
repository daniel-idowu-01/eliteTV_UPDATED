import React, { useState } from 'react'
import { supabase } from '../client/client'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  const labelStyle = 'text-gray-600 font-bold inline-block pb-2'
  const inputStyle = 'text-black border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  // function to be handled when user inputs a value
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  // function to be handled when user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.first_name,
              last_name: formData.last_name
            }
          }
        }
      )
      alert('Check your email for verification link')
      navigate('/login')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="h-screen flex items-center">
        <article className="bg-white shadow-xl p-10 h-max mx-auto flex flex-col items-center">
            <h1 className="text-xl text-black font-bold text-center pb-10">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                      <label
                       className={labelStyle}
                        for="first_name">First Name</label>
                      <input
                       onChange={handleChange}
                       className={inputStyle} type="text" name="first_name" placeholder="John" />
                  </div>
                  <div>
                      <label
                       className={labelStyle}
                        for="last_name">Last Name</label>
                      <input
                       onChange={handleChange}
                       className={inputStyle} type="text" name="last_name" placeholder="Doe" />
                  </div>
                  <div>
                      <label
                       className={labelStyle}
                        for="email">Email</label>
                      <input
                       onChange={handleChange}
                       className={inputStyle} type="email" name="email" placeholder="johndoe36@gmail.com" />
                  </div>
                  <div>
                      <label
                       className={labelStyle}
                        for="password">Password</label>
                      <input
                       onChange={handleChange}
                       className={inputStyle} type="password" name="password" placeholder="******" />
                  </div>
                  <div>
                      <input className="bg-deepNavyBlue w-full py-2 rounded-md text-white font-bold cursor-pointer" type="submit" value="Sign Up" />
                  </div>
                  <p className='text-black'>Have an account? <Link to='/login'>Log In</Link></p>
              </div>
            </form>
            
        </article>
     </section>
  )
}

export default SignUp

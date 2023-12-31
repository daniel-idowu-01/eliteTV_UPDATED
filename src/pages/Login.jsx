import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client/client'

const Login = ({ setToken }) => {

  const [emailNotVerified, setEmailNotVerified] = useState(null)
  const navigate = useNavigate()

  const labelStyle = 'text-gray-600 font-bold inline-block pb-2'
  const articleStyle = 'bg-white shadow-xl p-10 h-max mx-auto flex flex-col items-center'
  const submitBtnStyle = 'bg-deepNavyBlue w-full py-2 rounded-md text-white font-bold cursor-pointer'
  const inputStyle = 'text-black border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'

  const [formData, setFormData] = useState({
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      }
    )
    
    if(error) throw error
    setToken(data)
    navigate('/')

    // Check if the user has verified their email
    if (!data.email_verified) {
      setEmailNotVerified(true)
    }

    } catch (error) {
      alert(error)
    }
  }

  return (
      <section className="h-screen flex items-center">
        <article className={articleStyle}>
            <h1 className="text-xl text-black font-bold text-center pb-10">Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-4 text-sm">
                  <div>
                      <label
                      className={labelStyle}
                        htmlFor="email">Email</label>
                      <input
                      onChange={handleChange}
                      className={inputStyle} type="email" name="email" placeholder="mehedi@jaman.com" />
                  </div>
                  <div>
                      <label
                      className={labelStyle}
                      htmlFor="password">Password</label>
                      <input
                      onChange={handleChange}
                      className={inputStyle} type="password" name="password" placeholder="******" />
                  </div>
                  <div>
                      <input className={submitBtnStyle} type="submit" value="Login" />
                  </div>
                  <p className='text-black'>
                    Don't have an account? <Link to='/signup' className='underline'>Sign Up</Link>
                  </p>
              {emailNotVerified
               ? 
              <p className='text-red-500'>
                <AiOutlineInfoCircle className='inline-block' /> Email or Password is not correct 
              </p>
               : 
              ''}
              </div>
            </form>
            
        </article>
     </section>
  )
}

export default Login

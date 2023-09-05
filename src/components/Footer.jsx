import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {

    const footerStyle = 'flex flex-col gap-20 mt-32 py-10 border-t-2 border-gold bg-black text-white'

  return (
    <section className={footerStyle}>
        
        <button className='mx-auto w-1/6 bg-gold p-2 px-5 text-black'>
            Log In
        </button>
        <article className='flex justify-center gap-20'>
            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)" className='flex items-center gap-1'>
                    Help 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Investor Relations
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    About 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                        Careers 
                        <span className="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
                    <a href="javascript:void(0)"  className='flex items-center gap-1'>
                        Terms Of Use 
                        <span className="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
                    <a href="javascript:void(0)"  className='flex items-center gap-1'>
                        Advertising 
                        <span className="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Contact Us 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Privacy Policy 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Legal Policy 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Cookie Preferences 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    FAQ 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className='flex items-center gap-1'>
                    Account 
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
            </article>
        </article>

        <div className='grid place-items-center text-center gap-2'>
            <p className='text-xl md:text-4xl text-gold font-semibold'>
                EliteTV
            </p>
            <p className='opacity-30'>
                <AiOutlineCopyright className='inline' /> 2022-2023 by elitetv
            </p>
        </div>
       
      
    </section>
  )
}

export default Footer

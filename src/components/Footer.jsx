import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {

    const linkStyle = 'flex items-center gap-1 hover:opacity-90'
    const iconStyle = "material-symbols-outlined text-sm md:text-md"
    const btnStyle = 'mx-auto md:w-1/6 bg-gold p-2 px-5 text-black hover:opacity-90'
    const bgStyle = 'grid grid-cols-2 md:grid-cols-4 place-items-center text-sm md:text-md gap-20 md:gap-20'
    const footerStyle = 'flex flex-col gap-20 mt-32 px-5 md:px-0 py-10 border-t border-gold bg-black text-white'

  return (
    <section className={footerStyle}>
        
        <button className={btnStyle}>
            Login
        </button>
        <article className={bgStyle}>
            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)" className={linkStyle}>
                    Help 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Investor Relations
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    About 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className={linkStyle}>
                        Careers 
                        <span className={iconStyle}>
                            open_in_new
                        </span>
                    </a>
                    <a href="javascript:void(0)"  className={linkStyle}>
                        Terms Of Use 
                        <span className={iconStyle}>
                            open_in_new
                        </span>
                    </a>
                    <a href="javascript:void(0)"  className={linkStyle}>
                        Advertising 
                        <span className={iconStyle}>
                            open_in_new
                        </span>
                    </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Contact Us 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Privacy Policy 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Legal Policy 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
            </article>

            <article className='flex flex-col gap-10'>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Cookie Preferences 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    FAQ 
                    <span className={iconStyle}>
                        open_in_new
                    </span>
                </a>
                <a href="javascript:void(0)"  className={linkStyle}>
                    Account 
                    <span className={iconStyle}>
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

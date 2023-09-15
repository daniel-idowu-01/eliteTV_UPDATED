import React from 'react';

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <section>
            <h1 className='text-7xl'>
                <span className='text-gold'>404</span> - Not Found
            </h1>
            <p className='text-center'>Sorry, the page you are looking for does not exist.</p>
        </section>
    </div>
  );
};

export default NotFound;

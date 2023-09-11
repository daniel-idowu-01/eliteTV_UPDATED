import React, { useState, useEffect } from 'react';

const Notification = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const notificationStyle = `w-fit p-10 rounded-md fixed left-10 bottom-10 bg-deepNavyBlue border border-gold h-30 cart-notification ${isVisible ? 'block' : 'hidden'}`

  useEffect(() => {
    // Show the notification when the product is added to the cart
    setIsVisible(true);

    // Hide the notification after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Clear the timer when the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [product]);

  return (
    <div className={notificationStyle}>
      <p>{product} has been added to your saved movies</p>
    </div>
  );
};

export default Notification;

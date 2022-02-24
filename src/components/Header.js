 import React from 'react';
 import './Header.css';

 export default ({black}) => {
  return (
  <header className={black ? 'black' : '' }>
    <div className="header--logo">
      <a href="/">
       <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
      </a> 
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pic.glowing.com/forum/05d1676cea75ffd2fa43438b49d12a2a.jpg" alt="User" />
        </a>
      </div>
    
  </header>
  ) ;
 }
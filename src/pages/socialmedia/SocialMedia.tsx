import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
  return (
    <>
    <div className='socialmedia-div'>
        <a href="https://www.instagram.com/max_kabba/" className='ig-a'>
            <FontAwesomeIcon icon={faInstagram} size='2x'/>
        </a>
    </div>
      <SocialMedia></SocialMedia>

     
        
    </>
  );
}

export default SocialMedia;

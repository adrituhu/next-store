import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="footer-container">
      <p>TypingCode 2022 All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

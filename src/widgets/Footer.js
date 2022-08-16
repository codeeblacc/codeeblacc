import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpCircle } from 'react-feather';

export default function Footer() {
  const handleTop = () => { window.scrollTo(0,0); }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="large-2 flex center-align">
            <p>Design by me <span>👋</span></p>
          </div>
          <div className="large-2 flex center-align justify-space-between">
            <p>Let's work together</p>
            <Link to="#" className="link">Notify me</Link>
          </div>
          <div className="large-1"></div>
          <div className="large-3 flex center-align">
            <Link to="#" onClick={handleTop} className="link">Back to Top &nbsp;<ArrowUpCircle /></Link>
          </div>
          <div className="large-4 flex center-align justify-end">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

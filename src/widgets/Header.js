import { React, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

import { getDate } from '../utils.js';

export default function Header() {
  var date = getDate(new Date());
  const header = useRef(0);
  const slick = useRef(0);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 80) {
        header.current.classList.add("stick");
        slick.current.style = "position:absolute; opacity: 0";
      } else {
        header.current.classList.remove("stick");
        slick.current.removeAttribute('style');
      }
    }
  }, []);

  return (
    <header ref={header}>
      <div className="container">
          <div className="row center-align">
            <div className="column large-2 medium-4 small-6">
              <Link to="/" className="brand">Codee Blacc</Link>
            </div>
            <div className="column large-3 medium-3 hide-on-med-and-small">
              <Link to="#" className="brand"><span className="slick" ref={slick}>Africa, Nigeria<br /></span>Software Engineer & Developer</Link>
            </div>
            <div className="column large-5 medium-4 hide-on-small-only">
              <ul>
                <li><a href="mailto:codeeblacc@gmail.com">Email <ArrowUpRight color="white" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/codeeblacc">Github <ArrowUpRight color="white" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://instagram.com/codeeblacc">Instagram <ArrowUpRight color="white" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://t.me/codeeblacc">Telegram <ArrowUpRight color="white" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="/resume.pdf" download>Resume.cv<ArrowUpRight color="white" /></a></li>
              </ul>
            </div>
            <div className="column large-2 medium-4 small-6 flex center-align justify-end">
              <div className="nav-action-img" data-content={date}></div>
            </div>
          </div>
      </div>
    </header>
  )
}

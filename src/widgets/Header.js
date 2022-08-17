import { React, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

export default function Header() {
  const header = useRef(0);
  const slick = useRef(0);
  const menu = useRef(0);
  const sidemenu = useRef(0);
  const body = document.querySelector('body');

  let open = false;

  useEffect(() => {
    try {
      window.onscroll = () => {
        if (window.pageYOffset > 80) {
          header.current.classList.add("stick");
          slick.current.style = "position:absolute; opacity: 0";
        } else {
          header.current.classList.remove("stick");
          slick.current.removeAttribute('style');
        }
      }
    } catch (error) { return; }

    menu.current.addEventListener("click", () => {
      if (open === false) {
        menu.current.classList.add('open');
        sidemenu.current.style.left = "0";
        body.style.overflow = "hidden";
        open = true;
      } else {
        menu.current.classList.remove('open');
        sidemenu.current.removeAttribute('style');
        body.removeAttribute('style');
        open = false;
      }
    });
  }, [header]);

  return (
    <header ref={header}>
      <div className="container">
          <div className="row center-align">
            <div className="column large-2 medium-4 small-6 flex center-align">
              <div className="menu hide-on-med-and-large" ref={menu}></div>
              <Link to="/#iLuGNmW" className="brand">Codee Blacc</Link>
            </div>
            <div className="column large-3 medium-3 hide-on-med-and-small">
              <p><span className="slick" ref={slick}>Africa, Ghana<br /></span>Software Designer & Developer</p>
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
              <div className="nav-action-img" data-content="menu"></div>
            </div>
          </div>
      </div>
      <div className="sidemenu" ref={sidemenu}>
        <div className="container">
          <div className="header-break"></div>
          <p>Africa, Ghana<br />Software Designer & Developer</p>
          <div className="modal-header-bar"></div>
          <br />
          <p className="smoke-text">contacts</p>
          <ul>
            <li><a href="mailto:codeeblacc@gmail.com">Email</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/codeeblacc">Github</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://instagram.com/codeeblacc">Instagram</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://t.me/codeeblacc">Telegram</a></li>
            <li><a target="_blank" rel="noreferrer" href="/resume.pdf" download>Resume.cv</a></li>
          </ul>
          <div className="footer flex justify-space-between">
            <p><span className="smoke-text">&copy; { new Date().getFullYear() }</span> codeeblacc. All rights reserved.</p>
            <span>@codee</span>
          </div>
        </div>
      </div>
    </header>
  )
}

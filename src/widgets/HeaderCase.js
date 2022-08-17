import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

import { getDate } from '../utils.js';

export default function HeaderCase({caseName, caseSlug}) {
  var date = getDate(new Date());
  const header = useRef(0);
  const slick = useRef(0);

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
  }, [header]);

  let history = useNavigate();

  return (
    <header ref={header}>
      <div className="container">
          <div className="row center-align">
            <div className="column large-2 medium-4 small-6">
              <Link to="/" className="brand">Codee Blacc</Link>
            </div>
            <div className="column large-3 medium-3 hide-on-med-and-small">
              <p>{caseName}<br /><span className="slick" ref={slick}>Case Study</span></p>
            </div>
            <div className="column large-5 medium-4 hide-on-small-only">
              <ul>
                <li><Link to={`/launch/${caseSlug}`}>Launch Project <ArrowUpRight color="white" /></Link></li>
              </ul>
            </div>
            <div className="column large-2 medium-4 small-6 flex center-align justify-end">
              <div className="nav-action-click" onClick={() => history(-1)}></div>
            </div>
          </div>
      </div>
    </header>
  )
}

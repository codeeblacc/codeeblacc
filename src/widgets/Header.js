import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

import { getDate } from '../utils.js';

export default function Header() {
  var date = getDate(new Date());

  return (
    <header>
      <div className="container">
          <div className="row center-align">
            <div className="column large-2 medium-4 small-6">
              <Link to="/" className="brand">Codee Blacc</Link>
            </div>
            <div className="column large-3 medium-3 hide-on-med-and-small">
              <Link to="/" className="brand">Africa, NG <br />Software Developer</Link>
            </div>
            <div className="column large-3 medium-4 hide-on-small-only">
              <ul>
                <li><Link to="/">Email <ArrowUpRight color="white" /></Link></li>
                <li><Link to="/">Github <ArrowUpRight color="white" /></Link></li>
                <li><Link to="/">Instagram <ArrowUpRight color="white" /></Link></li>
                <li><Link to="/">Resume <ArrowUpRight color="white" /></Link></li>
              </ul>
            </div>
            <div className="column large-4 medium-4 small-6 flex center-align justify-end">
              <div className="nav-action-img" data-content={date}></div>
            </div>
          </div>
      </div>
    </header>
  )
}

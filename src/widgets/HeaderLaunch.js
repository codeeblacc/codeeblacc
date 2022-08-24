import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';


export default function HeaderLaunch({caseName, caseSlug}) {
  let history = useNavigate();

  return (
    <header>
      <div className="container">
          <div className="row center-align">
            <div className="column large-2 medium-4 small-6">
              <Link to="/" className="brand">Codee Blacc</Link>
            </div>
            <div className="column large-3 medium-3 hide-on-med-and-small">
              <p>{caseName}</p>
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

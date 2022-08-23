import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ZapOff } from 'react-feather';
import HeaderLaunch from '../widgets/HeaderLaunch';

export default function LaunchDetails({detail}) {
  let history = useNavigate();

  return (
    <section id="Launch">
      <HeaderLaunch caseName={detail.name} caseSlug={detail.slug} />
      <div className="not-found">
        <div className="container">
          <div className="center-text">
            <ZapOff />
            <br /><br />
            <div className="h3">Project Closed</div>
              <p className="smoke-text">
                This project has been shutdown by the owner<br />
                Project is no longer online. Error Code — <span className="white-text">5023602</span>
              </p>
              <br />
              <center>
                <div className="nav-action-click" onClick={() => history(-1)}></div>
              </center>
          </div>
        </div>
      </div>
    </section>
  )
}

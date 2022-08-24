import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GitBranch, ZapOff } from 'react-feather';
import HeaderLaunch from '../widgets/HeaderLaunch';

export default function LaunchDetails({detail}) {
  let history = useNavigate();

  return (
    detail.is_open ? (
      <section id="Launch">
        <HeaderLaunch caseName={detail.name} caseSlug={detail.slug} />
        <div className="not-found">
          <div className="container">
            <div className="center-text">
              <GitBranch />
              <br /><br />
              <div className="h3">{detail.name}</div>
                <p className="smoke-text">
                  This project has been published.<br />
                  Project is online. {detail.category} — <span className="white-text">{detail.year}</span>
                </p>
                <br />
                <center>
                  <a href={detail.url} className="btnsec" target="_blank" rel="noreferrer"><span className="shiner">Open Site</span></a>
                </center>
            </div>
          </div>
        </div>
      </section>
    ) : (
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
  )
}

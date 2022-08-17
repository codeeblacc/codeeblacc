import React from 'react';

export default function Jumboo({header, span, subheader, content, alt}) {
  return (
    <section id="jumbo" className={alt} key={Math.random()}>
      <div className="container">
        <div className="row">
          <div className="large-2"></div>
          <div className="large-3">
            {header} <br /><span className="smoke-text">{span}</span> {subheader}
          </div>
          <div className="large-7">
            <div className="h1">
              { content }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

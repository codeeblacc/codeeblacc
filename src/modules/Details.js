import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCase from '../widgets/HeaderCase';
import { Footer } from '../widgets/Footer';

window.scrollTo(0,0);

export default function Details({detail}) {
  window.scrollTo(0,0);
  return (
    <section id="caseStudy">
      <HeaderCase caseName={detail.name} caseSlug={detail.slug} />
      <div className="header-break"></div>
      <div className="detail-break"></div>
      <div className="container">
        <div className="row">
          <div className="column large-2">
            <div className="row">
              <div className="column large-3">
                <p className="smoke-text">{detail.year}</p>
              </div>
              <div className="column large-9">
                <Link to={`/cases/${detail.slug}`} className="casebox-link">{detail.name}</Link>
              </div>
            </div>
          </div>
          <div className="column large-3">
            <p>{detail.description}</p>
          </div>
          <div className="column large-7 flex justify-end">
            <p className="smoke-text">{detail.category}</p>
          </div>
        </div>
      </div>
      <div className="detail-break"></div>
      <div className="casebox-img no-radius" style={{ backgroundImage: `url("/images/${detail.assets[0]}")` }}></div>
      <div className="container">
        <div className="description-box">
          <div className="large-3">
            <div className="h2">{detail.content[0].title}</div>
          </div>
          <br />
          <p className="large-text">{detail.content[0].description}</p>
          <div className="description-img" style={{ backgroundImage: `url("/images/${detail.assets[1]}")` }}></div>
        </div>
        <div className="description-box">
          <div className="row">
            <div className="large-3">
              <div className="h2">{detail.content[1].title}</div>
            </div>
            <div className="large-1"></div>
            <div className="large-8">
              <p className="large-text">{detail.content[1].description}</p>
            </div>
          </div>
          <div className="description-breaker"></div>
          <div className="row">
            <div className="large-6">
              <div className="description-img-alt" id="a" style={{ backgroundImage: `url("/images/${detail.assets[2]}")` }}></div>
            </div>
            <div className="large-6">
              <div className="description-img-alt" id="b" style={{ backgroundImage: `url("/images/${detail.assets[3]}")` }}></div>
            </div>
            <div className="large-6">
              <div className="description-img-alt" id="a" style={{ backgroundImage: `url("/images/${detail.assets[4]}")` }}></div>
            </div>
            <div className="large-6">
              <div className="description-img-alt" id="b" style={{ backgroundImage: `url("/images/${detail.assets[5]}")` }}></div>
            </div>
          </div>
          <div className="description-img nomar" style={{ backgroundImage: `url("/images/${detail.assets[6]}")` }}></div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

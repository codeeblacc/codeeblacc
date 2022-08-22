import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

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
        <div className="hide-on-med-and-large mbs">
          <Link className="link" to={`/launch/${detail.slug}`}>Launch Project <ArrowUpRight color="white" /></Link>
        </div>
        <div className="row">
          <div className="column large-2 medium-4 small-12">
            <div className="row">
              <div className="column large-3 small-12">
                <p className="smoke-text">{detail.year}</p>
              </div>
              <div className="column large-9 small-12 mts">
                <Link to={`/cases/${detail.slug}`} className="casebox-link">{detail.name}</Link>
              </div>
            </div>
          </div>
          <div className="column large-5 medium-6 small-12 mts">
            <p>{detail.description}</p>
          </div>
          <div className="column large-5 medium-2 small-12 mts flex justify-end no-end">
            <p className="smoke-text">{detail.category}</p>
          </div>
        </div>
      </div>
      <div className="detail-break"></div>
      <div className="casebox-img no-radius" style={{ backgroundImage: `url(${detail.assets[0]})` }}></div>
      <div className="container">
        <div className="description-box">
          <div className="large-3 medium-6 small-12">
            <div className="h2">{detail.content[0].title}</div>
          </div>
          <br />
          <p className="large-text">{detail.content[0].description}</p>
          <div className="description-img" style={{ backgroundImage: `url(${detail.assets[1]})` }}></div>
        </div>
        <div className="description-box">
          <div className="row">
            <div className="large-3 medium-6 small-12">
              <div className="h2">{detail.content[1].title}</div>
            </div>
            <div className="large-1 medium-12"></div>
            <div className="large-8 medium-12 mts">
              <p className="large-text">{detail.content[1].description}</p>
            </div>
          </div>
          <div className="description-breaker"></div>
          <div className="row">
            <div className="large-6 small-12">
              <div className="description-img-alt" id="a" style={{ backgroundImage: `url(${detail.assets[2]})` }}></div>
            </div>
            <div className="large-6 small-12">
              <div className="description-img-alt" id="b" style={{ backgroundImage: `url("${detail.assets[3]}")` }}></div>
            </div>
          </div>
          <div className="description-img nomar" style={{ backgroundImage: `url("${detail.assets[4]}")` }}></div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

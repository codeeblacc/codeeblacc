import React from 'react';
import { Link } from 'react-router-dom';

export default function CStudi({c}) {
  return (
    <div className="casebox" key={c['id']}>
      <div className="row">
        <div className="column large-2 medium-4 small-12">
          <div className="row">
            <div className="column large-3 small-12">
              <p className="smoke-text">{c['year']}</p>
            </div>
            <div className="column large-9 small-12">
              <Link to={`/cases/${c['slug']}`} className="casebox-link">{c['name']}</Link>
            </div>
          </div>
        </div>
        <div className="column large-3 medium-6 small-12 mts">
          <p>{c['description']}</p>
        </div>
        <div className="column large-7 medium-2 small-12 mts flex justify-end no-end">
          <p className="smoke-text">{c['category']}</p>
        </div>
      </div>
      <Link to={`/cases/${c['slug']}`}>
        <div className="casebox-img" style={{ backgroundImage: `url("/images/${c['assets'][0]}")` }}></div>
      </Link>
    </div>
  );
}

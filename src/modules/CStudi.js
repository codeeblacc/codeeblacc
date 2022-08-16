import React from 'react';
import { Link } from 'react-router-dom';

export default function CStudi({c}) {
  return (
    <div className="casebox" key={c['id']}>
      <div className="row">
        <div className="column large-2">
          <div className="row">
            <div className="column large-3">
              <p className="smoke-text">{c['year']}</p>
            </div>
            <div className="column large-9">
              <Link to="#" className="casebox-link">{c['name']}</Link>
            </div>
          </div>
        </div>
        <div className="column large-3">
          <p>{c['description']}</p>
        </div>
        <div className="column large-7 flex justify-end">
          <p className="smoke-text">{c['category']}</p>
        </div>
      </div>
      <Link to="#">
        <div className="casebox-img" style={{ backgroundImage: `url("/images/${c['assets'][0]}")` }}></div>
      </Link>
    </div>
  );
}

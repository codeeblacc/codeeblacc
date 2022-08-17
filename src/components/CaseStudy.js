import React from 'react';
import { useParams } from 'react-router-dom';

import { studies } from '../utils';

import Four04 from './Four04';
import Details from '../modules/Details';

export default function CaseStudy() {
  const { slug } = useParams();
  const cstud = studies.find(c => c.slug === slug);

  if (cstud) {
    document.title = `${cstud['name']} — Case Study`
  }

  return (
    <section>
      { cstud ? (
        <Details detail={cstud} />
      ) : (
        <Four04 />
      )}
    </section>
  );
}

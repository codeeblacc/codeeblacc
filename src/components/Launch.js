import React from 'react';
import { useParams } from 'react-router-dom';

import Four04 from './Four04';
import LaunchDetails from '../modules/LaunchDetails';

import { studies } from '../utils';

export default function Launch() {
  const { slug } = useParams();
  const cstud = studies.find(c => c.slug === slug)

  return (
    <section id="Launch">
      { cstud ? (
        <LaunchDetails detail={cstud} />
      ) : (
        <Four04 />
      )}
    </section>
  )
}

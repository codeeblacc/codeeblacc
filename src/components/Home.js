import React from 'react';

import Header from '../widgets/Header';
import Jumboo from '../widgets/Jumboo';
import Skilet from '../widgets/Skilet';
import CStudi from '../modules/CStudi';
import { Footer } from '../widgets/Footer';

import { studies } from '../utils';

export class Home extends React.Component {
  componentDidMount() {
    document.title = `Codeeblacc — Portfolio`;
  }

  render() {
    const castList = studies.map((c) => (<CStudi c={c} key={c['id']}></CStudi>));

    return (
      <section id="iLuGNmW">
        <Header />
        <div className="header-break"></div>
        <Jumboo header="Selected work" span="2021" subheader="- Present Day" content="Hello - I'm a Multidisciplinary Software Designer & Developer. I craft exquisite experiences with great people." />
        <div className="container">
          {castList}
        </div>
        <Jumboo header="Experience" alt="alt" span="and" subheader="Tech Stack" content="Having over 6+ years of experience in Software + Design, I have been able to grow diverse set of skills not limited to software and design." />
        <Skilet />
        <Footer />
      </section>
    );
  }
}

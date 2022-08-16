import React from 'react';

import Header from '../widgets/Header';
import Jumboo from '../widgets/Jumboo';
import Skilet from '../widgets/Skilet';
import Footer from '../widgets/Footer';
import CStudi from '../modules/CStudi';

import { studies } from '../utils';

export class Home extends React.Component {
  componentDidMount() {
    document.title = `Codeeblacc`;
  }

  render() {
    const castList = studies.map((c) => (<CStudi c={c}></CStudi>));

    return (
      <section id="home">
        <Header />
        <div className="header-break"></div>
        <Jumboo header="Selected work" span="2021" subheader="- Present Day" content="Hello - I'm a Multidisciplinary Software Designer & Developer. I craft exquisite experiences with great people." />
        <div className="container">
          {castList}
        </div>
        <Jumboo header="Experience" alt="alt" span="and" subheader="Tech Stack" content="Having over 5+ years of experience in Software + Design, I have been able to grow diverse set of skills not limited to software and design." />
        <Skilet />
        <Footer />
      </section>
    );
  }
}

import React from 'react';

import Header from '../widgets/Header';

export class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
    document.title = `Codeeblacc`;
  }

  render() {
    return (
      <section id="home">
        <Header />
      </section>
    );
  }
}

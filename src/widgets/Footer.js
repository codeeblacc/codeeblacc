import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';
import { message } from '../actions/message';

export class Footer extends React.Component {
  state = {
    "date": new Date().toLocaleTimeString(),
    "legalname": "",
    "email": "",
    "message": "",
  }

  updateTime = () => { this.setState({"date": new Date().toLocaleTimeString()})}

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateTime);
  }

  handleTop = (e) => { window.scrollTo(0,0); }

  handleModalShow = (e) => {
    let modal = document.querySelector('.modal');
    let body = document.querySelector('body');
    body.style.overflow = 'hidden';
    modal.style.display = "flex";
  }

  handleModalClose = (e) => {
    let modal = document.querySelector('.modal');
    let body = document.querySelector('body');
    let modalbox = document.querySelector('.modal-box');

    modal.classList.remove('animate__fadeIn');
    modalbox.classList.remove('animate__slideInDown');

    body.removeAttribute('style');

    modal.classList.add('animate__fadeOut');
    modalbox.classList.add('animate__slideOutUp');

    setTimeout(() => {
      modal.removeAttribute("style");
      modal.classList.remove('animate__fadeOut');
      modalbox.classList.remove('animate__slideOutUp');

      modal.classList.add('animate__fadeIn');
      modalbox.classList.add('animate__slideInDown');
    }, 400);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector('button[type=submit]').focus();
    this.handleModalClose();
    document.querySelector('.load').style.display = "flex";
    message(this.state.legalname, this.state.email, this.state.message);
  }

  render() {
    return (
      <footer>
        <div className="load animate__animated animate__fadeIn"></div>
        <div className="message animate__animated animate__zoomIn"></div>
        <div className="container">
          <div className="row">
            <div className="large-2 medium-12 small-12 flex center-align">
              <Link to="#" onClick={this.handleModalShow}>Design by me <span>👋</span></Link>
            </div>
            <div className="large-2 medium-4 small-12 flex mtb center-align justify-space-between">
              <div className="link" onClick={this.handleModalShow}>Let's work together <ArrowUpRight /></div>
            </div>
            <div className="large-1 hide-on-med-and-small"></div>
            <div className="large-3 medium-3 small-3 flex center-align">
              <Link to="#" onClick={this.handleTop} className="link">Goto Top</Link>
            </div>
            <div className="large-4 medium-5 small-9 flex center-align justify-end">
              <p><span className="smoke-text">Copyright &copy;.</span> +blacc {new Date().getFullYear()}.</p>
            </div>
          </div>
        </div>
        <div className="modal animate__animated animate__fadeIn">
          <div className="modal-close" onClick={this.handleModalClose}></div>
          <div className="modal-box animate__animated animate__slideInDown">
            <div className="modal-box-content">
              <div className="flex justify-space-between">
                <p className="smoke-text">connect</p>
                <div className="close" onClick={this.handleModalClose}></div>
              </div>
              <div className="title">Let's Get in touch</div>
              <div className="modal-header-bar"></div>
              <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <input type="text" required minLength="5" autoComplete="off" name="legalname" onChange={this.handleChange} placeholder="Enter Full Name" />
                </div>
                <div className="form-input">
                  <input type="email" required autoComplete="off" name="email" onChange={this.handleChange} placeholder="Email Address" />
                </div>
                <div className="form-input">
                  <textarea name="message" required onChange={this.handleChange} placeholder="Drop a message" rows="3" />
                </div>
                <p className="smoke-text">You can also get in touch with me using my social handles at the top header.</p>
                <br />
                <div className="flex center-align justify-space-between">
                  <button type="submit" className="button primary">Send message</button>
                  <p>{ this.state.date }</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

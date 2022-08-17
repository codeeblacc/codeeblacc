import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';

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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="large-2 flex center-align">
              <p>Design by me <span>👋</span></p>
            </div>
            <div className="large-2 flex center-align justify-space-between">
              <Link to="#" className="link">Let's work together <ArrowUpRight /></Link>
            </div>
            <div className="large-1"></div>
            <div className="large-3 flex center-align">
              <Link to="#" onClick={this.handleTop} className="link">Back to Top</Link>
            </div>
            <div className="large-4 flex center-align justify-end">
              <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="modal">
          <div className="modal-box">
            <div className="modal-box-content">
              <div className="flex justify-space-between">
                <p className="smoke-text">conenct</p>
                <div className="close"></div>
              </div>
              <div className="title">Let's get in touch</div>
              <div className="modal-header-bar"></div>
              <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <input type="text" required minLength="5" autoComplete="off" name="legalname" onChange={this.handleChange} placeholder="Legal Full Name" />
                </div>
                <div className="form-input">
                  <input type="email" required autoComplete="off" name="email" onChange={this.handleChange} placeholder="Email Address" />
                </div>
                <div className="form-input">
                  <textarea name="message" required onChange={this.handleChange} placeholder="Drop a message" rows="3" />
                </div>
                <p className="smoke-text">You can associate multiple sites with one Firebase project. Each site hosts its</p>
                <br />
                <div className="flex center-align justify-space-between">
                  <button type="submit" className="button primary">Drop</button>
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

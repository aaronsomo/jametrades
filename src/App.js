import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import { ReactComponent as IconDiscord } from './assets/icons/discord.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">JAMETRADE$ LOGO</a>
          </div>
          <div className="social">
            <a href="https://discord.com" title="Discord" target="_blank" rel="noopener noreferrer">
              <IconDiscord className="icon" />
            </a>
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com/jametrades" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/aaronsomo/jametrades" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Website Coming Soon!!</h1>
            <p>Please check back later or shoot us an email if you're curious about what we're working on!</p>
          </div>
          <a href="mailto:jametrades618@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/aaronsomo" target="_blank" rel="noopener noreferrer">Aaron Southammavong</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/aaronsomo/jametrades" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;
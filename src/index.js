import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import BlackLodge from './Components/BlackLodge';
import { ProfilePic, ProfilePic2, OwlCave, Coffee1, Log } from './assets/img';
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


class Index extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {

  }

  profilePicAnimate() {
    let profilePicImg = document.getElementById('profile-pic-img');
    if (profilePicImg.src == ProfilePic) profilePicImg.src = Log;
    else profilePicImg.src = ProfilePic;
  }


  render() {
    return (
      <div>
        <div className='center' id="profile-container">
          <div id='profile-pic-container'>
            <a onMouseLeave={this.profilePicAnimate} onMouseEnter={this.profilePicAnimate} onClick={BlackLodge.activate} href='#'>
              <img id='profile-pic-img' src={ProfilePic}></img>
            </a>
          </div>
          <div id='profile-greeting'>Hi, I'm Joe <span id='profile-icon'><img src={Coffee1}></img></span></div>
          <div id='profile-description'>Application Developer &nbsp; &#8226; &nbsp; Rutgers University</div>
          <div id='profile-social-container'>
            <a target="_blank" href='mailto:joseph.m.iannone@gmail.com'><FaEnvelopeSquare /></a>
            <a target="_blank" href='https://github.com/jmi0'><FaGithubSquare /></a>
            <a target="_blank" href='https://www.linkedin.com/in/joseph-iannone-7a6a91146/'><FaLinkedin /></a>
          </div>
        </div>
        <BlackLodge />
      </div>
    )
  }

}

ReactDOM.render(<Index />, document.getElementById('root'));

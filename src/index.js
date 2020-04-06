import React from 'react'
import ReactDOM from 'react-dom'

import './scss/index.scss'
import './scss/blacklodge.scss'

import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { ProfilePic, OwlCave, Coffee1, Log, BlackLodgeBG, BlackLodge2BG,
  TwinPeaksBG, TwinPeaks2BG, PeaksLogo } from './assets/img';


import LauraPalmersTheme from './assets/audio/laurapalmerstheme.mp3';

const BGs = [BlackLodgeBG, BlackLodge2BG, TwinPeaksBG, TwinPeaks2BG];
const BGPos = ['center', 'top', 'left', 'right', 'bottom'];
const BDColors = ['red', 'black', 'white', 'blue'];


class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      bgId: 'bg-container',
      bdId: 'bg-backdrop',
      on: false,
      lauraPalmersTheme: new Audio(LauraPalmersTheme),
      lastBGChangeKey: '',
      bgXPos: '',
      bgYPos: '',
      bgUrl: '',
    }

    this.blackLodgeActivate = this.blackLodgeActivate.bind(this);

  }

  componentDidMount() {

  }


  profilePicAnimate() {
    let profilePicImg = document.getElementById('profile-pic-img');
    if (profilePicImg.src == ProfilePic) profilePicImg.src = Log;
    else profilePicImg.src = ProfilePic;
  }

  componentWillUnmount() {
    clearInterval(this.state.bgUpdateInterval);
    clearInterval(this.state.bdUpdateInterval);
  }

  animateBG() {
    this.changeBG();
    this.changeBD();
    let self = this;
    this.setState({
      bgUpdateInterval: setInterval(function() {
        self.changeBG();
      }, 10000),
      bdUpdateInterval: setInterval(function() {
        self.changeBD();
      }, 8000)
    });
  }

  changeBG() {

    let randomPosX = this.getRandom(BGPos.length);
    let randomPosY = this.getRandom(BGPos.length);
    let randomBGsIndex = this.getRandom(BGs.length);

    // try up to 5 times if bg and position are same as last
    for (let i=0; i < 5; i++) {
      if (i < 4 && `${randomPosX}${randomPosY}${randomBGsIndex}` == this.state.lastBGChangeKey) {
        randomPosX = this.getRandom(BGPos.length);
        randomPosY = this.getRandom(BGPos.length);
        randomBGsIndex = this.getRandom(BGs.length);
      } else {
        document.getElementById('bg-container').style.backgroundPosition = `${BGPos[randomPosX]} ${BGPos[randomPosY]}`;
        document.getElementById(this.state.bgId).style.backgroundImage = `url('${BGs[randomBGsIndex]}')`;
        this.setState({
          lastBGChangeKey: `${randomPosX}${randomPosY}${randomBGsIndex}`
        });
        break;
      }
    }
  }

  changeBD() {
    let randomBDColorIndex = Math.floor(Math.random() * BDColors.length);
    document.getElementById(this.state.bdId).style.backgroundColor = `${BDColors[randomBDColorIndex]}`;
  }

  blackLodgeActivate() {
    let blToggleImg = document.getElementById('bl-toggle-icon-img');
    let blToggleContainer = document.getElementById('bl-toggle-icon-container');
    let profileContainer = document.getElementById('profile-container');
    let bgContainer = document.getElementById(this.state.bgId);
    let bdContainer = document.getElementById(this.state.bdId);
    let directedBy = document.getElementById('directed-by-container');

    if (!this.state.on) {
      this.setState({ on: true });
      this.animateBG();
      this.state.lauraPalmersTheme.loop = true;
      this.state.lauraPalmersTheme.play();
      profileContainer.style.opacity = '0';
      blToggleImg.src = ProfilePic;
      blToggleImg.style.borderRadius = '50%';
      blToggleContainer.style.paddingLeft = '5px';
      blToggleContainer.style.paddingBottom = '5px';
      bgContainer.style.opacity = '.7';
      bdContainer.style.opacity = '.6';
      directedBy.style.opacity = '1';

    } else {
      this.setState({ on: false });
      clearInterval(this.state.bgUpdateInterval);
      clearInterval(this.state.bdUpdateInterval);
      this.state.lauraPalmersTheme.pause();
      profileContainer.style.opacity = '1';
      blToggleImg.src = OwlCave;
      blToggleImg.style.borderRadius = '';
      blToggleContainer.style.paddingLeft = '13px';
      blToggleContainer.style.paddingBottom = '0px';
      bgContainer.style.opacity = '.1';
      bdContainer.style.opacity = '.1';
      directedBy.style.opacity = '0';
      bgContainer.style.backgroundImage = `url('${TwinPeaks2BG}')`;
      bgContainer.style.backgroundPosition = `left top`;
    }
  }

  getRandom(max) {
    return Math.floor(Math.random() * max);
  }


  render() {
    return (
      <div>
        <div className='center' id="profile-container">
          <div id='profile-pic-container'>
            <a onClick={this.blackLodgeActivate} onMouseLeave={this.profilePicAnimate} onMouseEnter={this.profilePicAnimate} href='#'>
              <img id='profile-pic-img' src={ProfilePic}></img>
            </a>
          </div>
          <div id='profile-greeting'>Hi, I'm Joe</div>

          <div id='profile-description'>Application Developer &nbsp; &#8226; &nbsp; Rutgers University</div>
          <div id='profile-social-container'>
            <a target="_blank" href='mailto:joseph.m.iannone@gmail.com'><FaEnvelopeSquare /></a>
            <a target="_blank" href='https://github.com/jmi0'><FaGithubSquare /></a>
            <a target="_blank" href='https://www.linkedin.com/in/joseph-iannone-7a6a91146/'><FaLinkedin /></a>
            <a id='profile-icon' onClick={this.blackLodgeActivate} ><img src={Coffee1}></img></a>
          </div>
        </div>
        <div>
          <div id='directed-by-container' className='twin-peaks-font'>
            <div id='directed-by-text-1'>Developed by</div>
            <div id='directed-by-text-2'>Joe Iannone</div>
          </div>
          <div id={this.state.bgId}></div>
          <div id={this.state.bdId}></div>
          <div id='bl-toggle-icon-container' onClick={this.blackLodgeActivate}>
            <img id='bl-toggle-icon-img' src={OwlCave}></img>
          </div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Index />, document.getElementById('root'));

/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-04-05T17:12:33-04:00
 * @Filename: index.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-04-06T09:57:49-04:00
 */



import React from 'react'
import ReactDOM from 'react-dom'

// import styles
import './scss/index.scss'
import './scss/blacklodge.scss'

// import icons
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

// import images
import { ProfilePic, OwlCave, Coffee1, Log, BlackLodge2BG,
  TwinPeaksBG, TwinPeaks2BG, PeaksLogo } from './assets/img';

// import laura palmers theme file
import LauraPalmersTheme from './assets/audio/laurapalmerstheme.mp3';

// these are utilized by animateBG, changeBG, changeBD methods
const BGs = [TwinPeaks2BG, TwinPeaksBG, BlackLodge2BG, BlackLodge2BG];
const BGPosX = ['center', 'top', 'bottom'];
const BGPosY = ['center', 'left', 'right'];
const BDColors = ['red', 'black', 'white', 'blue'];


// A component for the index page of this site/app
class Index extends React.Component {

  constructor() {

    super();

    this.state = {
      bgId: 'bg-container',
      bdId: 'bg-backdrop',
      blackLodgeOn: false,
      lauraPalmersTheme: new Audio(LauraPalmersTheme),
      lastBGIndex: 0,
      currentBGIndex: 0,
    }

    // need to access blackLodgeOn here
    this.blackLodgeActivate = this.blackLodgeActivate.bind(this);

  }


  componentWillUnmount() {
    // clear these when we're done with this component
    clearInterval(this.state.bgUpdateInterval);
    clearInterval(this.state.bdUpdateInterval);
  }


  // Only call on hover/click, changes state of profile picture
  profilePicAnimate() {
    let profilePicImg = document.getElementById('profile-pic-img');
    if (profilePicImg.src == ProfilePic) profilePicImg.src = Log;
    else profilePicImg.src = ProfilePic;
  }


  animateBG() {

    this.changeBGPos();
    this.changeBD();

    let self = this;

    this.setState({
      bgUpdateInterval: setInterval(function() {
        self.changeBG();
        self.changeBGPos();
      }, 20000),
      bdUpdateInterval: setInterval(function() {
        self.changeBD();
      }, 8000)
    });

  }

  // Randomly choose BG parameters and set
  changeBG() {

    if (this.state.lastBGIndex === (BGs.length-1))
      this.setState({
        lastBGIndex: 0,
        currentBGIndex: 0
      });
    else
      this.setState({
        lastBGIndex: this.state.currentBGIndex+1,
        currentBGIndex: this.state.currentBGIndex+1
      });

    document.getElementById(this.state.bgId).style.backgroundImage = `url('${BGs[this.state.currentBGIndex]}')`;

  }

  changeBGPos() {
    document.getElementById(this.state.bgId).style.backgroundPosition = `${BGPosX[this.getRandom(BGPosX.length)]} ${BGPosY[this.getRandom(BGPosY.length)]}`;
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

    if (!this.state.blackLodgeOn) {
      console.log(`
        Through the darkness of future's past, The magician longs to see. One
        chants out between two worlds... Fire... walk with me.
      `);
      this.setState({ blackLodgeOn: true });
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
      this.setState({ blackLodgeOn: false });
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
            <a onClick={this.blackLodgeActivate} onMouseLeave={this.profilePicAnimate} onMouseEnter={this.profilePicAnimate}>
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

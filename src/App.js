import React from 'react';
import MePic from './images/me.jpg'
import ReactPic from './images/react.png'
import PythonPic from './images/python.png'
import JSPic from './images/js.png'
import FirebasePic from './images/firebase.png'
import Arrow from './images/arrow2.png'
import './App.css'
import Parallax from 'react-rellax'
import Typewriter from 'typewriter-effect';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
    <div className='landing-section'>
      <div style={{display: 'flex', alignSelf: 'center'}}>
      <Parallax speed={10}>
        <h1 id='myname'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('tom pettit')
                .start();
            }}
          />
        </h1>
        </Parallax>
      </div>
      <div style={{display: 'block', textAlign: 'center', zIndex: 1, position: 'relative'}}>
      <Parallax speed={-5} id='arrow' style={{zIndex: 1, position: 'relative'}}>
        <img src={Arrow} height='50' width='50'></img>
      </Parallax>
      </div>
    </div>

    <div className="about-section" style={{marginTop: '0'}} >
      <div>
      <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
          <Parallax id='about-para' speed={-2}>
            <h1 style={{fontSize: 50}}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('about me')
                  .start();
              }}
            />
            </h1>
            <p id='mydesc'>Computer Science Student at Durham University</p>
            <p id='mydesc'>Web Developer</p>
            <p id='mydesc'>Python Programmer</p>

          </Parallax>
        </div>

      <div className='right-side'>
        <Parallax id='about-pic' speed={-3}>
          <img src={MePic} height='300' width='300' style={{borderRadius: '50%'}}></img>
        </Parallax>
      </div>
    </div>
    </div>

    <div className="technologies-section" style={{marginTop: '75vh', position: 'relative'}}>
    <div id='technologyword' style={{margin: '0 auto', width: '100%', position: 'relative'}}>
        <Parallax id='about-pic' speed={-3}>
          <h1>technologies</h1>
        </Parallax>
    </div>
    <Fade delay={1000}>
      <div id='technologylogos' style={{display: 'table-row', margin: '0 auto', paddingTop: '300'}}>
        <Parallax speed={9} style={{width: '25%', height: 226, display: 'table-cell'}}>
          <img src={ReactPic} />
        </Parallax>
        
        <Parallax speed={7} style={{width: '25%', height: 226, display: 'table-cell'}}>
          <img src={PythonPic} height='250' width='250' />
        </Parallax>

        <Parallax speed={5} style={{width: '25%', height: 226, display: 'table-cell'}}>
          <img src={JSPic} height='220' width='250'/>
        </Parallax>

        <Parallax speed={3} style={{width: '25%', height: 226, display: 'table-cell'}}>
          <img src={FirebasePic} height='230' width='230' />
        </Parallax>
      </div>
    </Fade>
    </div>


    <div className='another-section'>
      <h1>About Me</h1>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import MePic from './images/me.jpg'
import ReactPic from './images/react.png'
import PythonPic from './images/python.png'
import JSPic from './images/js.png'
import FirebasePic from './images/firebase.png'
import NodePic from './images/node.png'
import Arrow from './images/arrow2.png'
import './App.css'
import Parallax from 'react-rellax'
import Typewriter from 'typewriter-effect';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fade from 'react-reveal/Fade';
import HomeNavbar from './components/navbars/HomeNavbar'



function App() {
  return (
    <>
    <HomeNavbar />

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

    <div id='about-section' className="about-section" style={{position: 'relative'}} >
      <div style={{position: 'relative', bottom: 0}}>
        <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
          <Parallax id='about-para' speed={2}>
            <h1 id='about-title'>
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
            <p id='mydesc'>I also like playing tennis</p>

          </Parallax>
        </div>

        <div className='right-side'>
          <Parallax id='about-pic' speed={1}>
            <img id='meimg' src={MePic} style={{borderRadius: '50%'}}></img>
          </Parallax>
        </div>
      </div>
    </div>

    <div id="experience-section" className="technologies-section" style={{position: 'relative'}}>
      <div style={{position: 'relative', textAlign: 'center'}}>
        <div style={{position: 'relative', bottom: 0}}>
          <div id='technologyword' style={{textAlign: 'center', position: 'relative', bottom: 0, display: 'inline-block'}}>
            <Parallax speed={-3} style={{height: '229px', bottom: 0, fontFamily: 'Orbitron'}}>
                <h1>experience</h1>
            </Parallax>
          </div>
        </div>

        <div style={{textAlign: 'center', display: 'inline-block', paddingTop: '100vh'}}>
          <div style={{display: 'inline-block'}}>
            <div id='technologylogos' style={{display: 'table-row', position: 'relative', bottom: 0, width: '100%'}}>
              <Parallax speed={1} style={{display: 'table-cell'}}>
                <img id='reactpic' src={ReactPic} />
              </Parallax>
              
              <Parallax speed={3} style={{display: 'table-cell'}}>
                <img id='pythonpic' src={PythonPic} />
              </Parallax>

              <Parallax speed={2} style={{display: 'table-cell'}}>
                <img id='jspic' src={JSPic} />
              </Parallax>

              <Parallax speed={4} style={{display: 'table-cell'}}>
                <img id='firebasepic' src={FirebasePic} height='230' width='230' />
              </Parallax>

              <Parallax speed={0.5} style={{display: 'table-cell'}}>
                <img id='nodepic' src={NodePic} height='175' width='195' />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='experience-description-section' className='technologies-description-section'>
      <Fade left>
        <div className='technologyabout' style={{position: 'relative', bottom: 0}}>
        <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
            <h1 id='about-title'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('React')
                  .start();
              }}
            />
            </h1>
            <p id='mydesc'>I recently started learning React to try and improve my web development skills.</p>
            <p id='mydesc'>Since starting, I have built several websites for friends and a few personal projects on the side.</p>
            <p id='mydesc'>Examples include: <a href='https://brumafriendhistory.com/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>A History Blog</span></a>, <a href='https://hannahimaart-246f0.web.app/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>An Art Portfolio</span></a>, <a href='https://concurrentplayers.com/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>A Concurrent Player Tracker for Steam Games</span></a>, <a href='https://ukcoronatracker.web.app/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>A Coronavirus Tracker</span></a></p>

        </div>

        <div className='right-side'>
            <img id='reactpic' src={ReactPic}></img>
        </div>
        </div>
      </Fade>

      <Fade left>
        <div className='technologyabout' style={{position: 'relative', bottom: 0}}>
          <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
              <h1 id='about-title'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Firebase')
                    .start();
                }}
              />
              </h1>
              <p id='mydesc'>I have used Google's Firebase service for several of my websites. </p>
              <p id='mydesc'>This includes Firestore for storing data, and Authentication for ensuring only authorised users have certain functionality.</p>
              <p id='mydesc'>Examples include:  <a href='https://brumafriendhistory.com/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>A History Blog</span></a>, <a href='https://hannahimaart-246f0.web.app/' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>An Art Portfolio</span></a></p>
              <p id='mydesc'>Both of these sites implement both Firestore and Authentication </p>


          </div>

          <div className='right-side'>
              <img id='firebasepic' src={FirebasePic}></img>
          </div>
        </div>
      </Fade>

      <Fade left>
        <div className='technologyabout' style={{position: 'relative', bottom: 0}}>
        <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
            <h1 id='about-title'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Python')
                  .start();
              }}
            />
            </h1>
            <p id='mydesc'>I have been using Python since 2017, building many smaller projects, attending the Python Programming Club at school, as well for courseworks at university.</p>
            <p id='mydesc'>I also worked at the Rutherford Appleton Laboratory in the Scientific Computing department, where I used Python to update the software they used to view data obtained from their experiments.</p>
            <p id='mydesc'>I have recently completed the Certified Entry-Level Python Programmer Course and the Certified Associate in Python Programming Course, and am about to sit the exam for the latter.</p>
            <p id='mydesc'>My most recent Python project: <a href='https://github.com/tom-pettit/GeneralRedditBot' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>Reddit Bot</span></a></p>


        </div>

        <div className='right-side'>
            <img id='pythonpic' src={PythonPic}></img>
        </div>
        </div>
      </Fade>

      <Fade left>
        <div className='technologyabout' style={{position: 'relative', bottom: 0}}>
        <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
            <h1 id='about-title'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Node.js')
                  .start();
              }}
            />
            </h1>
            <p id='mydesc'>I first learnt Node JS at University.</p>
            <p id='mydesc'>Using the Express framework for Node.js , I wrote a server to provide JSON data through a REST API.</p>
            <p id='mydesc'>This project can be found here: <a href='https://github.com/tom-pettit/ToDoApp' target='_blank' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>To Do App</span></a></p>


        </div>

        <div className='right-side'>
            <img id='nodepic' src={NodePic}></img>
        </div>
        </div>
      </Fade>
    </div>
    
    <div id='portfolio-section' className='portfolio-section'>

    </div>
    </>
  );
}

export default App;

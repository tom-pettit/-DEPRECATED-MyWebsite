import React from 'react'
import '../../App.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class HomeNavbar extends React.Component {

    render () {
        return (
            <AppBar id='nav' position="fixed" style={{backgroundColor: 'white', boxShadow: 'none'}}>
                    <Toolbar>
                        <Typography variant="h3" className='navbar-title' style={{color: 'black', fontFamily: 'Seaweed Script', margin: 15}}>
                            <a href='/' style={{textDecoration: 'none', color: 'black'}}>tp</a>
                        </Typography>
                        <div className='navbar-buttons'>
                            <Button href='#about-section' style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'black'}} >About</Button>
                            <Button href='#experience-section' style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'black'}} >Experience</Button>
                            <Button style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'black'}} >Portfolio</Button>
                            <Button style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'black'}} >Contact Me</Button>
                        </div>
                    </Toolbar>
            </AppBar>
        )
    }
}

export default HomeNavbar
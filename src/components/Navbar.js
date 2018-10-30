import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

// SideDrawer
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Next Meetup
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('info')}>
                    Info
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('media')}>
                    Media
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('locations')}>
                    Locations
                </ListItem>

            </List> 
        </Drawer>
    );
};

class Navbar extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }


    handleScroll = () => {
       if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
       } else {
            this.setState({
                headerShow: false
            })
       }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton> 

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;
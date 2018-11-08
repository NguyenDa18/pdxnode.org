import React, { Component } from 'react';
// import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Collapse from '@material-ui/core/Collapse';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

class Info extends Component {

    state = {
        titles:['Talk Nights','Hack Nights', 'Workshops'],
        images: ['https://pbs.twimg.com/media/DG99xkLVYAATOkr.jpg', 'https://pbs.twimg.com/media/Cu_--_RUkAAGqLy.jpg', 'https://pbs.twimg.com/media/BmCm6aiCcAAjNHL.jpg'],
        desc:[
            'Every 2nd Thursday we put on a presentation night at Alchemy Code Lab where the goal is to provide high-quality presentations from people in the Node community locally and abroad. At the present we typically have local speakers present in person, and other geographically distributed speakers present remotely via talky.io.',
            'Every last Thursday we put on a hack night at Ctrl-H Hackerspace where the goal is to provide a fun and easy-going environment for individuals & groups to hack on their own projects and ask questions along the way, as well as support beginners and people who are new to Node with help in answering questions and pair-coding.',
            `We're working on reactivating our workshop series to provide some hands-on community learning experiences. Check back soon, or reach out to us to get involved!`
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500],
        expand: false
    }
    
    handleExpandClick = () => { this.setState({ expanded: !this.state.expanded }) }

    showBoxes = () => {
        const { titles, images, desc, delay, expanded } = this.state;
        return (
            titles.map((box,i)=>(
                <Zoom delay={delay[i]} key={i}>
                    <Card style={{ maxWidth: `200` }}>
                        <CardMedia component="img" image={images[i]}/>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{titles[i]}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography component="p">{desc[i]}</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                    <br />
                </Zoom>
            ))
        );
    }

    render() {
        return (
            <div className="bck_cinnamint">
                <div class="col s12 m6">
                    <Paper elevation={2}>
                        <Typography component="h1">
                            Welcome, weary traveler! Pull up a cyberchair and I'll tell you a story.
                        </Typography>
                        <Typography component="p">
                            PDXNode is a Node.js usergroup based in Portland, Oregon. We organize two meetups every month: one for talks, one for hacks. We're also working on putting together some workshops!
                        </Typography>
                    </Paper>
                    <br />
                </div>
                <div>
                    <div className="pricing_wrapper">
                        <div class="row">
                            {this.showBoxes()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Info;
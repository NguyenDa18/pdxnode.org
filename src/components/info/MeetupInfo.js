import React, { Component } from 'react';

class MeetupInfo extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(process.env.REACT_APP_FETCH_URL).then(res => res.json())
        .then(parsedJSON => console.log(parsedJSON.results))
        .catch(err => console.error(err));
    }


    render() {
        return (
            <div>
                <h1>Meetup</h1>
            </div>
        )
    }
}

export default MeetupInfo;
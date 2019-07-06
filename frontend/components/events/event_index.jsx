import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.events.map(event => (
                        <EventIndexItem event={event} key={event.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventIndex;
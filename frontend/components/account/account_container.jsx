import { connect } from 'react-redux';
import Account from './account';
import { requestEvents } from '../../actions/event_actions';
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';
import { fetchTickets } from '../../actions/ticket_actions';
import { deleteTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state, ownProps) => {
    const userId = state.session.id;
    const user = state.entities.users[userId];
    const events = state.entities.events;
    const teams = state.entities.teams;
    const venues = state.entities.venues;
    const tickets = Object.values(state.entities.tickets).filter(ticket => ticket.owner_id === userId);

    return ({
        userId: userId,
        user: user,
        tickets: tickets,
        events: events,
        teams: teams,
        venues: venues
    })
};

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents()),
    requestVenues: () => dispatch(requestVenues()),
    requestTeams: () => dispatch(requestTeams()),
    fetchTickets: () => dispatch(fetchTickets()),
    deleteTicket: (id) => dispatch(deleteTicket(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account)
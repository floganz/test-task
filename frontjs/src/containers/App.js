import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import * as CardActions from '../actions/CardAction';


class App extends Component {
    render() {
        // const { setCard } = this.props.CardActions;
        // var _this = this;
        var cards = this.props.cards;
        var Lists = this.props.statuses.map(function (item) {
            var statusCards = [];
            cards.forEach(function (card) {
                if(card.status == item.id){
                    statusCards.push(card);
                }
            });
            return(
                <List  key={item.id} cards={statusCards} status={item}/>

            );
        });

        return (
            <div className="container-lists">
                <div className='row'>
                    {Lists}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        statuses: state.statuses,
        cards:state.cards
    }
}
function mapDispatchToProps(dispatch) {
    return {
        CardActions: bindActionCreators(CardActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
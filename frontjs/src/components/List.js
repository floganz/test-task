import React, { Component } from 'react'
import Card from './Card';

export default class List extends Component {
    drop(event){

        event.preventDefault();
        var data;

        try {
            data = JSON.parse(event.dataTransfer.getData('card'));
        } catch (e) {
            // If the text data isn't parsable we'll just ignore it.
            return;
        }
        console.log('drop',data);
    }
    ondragover(event){
        event.preventDefault();
        return false;
    }
    render() {
        const {cards, status } = this.props;
        var cardlist = cards.map(function (item) {
            return (
                <Card key={item.id} data={item}/>
            );
        });
        return (
            <div className='col-md-4'>
                <div className=' panel panel-default'>
                    <div className="panel-heading">
                        {status.title}
                    </div>
                    <div onDragOver={this.ondragover} onDrop={this.drop}  className="panel-body">
                        {cardlist}
                    </div>
                </div>
            </div>

        )
    }
}
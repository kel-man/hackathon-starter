import React, {Component} from 'react';

export default props => (
    <div className='fact-well'>
        <h4 className='fact-title'>Cat Fact:</h4>
        <p className='fact-content'>{props.text}</p>
        <div className='fact-buttons'>
            <button onClick={props.getFacts} className='change-fact'>Change Cat Fact!</button>
            <button onClick={props.toggleFact} className='toggle-fact'>Hide Cat Fact</button>
        </div>
    </div>
)
import React from 'react';

export default class BookCardContent extends React.Component{
  
	render(){
		return (          
              <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">{this.props.initial.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                  {this.props.initial.author}
                </div>
                <div className="mdl-card__supporting-text">{this.props.initial.description}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Show details
                  </a> 
                </div>
              </div> 
            )
        };
}


import React from 'react';

export default class BookCard extends React.Component{
	render(){
		return (      
          <div class="mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Lorem ipsum dolor sit amet</h2>
            </div>
            <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Show details
              </a>
            </div>
          </div> 
        );
	}
}

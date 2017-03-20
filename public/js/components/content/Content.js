import React from 'react';
import BookCard from '../bookCard/BookCard';

export default class Content extends React.Component{
  
  
  
  
	render(){
		return (      
          <main class="mdl-layout__content">
            <div class="page-content">
              <div class="mdl-grid">  
                <div class="mdl-cell mdl-cell--3-col"></div>
                <div class="mdl-cell mdl-cell--6-col">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input class="mdl-textfield__input" type="search" id="search"/>
                      <label class="mdl-textfield__label" for="search">Search a book... 
                      </label> 
                    </div>
                </div>
                <div class="mdl-cell mdl-cell--3-col"></div>
              </div>
              <div class="mdl-grid">  
                <div class="mdl-cell mdl-cell--2-col"></div>                
                <div class="mdl-cell mdl-cell--8-col">
                  <BookCard/>
                </div>
                <div class="mdl-cell mdl-cell--2-col"></div>
              </div>
            </div>
          </main>
        );
	}
}

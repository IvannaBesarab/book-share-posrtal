import React from 'react';
import BookCard from '../Cards/BookCard';

export default class Content extends React.Component{
  
	render(){
		return (      
          <main className="mdl-layout__content">
            <div className="page-content">
              <div className="mdl-grid">  
                <div className="mdl-cell mdl-cell--3-col"></div>
                <div className="mdl-cell mdl-cell--6-col">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input" type="search" id="search"/>
                      <label className="mdl-textfield__label" htmlFor="search">Search a book... 
                      </label> 
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--3-col"></div>
              </div>
              <div className="mdl-grid">  
                <div className="mdl-cell mdl-cell--1-col"></div>                
                <div className="mdl-cell mdl-cell--10-col">
                  <BookCard/>
                </div>
                <div className="mdl-cell mdl-cell--1-col"></div>
              </div>
            </div>
          </main>
        );
	}
}

import React from 'react';
import {render} from 'react-dom';


import Header from './header/Header';
import Sidenav from './sidenav/Sidenav';
import Content from './content/Content';

export default class App extends React.Component{
	render(){
		return (
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header/>
            <Sidenav/>
            <Content/>
         </div>
        );
	}
}

import React from 'react';

import Header from './header/Header';
import Sidenav from './sidenav/Sidenav';
import Content from './content/Content';

export default class App extends React.Component{
	render(){
		return (
          <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header/>
            <Sidenav/>
            <Content/>
         </div>
        );
	}
}

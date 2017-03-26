import React from 'react';
import BookCardContent from './BookCardContent';
import getBooks from './../../services/CardService';

var data = [{
      "id":0,
      "title": "Світила",
      "description": "porchetta round belly biltong round mignon ground pancetta ham jowl pork ribs                       corned ball shankle turkey mignon beef ribeye short tail ground turducken                      bresaola steak spare ribeye pork ball andouille steak ribs bierschinken doner                       ground bacon andouillette hock swine turducken",
      "author":"Еліонор Каттон",
      "publishDate": 2013,
      "language":"Укр",
      "ownerId": 1,
      "location":"",
      "isBorrowed": false,
      "reviews": [""]      
    },
           {
      "id":1,
      "title": "СвітилаBl",
      "description": "LLporchetta round belly biltong round mignon ground pancetta ham jowl pork ribs                       corned ball shankle turkey mignon beef ribeye short tail ground turducken                      bresaola steak spare ribeye pork ball andouille steak ribs bierschinken doner                       ground bacon andouillette hock swine turducken",
      "author":"HЕліонор Каттон",
      "publishDate": 2013,
      "language":"Укр",
      "ownerId": 1,
      "location":"",
      "isBorrowed": false,
      "reviews": [""]      
    }]


export default class BookCard extends React.Component{  
  render(){      
    return (
      <div className="display-flex">
          { data.map( (item, index) =>
              <BookCardContent initial={item} key={'book_' +index}/>
            )
          }           
      </div>
    );
  }
};
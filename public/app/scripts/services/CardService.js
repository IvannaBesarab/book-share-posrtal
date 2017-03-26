export default function getBooks(){
  
  return new Promise(function(resolve, reject){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './../data/books.json', true);

    xhr.onload = function(){

      if (this.status != 200) {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      } else {
        // вывести результат
        resolve(this.response);        
      } 
    }
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();  
    
  })
  
}

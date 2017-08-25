import React from 'react';

const helloImg = {
src:'https://i.ytimg.com/vi/C2O7lM0bU0g/maxresdefault.jpg',
alt:"hello world",
width:'80%',
height:'100%'
};


class App extends React.Component {
get name(){
  return 'Brett';
}
   render() {
      return (
         <div>
            <h1>Hello World!!!</h1>
            <h2>{5+5}</h2>
            <img
            src = {helloImg.src}
            alt = {helloImg.alt}
            width={helloImg.width}
            height = {helloImg.height}/>
            <p>testing multiple lines of jsx</p>
            <p>this will render too</p>
            <h1>My name is {this.name}.</h1>

         </div>
      );
   }
}

export default App;

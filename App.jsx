import React from 'react';

const helloImg = 'https://i.ytimg.com/vi/C2O7lM0bU0g/maxresdefault.jpg';



class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Hello World!!!</h1>
            <h2>{5+5}</h2>
            <img src = {helloImg}/>
            <p>testing multiple lines of jsx</p>
            <p>this will render too</p>

         </div>
      );
   }
}

export default App;

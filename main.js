import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const helloImg = 'https://i.ytimg.com/vi/C2O7lM0bU0g/maxresdefault.jpg';

const worldImg = < img src = {
  helloImg
}
/>

ReactDOM.render(worldImg, document.getElementById('app'));

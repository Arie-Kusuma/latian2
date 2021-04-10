import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Ren (){
  return <h1>asu</h1>;
}

ReactDom.render(<Ren/>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
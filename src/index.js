import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './index.css';

// const {useState} = React ;

class Developer{

  constructor(depan,belakang){
    this.depan = depan;
    this.belakang = belakang;
  }

  sikat(){
    return this.depan+' '+this.belakang;
  }
}

const arie = new Developer('arie', 'kusuma');

class Welcome extends React.Component{
  render(){
    return<h1>{this.props.name}</h1>;
  }
}


function Ren (){
  var [text,fuck] = useState(0);
  return <>

    <h1>{arie.sikat()}</h1>
    <h1>{text}</h1>
    <button onClick ={() => fuck(++text)}>coba</button>
    <Welcome name="anijng"/>
  </>


};


ReactDom.render(<Ren/>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
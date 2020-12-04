import React from 'react';


import vaporwave from './vaporwave.mp4';
import markspin from './markspin.mp4';
import beigegreen from  './2dbg.mp4';
import plainBG from './plain_beige.mp4';
import skateboard from './skateboard.mp4';
import contact from './contact.mp4';

import degheader from './degheader.png';
import './App.css';



/*{changeBackground('#f4f2d3')}*/


class App extends React.Component{
  constructor(props){
    super()

    this.state = {vbg : plainBG,
                  children: []
                                };

    this.handleClick = this.handleClick.bind(this);
    this.handleLeave = this.handleLeave.bind(this);


    this.handleSpin = this.handleSpin.bind(this);
    this.handlebeigeGreen = this.handlebeigeGreen.bind(this);
    this.handleskateboard = this.handleskateboard.bind(this);
    this.handleContact = this.handleContact.bind(this);

    /* this.hoverTest = this.hoverTest.bind(this);
    

    this.TextBox = this.TextBox.bind(this); */
    


  }

  hoverTest(){
    this.setState()
  }






  handleClick(){
    this.setState({vbg : vaporwave})
  }

  handleSpin(){
    this.setState({vbg : markspin})
  }

  handleLeave(){
    this.setState({vbg : plainBG})
  }

  handlebeigeGreen(){
    this.setState({vbg : beigegreen})
  }

  handleskateboard(){
    this.setState({vbg : skateboard})
  }

  handleContact(){
    this.setState({vbg : contact})
  }


/*   TextBox(){
    // this.setState({TB : TextTest})
    this.setState({
      children: [
        ...children,
        <body/>
      ]

    })
  } */;
  



/*

 function handleClick(e) {
    e.preventDefault();
      this.setState.src={myBackground2};
  };


  *BUTTON IMAGE CODE
  <img src={myImage} className="myImage"alt="" />
  */


render(){
  //children = datatype
  
  return (
    
    <div className="App">
    <video 
    className='videoBg' 
    key = {this.state.vbg}
    onMouseOver = {this.handleLeave}
    autoPlay 
    loop 
    muted>
        <source src={this.state.vbg} type='video/mp4' />
      </video>
      
      <a1 className='header'>
      <img src={degheader} className="myImage"alt="" /></a1>
      <button 
        
        className='Button1'
        onMouseOver={this.handlebeigeGreen}>
          2D Portfolio
      </button>

      <button 
        
        className='Button2'
        onMouseOver={this.handleClick}>
          3D Portfolio
      </button>

      <button 
        
        className='Button3'
        onMouseOver={this.handleContact}>
          Contact
      </button>

      <button 
        
        className='Button4'
        onMouseOver={this.handleskateboard}>
          Skateboard
      </button>

      <button 
        
        className='Button5'
        onMouseOver={this.handleClick}>
          Graphic Design
      </button>

      <button 
        
        className='Button6'
        onMouseOver={this.handleClick}>
        
         {/* onClick={this.TextBox()}
         key = {this.state.TB}
        {this.state.children.map(child => child)} */} 
          Pickles
      </button>
        

    </div>
    
    
  );

  }
}

export default App;
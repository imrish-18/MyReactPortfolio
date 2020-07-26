import React, { Component } from 'react';
import '../css/bootstrap.css'
import Projects from './Projects'
import SocialProfile from './SocialProfile'
import Title from './title'
// import Jokes from './Jokes'
import Header from './Header'
class App extends Component {
  state = {
   displayBio: false
}

  toggleDisplayBio=()=>
  {
    this.setState({displayBio:!this.state.displayBio})
  }
  render() {
    return (
      <div className="text-center">
        <Header></Header>
        <h1 className="text-info" id='p'>Hello!</h1>
       <Title></Title>
        <p className="text-success">I'm always looking forward working on meaningful projects</p>
        {this.state.displayBio?<div>
          <p className="text-dark" id='p'>I'm from new delhi and love to code everyday</p>
          <p className="text-dark" id='p'>My favorite language is java and i think springBoot is awesome</p>
          <p className="text-dark">
            Besides Coding, I also love cricket
          </p>
          <button onClick={this.toggleDisplayBio}>read less</button>
        </div>:
        <div>
          <button  className='btn btn-dark text-info' onClick={this.toggleDisplayBio}>read more</button>
          </div>}
          <hr/>
          <Projects></Projects>
          <hr/>
          <SocialProfile></SocialProfile>
         <hr>
         </hr>
    
        </div>
    );
    }   
  
}

export default App;

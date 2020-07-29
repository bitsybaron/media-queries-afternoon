import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownVisible: false,
    }
    this.toggleDropDown = this.toggleDropDown.bind(this)
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
          <button className="menu" onClick={this.toggleDropDown}>MENU</button>
          <nav>
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
  
        </header>
        {
            this.state.dropDownVisible ? 
           (
           <nav className="dropDown" >
             
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>) : null}
        {/* <div className="block">
          <p>Welcome To Our Studio!</p>
          <p>IT'S NICE TO MEET YOU</p>
          <p>TELL ME MORE</p>
        </div> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import DigitHolder from './DigitHolder/DigitHolder';
import BtnControler from './BtnControler/BtnControler';
import Laps from './laps/Laps'

class App extends Component {

  state = {
    time:{
      min: 0,
      sec: 0,
      mili: 0
    },
    laps:[]
  }
  getStart(){
    this.intervalId = setInterval( () =>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili
  
      if (mili >= 100) {
        sec = sec + 1
        mili = 0
      }
      if (sec >= 60) {
        min = min + 1
        sec = 0
      }
      this.setState({
        ...this.state,
        time:{
          min,
          sec,
          mili: mili + 1
        }
      })
    }, 10 )
  }

  getPause(){
    clearInterval(this.intervalId)
  }

  getLap(){
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps:[time, ...this.state.laps]
    })
  }

  getReset(){
    this.setState({
      time:{
        min: 0,
        sec: 0,
        mili: 0
      },
      laps:[]

    })
  }
  


  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-3 p-4">
              <Title />
              <DigitHolder time ={this.state.time}/>
              <BtnControler 
                start = {this.getStart.bind(this)}
                pause = {this.getPause.bind(this)}
                reset = {this.getReset.bind(this)}
                lap   = {this.getLap.bind(this)}
              />
              <Laps 
                className = "my-3"
                laps = {this.state.laps}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

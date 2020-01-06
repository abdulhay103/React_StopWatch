import React, { Component } from 'react'

export class BtnControler extends Component {

        state = {
            start : true,
            pause : false,
            lap   : false,
            reset : false
        }

        startHandler(){
            this.setState({
                ...this.state,
                start : false,
                pause : true,
                lap : true
            })
            this.props.start()
        }

        pauseHandler(){
            this.setState({
                ...this.state,
                start : true,
                pause : false,
                lap : false,
                reset : true
            })
            this.props.pause()
        }

        lapHandler(){
            
            this.props.lap()
        }

        resetHandler(){
            this.setState({
                ...this.state,
                start : true,
                pause : false,
                lap : false,
                reset : false
            })
            this.props.reset()
        }

        controler(){
            let output = null
            if (this.state.start && !this.state.pause) {
                output = (
                    <div className="py-3">
                        <button className="btn btn-success btn-lg px-5"
                            onClick = { e => this.startHandler()}
                            >Start
                        </button>
                    </div>  
                )
            } else if(this.state.pause && this.state.lap ){
                output = (
                    <div className="py-3">
                        <button className="btn btn-primary btn-lg px-5"
                            onClick = { e => this.pauseHandler()}
                            >Pause
                        </button>
                        <button className="btn btn-warning btn-lg px-5 ml-5"
                            onClick = { e => this.lapHandler()}
                            >Lap
                        </button>
                    </div>  
                )
            }
            if(this.state.start && this.state.reset ){
                output = (
                    <div className="py-3">
                        <button className="btn btn-success btn-lg px-5"
                            onClick = { e => this.startHandler()}
                            >Start
                        </button>
                        <button className="btn btn-danger btn-lg px-5 ml-5"
                            onClick = { e => this.resetHandler()}
                            >reset
                        </button>
                    </div>  
                )
            }
            return output
        }

    render() {
        return this.controler()
    }
}

export default BtnControler

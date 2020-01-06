import React, { Component } from 'react';
import './Title.css'

export class Title extends Component {

    state = {
        title: "This is dummy Title!",
        isInput: false
    }

    editHandler(){
        this.setState({
            ...this.state,
            isInput: true
        })
    }
    inputChanger(e){
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }
    keyPressHandler(e){
        if ( e.key === 'Enter') {
            this.setState({
                ...this.state,
                isInput: false 
            })
        }
    }
    onBlurHandler(e){
        this.setState({
            ...this.state,
            isInput: false 
        })
    }

    render() {

        let outPut = null

        if (this.state.isInput) {
            outPut = (
                <div className="title">
                    <input
                        type="text" 
                        className="form-control"
                        value={this.state.title}
                        onChange={e => this.inputChanger(e)}
                        onKeyPress={ e => this.keyPressHandler(e)}
                        onBlur= { e => this.onBlurHandler(e)}
                    />
                </div>
            )
        } else {
           outPut = (
               <div className="d-flex title">
                   <h1>{this.state.title}</h1>
                   <span className="ml-5 editIcon" onClick={ () => this.editHandler()}><i className="fas fa-pencil-alt"></i></span>
               </div>
           )
        }
        return (
            <div>
                {outPut}
            </div>
        )
    }
}

export default Title

import React, { Component } from 'react'
import {connect} from 'react-redux'

 class App extends Component {
      render() {
            var listItems=[];
          for(var i=0;i<10;i++){
             listItems.push(<button key={i}value={i} onClick={this.props.handleClick}>{i}</button>)
          }
        return (
            <div>
                <input  type="text" value={this.props.input} readOnly/>
                <input type="number" value={this.props.res} readOnly/>
                <br/>
                {listItems}
                <button value="+" onClick={this.props.handleClick}>+</button>
                <button value="-" onClick={this.props.handleClick}>-</button>
                <br/>
                <button value="/" onClick={this.props.handleClick}>/</button>
                <button value="*" onClick={this.props.handleClick}>*</button>
                <button value="(" onClick={this.props.handleClick}>(</button>
                <button value=")" onClick={this.props.handleClick}>)</button>
                <button value="del" onClick={this.props.handleDelete}>Del</button>
                <button onClick={this.props.handleResult}>=</button>
                <button onClick={this.props.handleAll}>ClearAll</button> 

                <p>{this.props.res? `The result is: ${this.props.res}`:null}</p>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        input:state.input,
        res:state.finalres
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{ 
        handleClick:(e)=>{
            const action={type:'CALC',payload:e.target.value}
            dispatch(action)
        },
        handleResult:()=>{
            const action={type:"FINAL_RES"}
            dispatch(action)
        },
        handleDelete:()=>{
            const action={type:'DEL'}
            dispatch(action)
        },
        handleAll:()=>{
            const action={type:'CLEAR'}
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

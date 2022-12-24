import React, {Component} from 'react'

class ComponentFunc extends Component
{
    constructor(props){
        super(props)
        this.state={
            data:'',
            show:true
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    abc(){
        this.setState({data : 'Suraj'})
    }

    render(){
        return(
            <div>
                <h1>Hello {(this.state.data).length>0?this.state.data:'Guest'}</h1>
                <button onClick={()=>{this.abc()}}>Click me</button>                              
                {this.state.show?<h1>Show</h1>:<h1>Hide</h1>}
               
            </div>
        )
    }
}

export default ComponentFunc;
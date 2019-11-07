import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './Num.css'

export default class Num extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        
        // fetch('https://cnodejs.org/api/v1/topics')
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        //     this.setState({
        //         data:res.data
        //     })
        // })

    }
    render() {
        return (
            <div id="num">
                <li>
                    <Link to={'/page'}>1</Link>
                    <Link>2</Link>
                    <Link>3</Link>
                    <Link>4</Link>
                    <Link>5</Link>
                    <Link>6</Link>
                    <Link>7</Link>
                    <Link>8</Link>
                    <Link>9</Link>
                    <Link>10</Link>
                </li>
            </div>
        )
    }
}

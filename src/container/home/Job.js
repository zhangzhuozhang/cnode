import React, { useState, useEffect, Component } from 'react';
import {Link} from 'react-router-dom'
import "./All.css"


export default class Job extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=job')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    
    render() {
        return (
            <div>
                {
                this.state.data.map((item) =><li key={item.id}><img src={item.author.avatar_url}/>
                <span id="title1">{item.reply_count}/{item.visit_count}</span><Link to={'/content/'+item.id} id='title'>{item.title}</Link>
                <span id="small_1">2小时前</span><img src={item.author.avatar_url} id="small"/></li>) 
                }
                <div id="num">
                <li>
                    <Link to={'/page/?tab=job'}>1</Link>
                    <Link to={'/page/?tab=job&page=2'}>2</Link>
                    <Link to={'/page/?tab=job&page=3'}>3</Link>
                    <Link to={'/page/?tab=job&page=4'}>4</Link>
                    <Link to={'/page/?tab=job&page=5'}>5</Link>
                    <Link to={'/page/?tab=job&page=6'}>6</Link>
                    <Link to={'/page/?tab=job&page=7'}>7</Link>
                    <Link to={'/page/?tab=job&page=8'}>8</Link>
                    <Link to={'/page/?tab=job&page=9'}>9</Link>
                    <Link to={'/page/?tab=job&page=10'}>10</Link>
                </li>
               </div>
            </div>
        )
    }
}

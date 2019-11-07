import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div style={{margin:'10px 170px'}}>
                用户名：<input type="text"/><br/>
                  密码：<input type="text" style={{marginLeft:'15px'}}/><br/>
                  <Link to="/home/all"><button style={{width:'150px',height:"30px",margin:'30px 65px',
                backgroundColor:'#66ff00',border:"none"}}>登录</button></Link>
                
            </div>
        )
    }
}


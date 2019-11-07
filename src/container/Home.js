import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import All from './home/All';
import Good from './home/Good';
import Ask from './home/Ask';
import Job from './home/Job';
import Share from './home/Share';
import Test from './home/Test';
import './home.css';
import Num from './Num'
import Content from './Content'
import Page from './Page'
export default class Home extends Component {
    render() {
        var url = this.props.match.url;
        return (
            <Router>
                <div>
                    <div className='shou'>
                        <button><Link to='/home/all'>全部</Link></button>
                        <button><Link to='/home/good'>精华</Link></button>
                        <button><Link to='/home/share'>分享</Link></button>
                        <button><Link to='/home/ask'>问答</Link></button>
                        <button><Link to='/home/job'>招聘</Link></button>
                        <button><Link to='/home/test'>客户端测试</Link></button>
                    </div>
                    <div>
                        <Route path='/home/all' component={All}/>
                        <Route path='/home/good' component={Good}/>
                        <Route path='/home/share' component={Share}/>
                        <Route path='/home/ask' component={Ask}/>
                        <Route path='/home/job' component={Job}/>
                        <Route path='/home/test' component={Test}/>
                        <Route path='/page/?' component={Page}/>
                        <Route path='/content/:id' component={Content}/>
                        
                    </div>
                    {/* <Num/> */}
                </div>
            </Router>

        )
    }
}

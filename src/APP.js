import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
// import Content from './container/Content'

export default class APP extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className='main'>
                    <div className='content'>
                            <Route path='/home/all' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login}/>
                            {/* <Route path='/content/:id' component={Content}/> */}
                    </div>
                    <div className='sider'>
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                        <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>

                    </div>
                </div>
        
            </Router>

        )
    }
}

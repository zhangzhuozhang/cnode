import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {

            data: "",

        }

    }

    componentDidMount(){
        var id=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({
                data:res.data.content
            })
        })

    }
    render() {
        return (
            <div>
                {
                   <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                }
            </div>
        )
    }
}

// import React, { Component } from 'react'

// class CBCStateEx extends Component {
//     constructor(){
//         super();
//         this.state={
//             users:["vamshi", "579" , "vaishali" , "chethan" , "ranjith"],
//             num:100
//         };  
//     }
//     changeNumber=()=>{
//         this.setState({num:200})
//     }
//     render(){
//         console.log(this);
//         return (
//             <div>
//                 {
//                     this.state.users.map((user ,i)=>{
//                         return<li key={i}>{user}</li>
//                     })
//                 }
//                 <h1>{this.state.num}</h1>
//                 <button onClick={this.changeNumber}>Change number</button>
                
//             </div>
//         )
//     }

// }
import React, { Component } from "react";

class CBCstateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["611" , "612" , "613" , "626"],
            num:100
        };
    }
    changeNumber=()=>{
        this.setState({num:200})
    }
    render() {
        console.log(this.state);
        return (
            <div>
                {
                    this.state.users.map((user , i)=>{
                        return <li key={i}>{user}</li>
                    })
                }
                <h1>{this.state.num}</h1>
                <button onClick={this.changeNumber}>Change number</button>
                </div>
        )
    }
}
export default CBCstateEx;
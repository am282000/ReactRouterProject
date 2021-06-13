import React,{Component} from 'react';
import './Form.css';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={fullname:"Ashish Madaan",
                    email:"abc@gmail.com",
                    phone:"7015875465",
                    message: "Write something"
                }
    }

    // handlename =(event)=>{
    //     this.setState({fullname:event.target.value})
    //     // console.log(event.target.value);
    // }
    // handleemail =(event)=>{
    //     this.setState({email:event.target.value})
    //     // console.log(event.target.value);
    // }
    // handlephone =(event)=>{
    //     this.setState({phone:event.target.value})
    //     // console.log(event.target.value);
    // }
    // handlemessage =(event)=>{
    //     this.setState({message:event.target.value})
    //     // console.log(event.target.value);
    // }

    handlechangeall = (event) =>{
         this.setState ( { [event.target.name] :event.target.value  } )
}

    handlesubmit=(event)=>{
        alert(` 
                my name is ${this.state.fullname}.
                my email is ${this.state.email}.
                my phone is ${this.state.phone}.
                my message is ${this.state.message}. `);
        //alert(JSON.stringify(this.state));
        console.log(JSON.stringify(this.state));
        event.preventDefault();
    }

    render (){
        return (
            <div className="form">
                <form onSubmit={this.handlesubmit} >
                    <label> Full Name </label><br/>
                    <input name="fullname" value={this.state.fullname} type="text" onChange={this.handlechangeall} /><br/>

                    <label> Email </label><br/>
                    <input name="email" value={this.state.email} type="email" onChange={this.handlechangeall} /><br/>

                    <label> Phone </label><br/>
                    <input name="phone" value={this.state.phone} type="number" onChange={this.handlechangeall} /><br/>

                    <label> Message </label><br/>
                    <textarea name="message" value={this.state.message} onChange={this.handlechangeall} /><br/>

                    <input type="submit" value="Send" /><br/>
                </form>
            </div>
        )
    }
}

export default Form; 




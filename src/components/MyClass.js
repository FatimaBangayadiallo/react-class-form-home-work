import React from 'react';

 export class ClassForm extends React.Component {
   constructor(){
     super();
     this.state = {
       name: "" ,
       email: "",
       password: ""
     };
   }
   handleName(e){
     this.setState({name: e.target.value})
   };
   handleEmail(e){
     this.setState({email: e.target.value})
   };
   handlePassword(e){
     this.setState({password: e.target.value})
   }
   handleSubmit(e){
     e.preventDefault()
     this.setState({name: "", email: "", password: ""})
   };


  render(){
    return(
     <form onSubmit={(e) => this.handleSubmit(e)}>
      <input name = 'name' type = 'txt' value = {this.state.name} onChange ={(e) =>this.handleName(e)} />
      <input name = 'email' type='email' value = {this.state.email} onChange={(e) =>this.handleEmail(e)}/>
      <input name="password" type="password" value={this.state.password} onChange={(e) =>this.handlePassword(e)} />
      <input type= "submit"/>
     </form>

    );
  }
};

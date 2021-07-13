import React, {Component, createRef} from "react";
import axios from "axios"

interface IState{
  result:any;
}
interface IProps{

}
class Get extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      result:{}
    }
  }
componentDidMount(){
   axios.get("http://localhost:8080/login").then((posres)=>{
       const {data}=posres;
       this.setState({
           result:data
       })
   },(errres)=>{
       console.log("erres")
   })
}
  render(){
    return(
      <React.Fragment>
        <h1>{JSON.stringify(this.state.result.uname)}</h1>
      </React.Fragment>
    )
  }
}
export default Get;
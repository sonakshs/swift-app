import { h, Component } from "preact";
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Snackbar/style.css';
import 'preact-material-components/Theme/style.css';
import style from "./style.css";

interface Props {
  availableUsers: object[];
  setUserId: any
}

interface State {
  userInput: string,
}

export default class Login extends Component<Props, State> {
  bar: any;
  state: State = {
    userInput: '',
  };
  
  validateInput = () => {
    let found = false;
    var availablUsers = this.props.availableUsers;
    availablUsers.filter((user) => {
      if(user['email'] == this.state.userInput){
        this.props.setUserId(user['id'])
        found = true;
      }
      else if(user['email'].toLowerCase()==this.state.userInput.toLowerCase()){
        this.bar.MDComponent.show({
          message: "Syntax Error in Email!"
        });
      }
    });
    if(!found){
      this.bar.MDComponent.show({
        message: "Email non-existent!"
      });
    }
  }
  handleKeyPress = (target) => {
    if(target.charCode==13){
      this.handleChange();
      this.validateInput();  
    } 
  }
  handleChange = () => {
    var elem = (document.getElementById('userInput') as HTMLInputElement)
    this.setState({userInput: elem.value})
  }

  render({ availableUsers }, { userInput }) {
    return (
      <div class={style.login}>
        <div class={style.header}>
          LOGIN
        </div>
        <div>
          <input class={style.input} onKeyPress={this.handleKeyPress} type="text" name="email" id="userInput" value={userInput} placeholder="Enter your email" onChange={this.handleChange}/>
        </div>
        <Snackbar ref={bar=>{this.bar=bar;}}/>
      </div>
    );
  }
}

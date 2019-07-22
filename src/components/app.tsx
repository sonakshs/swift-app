/*swift-app
author='Sonaksh'
github.com/sonakshs*/

import { h, Component } from "preact";
import 'preact-material-components/LayoutGrid/style.css';
import Header from "./header";
import Dashboard from "./dashboard";
import Login from "./login";
import style from "./style.css";

interface State {
  userId: number;
  availableUsers: object[];
  loggedIn: boolean
}

export default class App extends Component<any, any> {
  state: State = {
    userId: null,
    availableUsers: [],
    loggedIn: false
  };

  componentDidMount() {
    var availableUsers = this.state.availableUsers;
    console.log(availableUsers,'available')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => json.map(user => availableUsers.push({ 'id': user.id, 'email': user.email })))
    .then(() => this.setState({availableUsers}))
  }

  login = (userId) => {
    this.setState({ userId, loggedIn: true })
  }

  logout = () => {
    this.setState({ userId: null, loggedIn: false });
  }

  render({},{ userId, loggedIn }) {
    return (
      <div id="app" class={style.mainGrid}>
          {loggedIn?
          <div>
            <Header logout={this.logout}/>
          </div>
          :
          null}
          <div>
          {loggedIn?
            <Dashboard userId={userId}/>
            :
            <Login availableUsers={this.state.availableUsers} setUserId={this.login}/>
          }
          </div>
      </div>
    );
  }
}

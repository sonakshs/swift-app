import { h, Component } from "preact";
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import style from "./style.css";

interface Props {
  user: object;
}

interface State {
}

export default class ProfileCard extends Component<Props, State> {
  
  render({ user }, {}) { 
    return(
        <Card class={style.userCard}>
        <div class={"card-header"+style.userDiv}>
          <div class={style.userDiv}>
            <div class={"mdc-typography--title "+style.userName}>
              {user.name ? user.name : "User Name"}
            </div>
            <div>
              {user.email ? user.email : "email" }
            </div>
            <div>
              {user.phone ? user.phone : "phone"}
            </div>
          </div>
          <div class={style.companyDiv}>
            <div class={"mdc-typography--title "+style.companyName}>
              {user.company?user.company['name']?user.company['name']:"Company Name":"Company Name"}
            </div>
            <div class={style.catchPhrase}>
              {user.company?user.company['catchPhrase']?user.company['catchPhrase']:"Company Catch Phrase":"Company Catch Phrase"}
            </div>
          </div>   
        </div>
        </Card>
    );
  }
}

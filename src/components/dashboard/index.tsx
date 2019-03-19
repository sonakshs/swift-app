import { h, Component } from "preact";
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import style from "./style.css";
import Post from "./post";
import ProfileCard from "./profileCard";

interface Props {
  userId: number;
}

interface State {
  posts: object[];
  user: object
}

export default class Dashboard extends Component<Props, State> {
  state: State = {
    user: {
      "name": "",
      "phone": "",
      "email": "",
      "company":{
        "name": "",
        "catchPhrase": ""
      }
    },
    posts: []
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/'+this.props.userId)
    .then(response => response.json())
    .then(json => this.setState({user: json}))
  
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+this.props.userId)
    .then(response => response.json())
    .then(json => this.setState({posts: json}))
  }
  render({ userId }, { user, posts }) { 
    const Posts = this.state.posts.map((post) => {
      return(
        <Post post={post}/>
      )
    });

    return (
      <div class={style.dashboard}>
        <ProfileCard user={user}/>
        <div class={style.postsBigDiv}>
          {Posts}
        </div>

      </div>
    );
  }
}

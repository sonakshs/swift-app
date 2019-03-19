import { h, Component } from "preact";
import style from "./style.css";

interface Props {
  post: object;
}

interface State {
}

export default class Post extends Component<Props, State> {
  state: State = {
  };

  render({ post }, { }) {
    return (
      <div class={style.postDiv}>
        <div class="card-header">
          <div class={ style.postTitle+" mdc-typography--title"}>{post.title ? post.title : "post title"}</div>
          <div class=" mdc-typography--caption">{post.body ? post.body : "post body"}</div>
        </div>
      </div>
    );
  }
}

import { h } from "preact";

import style from "./style.css";
import { Button } from "preact-material-components/Button";

export default (props) => (

  <header class={style.header}>
    <h1>SwiftDash</h1>
    <nav>
      <Button class={style.logout} onClick={() => props.logout()}>
        Logout
      </Button>
    </nav>
  </header>
);

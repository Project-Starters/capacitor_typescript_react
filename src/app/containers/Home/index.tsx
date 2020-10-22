import * as React from "react";
import * as style from "./style.scss";
interface Props { }
interface State {
}


export class Home extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div className={style.wrapper}>
      </div>

    );
  }
}

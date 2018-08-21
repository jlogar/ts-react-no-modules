namespace components {
    export interface StatefulCompProps {
        t1init: number
    }
    export interface StatefulCompState {
        t1: number
    }
    export class StatefulComp extends React.Component<StatefulCompProps, StatefulCompState>{
        constructor(props: StatefulCompProps) {
            super(props);
            this.state = {
                t1: props.t1init
            }
        }
        render() {
            return React.createElement("div", undefined, `hello ${this.state.t1}. stateful ain't it?`,
                React.createElement("button", { onClick: this.click }, "click me! increment me!!")
        );
        }
        click = () => {
            this.setState({ t1: this.state.t1 + 1 });
        }
    }
}
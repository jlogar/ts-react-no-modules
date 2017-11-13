namespace components {
    export class StatelessComp extends React.Component {
        render() {
            return React.createElement("div", undefined, `i'm so stateless`,
                React.createElement("button", { onClick: ()=>{} }, "click me! i do nothing!")
            );
        }
    }
}
namespace main {
    import StatelessComp = components.StatelessComp;
    ReactDOM.render(
        React.createElement('div', undefined, 'vanilla react from ts'), document.getElementById("example1")
    );
    ReactDOM.render(
        <div>JSX react from ts</div>, document.getElementById("example2")
    );
    ReactDOM.render(
        <StatelessComp/>, document.getElementById("example3")
    );
    // ReactDOM.render(
    //     hh.div('react-hyperscript-helpers rendered div'), document.getElementById("example4")
    // );
    // ReactDOM.render(
    //     a({href: 'abc'}, 'react-hyperscript-helpers rendered link'), document.getElementById("example5")
    // );
    ReactDOM.render(
        React.createElement(components.StatelessComp, undefined),document.getElementById("example6")
    );
    ReactDOM.render(
        React.createElement(components.StatefulComp, { t1init: 120 }), document.getElementById("example7")
    );
}
//source vanilla js to be used with browserify so that react & friends can be loaded into our moduleless app
//globalize all, coz we don't use modules here (namespaces only) and we want to use global shortcuts for these
window.React = require("react");
window.ReactDOM = require("react-dom");
window.h = require("react-hyperscript");
window.hh = require("react-hyperscript-helpers");

ReactDOM.render(hh.div('hh from vanila js'), document.getElementById("example1"));

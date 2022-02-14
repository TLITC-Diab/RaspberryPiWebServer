
var React = require("react")
import { Helmet, HelmetProvider } from 'react-helmet-async';

// we add React to global scope to allow react pages without require('react') in them.
window.React = React
var App = require('./hotwrap.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js')
App = (App && App.default)?App.default : App;
const { hydrate } = require('react-dom')


const props = JSON.parse(
  initial_props.innerHTML
)
const el = React.createElement(App, props)

const helmetApp = (
  <HelmetProvider>
    {el}
  </HelmetProvider>
)
hydrate(helmetApp, document.getElementById("_react_root"))

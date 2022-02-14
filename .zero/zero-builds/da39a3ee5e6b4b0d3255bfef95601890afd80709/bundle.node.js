;var parcelRequire;
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = class extends _react.default.Component {
  static async getInitialProps() {
    var json = await fetch('/time').then(resp => resp.json());
    return {
      time: json.time
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("p", null, "Current time is: ", this.props.time);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\Diab\\Documents\\GitHub\\RaspberryPiWebServer\\index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{}],"mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js":[function(require,module,exports) {
"use strict";

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));

var _react2 = require("@mdx-js/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var AppAndExports = require('../index.jsx');

var App = AppAndExports && AppAndExports.default ? AppAndExports.default : AppAndExports;

const CodeBlock = ({
  children,
  className
}) => {
  const language = className ? className.replace(/language-/, '') : false;
  return /*#__PURE__*/_react.default.createElement(_prismReactRenderer.default, (0, _extends2.default)({}, _prismReactRenderer.defaultProps, {
    code: children.trim(),
    language: language
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => /*#__PURE__*/_react.default.createElement("pre", {
    className: className,
    style: undefined
  }, tokens.map((line, i) => /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    key: i
  }, getLineProps({
    line,
    key: i
  }), {
    style: undefined
  }), line.map((token, key) => /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    key: key
  }, getTokenProps({
    token,
    key
  }), {
    style: undefined
  })))))));
};

const components = {
  code: CodeBlock,
  pre: props => /*#__PURE__*/_react.default.createElement("div", props)
};

const WrappedApp = props => /*#__PURE__*/_react.default.createElement(_react2.MDXProvider, {
  components: components
}, /*#__PURE__*/_react.default.createElement(App, props));

module.exports = {
  originalApp: AppAndExports,
  default: WrappedApp
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "C:\\Users\\Diab\\Documents\\GitHub\\RaspberryPiWebServer\\.zero\\mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js");
  reactHotLoader.register(CodeBlock, "CodeBlock", "C:\\Users\\Diab\\Documents\\GitHub\\RaspberryPiWebServer\\.zero\\mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js");
  reactHotLoader.register(components, "components", "C:\\Users\\Diab\\Documents\\GitHub\\RaspberryPiWebServer\\.zero\\mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js");
  reactHotLoader.register(WrappedApp, "WrappedApp", "C:\\Users\\Diab\\Documents\\GitHub\\RaspberryPiWebServer\\.zero\\mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"../index.jsx":"../index.jsx"}]},{},["mdx.9582d6b062976bb4d55b98e1af026eb9733fb0ec.js"], null)
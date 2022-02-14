
import Highlight, {defaultProps} from 'prism-react-renderer'
import {mdx} from '@mdx-js/react'
import {MDXProvider} from '@mdx-js/react'
var AppAndExports = require('../index.jsx')
var App = (AppAndExports && AppAndExports.default)?AppAndExports.default : AppAndExports;

const CodeBlock = ({children, className}) => {
  const language = className?className.replace(/language-/, '') : false
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={undefined}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})} style={undefined}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} style={undefined} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const components = {
  code: CodeBlock,
  pre: props => <div {...props} />
}

const WrappedApp = (props)=>(
  <MDXProvider components={components}>
    <App {...props} />
  </MDXProvider>
)


module.exports = {
  originalApp: AppAndExports,
  default: WrappedApp
}


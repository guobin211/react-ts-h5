const paths = require('./paths');
const getClientEnvironment = require('./env');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

const dependenciesScript = `<script>
    window.environment = ${JSON.stringify(env.raw)};
    if (!window.location.origin) {
      if (window.location.port) {
          window.location.origin = window.location.protocol + '//' + window.location.hostname + window.location.port;
      } else {
        window.location.origin = window.location.protocol + '//' + window.location.hostname
      }
    }
    function onCdnError(name) {
      const script = document.createElement('script');
      script.src = window.location.origin + window.environment.PUBLIC_URL + name + '.js';
      document.head.appendChild(script);
    }
  </script>`;

const umdLibs = [
  `<script src="https://cdn.bootcdn.net/ajax/libs/core-js/3.6.5/minified.min.js" onError="onCdnError('/umd/core-js')"></script>`,
  `<script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.production.min.js" onerror="onCdnError('/umd/react')"></script>`,
  `<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js" onerror="onCdnError('/umd/react-dom')"></script>`,
  `<script src="https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js" async onerror="onCdnError('/umd/react-router-dom')"></script>`
]

const injectScripts = dependenciesScript.concat(...umdLibs);

function getUMDManifestJson(publicPath) {
  return {
    'core-js.js': `${publicPath}static/umd/core-js.js`,
    'react.js': `${publicPath}static/umd/react.js`,
    'react-dom.js': `${publicPath}static/umd/react-dom.js`,
    'react-router-dom': `${publicPath}static/umd/react-router-dom.js`
  }
}

module.exports = {
  injectScripts,
  getUMDManifestJson
}
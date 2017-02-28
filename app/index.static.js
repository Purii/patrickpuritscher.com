import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HTMLDocument from 'react-html-document';

import Piwik from './piwik.html';
import Root from './containers/Root';

export default (locals, callback) => {
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const js = assets.filter(value => value.match(/\.js$/));
  const css = assets.filter(value => value.match(/\.css$/));

  const renderedHTML = (
    <HTMLDocument
      childrenContainerId="root"
      scripts={js}
      stylesheets={css}
      title="patrickpuritscher.com"
      metatags={[
        { name: 'twitter:card', content: 'summary' },
        { property: 'og:type', content: 'profile' },
        { name: 'twitter:site', content: 'whoispurii' },
        { name: 'twitter:title', property: 'og:title', content: 'Patrick Puritscher' },
        { name: 'twitter:image', property: 'og:image', content: 'https://avatars0.githubusercontent.com/u/7056989' },
        { property: 'og:url', content: 'http://patrickpuritscher.com' },

      ]}
    >
      <div style={{height: '100%'}}>
      <Root />
      <div dangerouslySetInnerHTML={{__html: Piwik}} />
      </div>
    </HTMLDocument>
  );

  const html = ReactDOMServer.renderToStaticMarkup(renderedHTML);
  callback(null, `<!doctype html>${html}`);
};

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Home = () => (
  <div className="container">
    <section>
      <h2>
        <span>Step 1: </span>
        <b>Install it</b>
      </h2>
      <p>Install react-snp-infinite-scroller using npm</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        npm install --save react-snp-infinite-scroller
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Step 2: </span>
        <b>Import it</b>
      </h2>
      <p>Import it into your component</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import {useElementScroll, useWindowScroll} from 'react-snp-infinite-scroller';`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Step 3: </span>
        <b>Use it</b>
      </h2>
      <p>Make window or an element call a function each time that it reaches to the end of the page</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`useElementScroll({reference, callback, hasMore, threshold});
useWindowScroll({callback, hasMore, threshold});`}
      </SyntaxHighlighter>
    </section>
  </div>
)

export default Home
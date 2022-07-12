import Head from 'next/head';

import * as Layout from '../layouts/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default () => (
  <div>
    <Head>
      <title>Patrick Böder (formerly Puritscher)</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <Layout.Theatre>
      <Header />
      <Layout.Stage>
        <Card />
      </Layout.Stage>

      { false && <Layout.Footer>
        <Footer />
      </Layout.Footer> }
    </Layout.Theatre>
  </div>
);

import Head from 'next/head';

import * as Layout from '../layouts/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default () => (
  <div>
    <Head>
      <title>Patrick Puritscher</title>
    </Head>
    <Layout.Theatre>
      <Header />
      <Layout.Stage>
        <Card />
      </Layout.Stage>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Theatre>
  </div>
);

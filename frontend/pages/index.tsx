import Head from 'next/head'
import { Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/MainLayout';

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <h1 className="title text-center pt-5">
        Next.js + Adonis.js Demo
      </h1>
    </MainLayout>
  </>
)

export default Home

import Head from 'next/head'
import styles from '../styles/Landing.module.scss'
import Navbar from '../Components/Navbar'
import Discovery from '../Components/Discovery'
import ForFansNav from '../Components/ForFansNav'
import BrowseRecords from '../Components/BrowseRecords'
import CarouselSection from '../Components/CarouselSection'
import ImageGrid from '../Components/ImageGrid'
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qrates Recreation by Lance Avitia</title>
        <meta name="description" content="Recreation of 'Qrates' website for helping artists press their own vinyl" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Discovery />
        <ForFansNav />
        <BrowseRecords />
        <CarouselSection />
        <ImageGrid />
      </main>
      <Footer />
    </div>
  )
}

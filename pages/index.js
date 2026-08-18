import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Jeirus. I am a BSIT Student at the University of the Assumption</p>
  <p>My current hobbies include board and tabletop gaming, reading books and online novels, and listening to music! I am a huge fan of EDM and Rock, particularly a fan of <a href="https://youtu.be/Ob_EDY9Eiis?si=zh63ixdRfqtHzcLo" target="_blank">Porter Robinson</a> and <a href="https://youtu.be/uyaKoj7wABY?si=ljYnOIQDZ7Bp3bbR" target="_blank">One OK Rock</a>. In terms of food? I love Sisig! In 5 years, I hope to see myself working in a reputable company specializing in servers and databases like Google.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
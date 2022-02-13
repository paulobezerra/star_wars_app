import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Films } from '../components/Films'
import { findAllFilms } from '../services/swapi'
import { Container } from './style'

interface HomeProps {
  films: any[]
}

const Home = ({ films }: HomeProps) => {

  return (
    <Container>
      <Head>
        <title>Star Wars App</title>
        <meta name="description" content="List of films and characters in the Star Wars franchise" />
        <link rel="icon" href="/favicon.png" />
      </Head>      

      <h2>Movies</h2>
      <Films films={films}/>
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const films = await findAllFilms();
  console.log(films);
  return {
    props: {
      films,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
}
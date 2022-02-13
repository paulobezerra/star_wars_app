import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { People } from '../../components/People'
import { findAllPeople } from '../../services/swapi'
import { Container, LoadMore } from './style'

interface PeopleProps {
  people: any[];
  nextPage: number;
}

const PeoplePage = ({ people, nextPage }: PeopleProps) => {
  const [allPeople, setPeople] = useState(people)
  const [page, setPage] = useState(nextPage)


  const handleLoadMore = async () => {
    const result = await findAllPeople(page);
    setPeople([...allPeople, ...result.people]);
    setPage(result.nextPage);
  }

  return (
    <Container>
      <Head>
        <title>Star Wars App</title>
        <meta name="description" content="List of films and characters in the Star Wars franchise" />
        <link rel="icon" href="/favicon.png" />
      </Head>      

      <h2>Characteres</h2>
      <People people={allPeople}/>
      {page && <LoadMore onClick={handleLoadMore} data-test-id="load-more-people">Load more</LoadMore> }
    </Container>
  )
}

export default PeoplePage

export const getStaticProps: GetStaticProps = async () => {
  const result = await findAllPeople(1);
  return {
    props: {
      people: result.people,
      nextPage: result.nextPage
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
}
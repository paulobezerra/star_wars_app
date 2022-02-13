import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { People } from "../../components/People";
import { findAllPeople, getFilm } from "../../services/swapi";
import { Container, LoadMore } from "./style";

interface FilmProps {
  film: {
    title: string;
    image: string;
    characters: string[];
    opening_crawl: string;
    episode_id: string;
    director: string;
    producer: string;
    release_date: string;
  };
  people: any[];
  nextPage: number;
}

const Film = ({ film, people, nextPage }: FilmProps) => {
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
        <meta
          name="description"
          content="List of films and characters in the Star Wars franchise"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h2>{film.title}</h2>
      <div className="film" key={film.title}>
        <Image src={film.image} alt={film.title} width="300" height="467" />
        <pre className="opening_crawl">{film.opening_crawl}</pre>
      </div>
      <ul className="info">
        <li>
          Episode:<strong>{film.episode_id}</strong>
        </li>
        <li>
          Director:<strong>{film.director}</strong>
        </li>
        <li>
          Producer:<strong>{film.producer}</strong>
        </li>
        <li>
          Release:<strong>{film.release_date}</strong>
        </li>
      </ul>

      <h3>Characters</h3>
      <People people={allPeople}/>
      {page && <LoadMore onClick={handleLoadMore}>Load more</LoadMore> }
    </Container>
  );
};

export default Film;

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const film = await getFilm(id);
  const result = await findAllPeople(1);
  const people = result?.people?.filter(person => film.characters.includes(person.id))
  return {
    props: {
      film,
      people,
      nextPage: result.next
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};

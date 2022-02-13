import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Films } from "../../components/Films";
import { findAllFilms, findAllPeople, getFilm } from "../../services/swapi";
import { Container } from "./style";

interface PersonProps {
  person: {
    name: string;
    image: string;
    characters: string[];
    opening_crawl: string;
    episode_id: string;
    director: string;
    producer: string;
    release_date: string;
  };
  films: any[];
  nextPage: number;
}

const People = ({ person, films }: PersonProps) => {
  return (
    <Container>
      <Head>
        <title>Star Wars App</title>
        <meta
          name="description"
          content="List of persons and characters in the Star Wars franchise"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h2>{person.name}</h2>
      <div className="person" key={person.name}>
        <Image src={person.image} alt={person.name} width="300" height="467" />
        <ul className="info">
          <li>
            Episode:<strong>{person.episode_id}</strong>
          </li>
          <li>
            Director:<strong>{person.director}</strong>
          </li>
          <li>
            Producer:<strong>{person.producer}</strong>
          </li>
          <li>
            Release:<strong>{person.release_date}</strong>
          </li>
        </ul>
      </div>

      <h3>Movies</h3>
      <Films films={films}/>
    </Container>
  );
};

export default People;

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
  const person = await getFilm(id);
  const films = await findAllFilms();
  return {
    props: {
      person,
      films,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};

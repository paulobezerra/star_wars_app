import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Films } from "../../components/Films";
import { findAllFilms, getPerson } from "../../services/swapi";
import { Container } from "./style_person";

interface PersonProps {
  person: {
    name: string;
    image: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
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
        <Image
          src={person.image}
          alt={person.name}
          width="400"
          height="400"
          objectFit="cover"
        />
        <ul className="info">
          <li>
            Height:<strong>{person.height}</strong>
          </li>
          <li>
            Mass:<strong>{person.mass}</strong>
          </li>
          <li>
            Hair color:<strong>{person.hair_color}</strong>
          </li>
          <li>
            Skin color:<strong>{person.skin_color}</strong>
          </li>
          <li>
            Eye Color:<strong>{person.eye_color}</strong>
          </li>
          <li>
            Birth Year:<strong>{person.birth_year}</strong>
          </li>
          <li>
            Gender:<strong>{person.gender}</strong>
          </li>
        </ul>
      </div>

      <h3>Movies</h3>
      <Films films={films} />
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
  const person = await getPerson(id);
  let films = await findAllFilms();
  films = films.filter((film) => person.films.includes(film.id));
  return {
    props: {
      person,
      films,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};

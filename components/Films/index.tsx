import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";


interface Film  {
  id: number,
  title: string,
  image: string
}

interface FilmsProps {
  films: Film[]
}

export function Films({ films }: FilmsProps) {
  return (
    <Container>
      {films?.map((film) => (
        <div className="film" key={film.title}>
          <Link href={`/films/${film.id}`}>
            <a>
              <Image
                src={film.image}
                alt={film.title}
                width="209"
                height="326"
              />
            </a>
          </Link>
        </div>
      ))}
    </Container>
  );
}

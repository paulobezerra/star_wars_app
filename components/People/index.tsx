import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";


interface Person  {
  id: number,
  name: string,
  image: string
}

interface PeopleProps {
  people: Person[]
}

export function People({ people }: PeopleProps) {
  return (
    <Container>
      {people?.map((person) => (
        <div className="person" key={person.name}>
          <Link href={`/people/${person.id}`}>
            <a title={person.name}>
              <Image
                src={person.image}
                alt={person.name}
                width="200"
                height="200"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
      ))}
    </Container>
  );
}

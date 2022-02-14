import { render, screen } from '@testing-library/react'
import Person from '../../../pages/people/[id]';

describe('People', () => {
  it('renders a person', () => {
    const films: any = [
      {
        id: 1,
        title: "A New Hope",
        image: "/films/A New Hope.jpg"
      }
    ];
    const person: any = 
      {
        id: 1,
        name: "Luke Skywalker",
        image: "/people/Luke Skywalker.jpg",
        height: 172,
	      mass: 77,
	      hair_color: "blond",
	      skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
      };
    const container = render(<Person person={person} films={films} nextPage={2} />)

    const h2 = container.baseElement.querySelector('h2')
    const infos = container.baseElement.querySelectorAll('.person .info li strong')
    const film = container.baseElement.querySelector('[data-test-id=film-link-1]')
    
    
    expect(h2?.innerHTML).toBe("Luke Skywalker")
    expect(infos[0]?.innerHTML).toContain("172")
    expect(infos[1]?.innerHTML).toContain("77")
    expect(infos[2]?.innerHTML).toContain("blond")
    expect(infos[3]?.innerHTML).toContain("fair")
    expect(infos[4]?.innerHTML).toContain("blue")
    expect(infos[5]?.innerHTML).toContain("19BBY")
    expect(infos[6]?.innerHTML).toContain("male")
    expect(film?.href).toContain("films/1")
  })
})
import { render, screen } from '@testing-library/react'
import Film from '../../../pages/films/[id]';

describe('Film', () => {
  it('renders a film', () => {
    const people: any = [
      {
        id: 1,
        name: "Luke Skywalker",
        image: "/people/Luke Skywalker.jpg"
      }
    ];
    const film: any = 
      {
        id: 1,
        image: "/films/A New Hope.jpg",
        title: "A New Hope",
        episode_id: 4,
        opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\n",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
      };
    const container = render(<Film film={film} people={people} nextPage={2} />)

    const h2 = container.baseElement.querySelector('h2')
    const openingCrawl = container.baseElement.querySelector('.opening_crawl')
    const infos = container.baseElement.querySelectorAll('.info li strong')
    const person = container.baseElement.querySelector('[data-test-id=person-link-1]')
    
    
    expect(h2?.innerHTML).toBe("A New Hope")
    expect(openingCrawl?.innerHTML).toContain("Rebel spaceships")
    expect(infos[0]?.innerHTML).toContain("4")
    expect(infos[1]?.innerHTML).toContain("George Lucas")
    expect(infos[2]?.innerHTML).toContain("Gary Kurtz, Rick McCallum")
    expect(infos[3]?.innerHTML).toContain("1977-05-25")
    expect(person?.href).toContain("people/1")
  })
})
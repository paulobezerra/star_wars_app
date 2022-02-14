import { render, screen } from '@testing-library/react'
import PeoplePage from '../../../pages/people';

describe('People', () => {
  it('renders people', () => {
    const people: any = [
      {
        id: 1,
        name: "Luke Skywalker",
        image: "/people/Luke Skywalker.jpg"
      }
    ];
    const container = render(<PeoplePage people={people} nextPage={2} />)

    const h2 = container.baseElement.querySelector('h2')
    const person = container.baseElement.querySelector('[data-test-id=person-link-1]') 
    
    expect(h2?.innerHTML).toBe("Characteres")
    expect(person?.href).toContain("people/1")
  })
})
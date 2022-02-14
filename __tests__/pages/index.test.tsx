import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Films', () => {
  it('renders movies', () => {
    const films: any = [
      {
        id: 1,
        title: "A New Hope",
        image: "/films/A New Hope.jpg"
      }
    ];
    const container = render(<Home films={films} />)

    const h2 = container.baseElement.querySelector('h2')
    const film = container.baseElement.querySelector('[data-test-id=film-link-1]')
    
    expect(h2?.innerHTML).toBe("Movies")
    expect(film?.href).toContain("films/1")
  })
})
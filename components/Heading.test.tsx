import { render, screen } from '@testing-library/react'
import Heading from '&/components/Heading'

describe('Heading', () => {
  it('renders a heading', () => {
    
    render(<Heading>Cabeçalho</Heading>)

    const heading = screen.getByRole('heading', {
      name: /cabeçalho/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
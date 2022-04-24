jest.mock(`&/svgs/logo.svg`, () => `logo.svg`)

import { render, screen } from '@testing-library/react'
import Home from '&/pages/index'

describe('Home', () => {
  it('renders with Peladeiros heading', () => {
    
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /peladeiros/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
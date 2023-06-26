import { render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Contact from './Contact'

describe('Contact component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the form fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
  })

  it('submits the form with valid data', async () => {
    const sendMock = vi.fn()

    vi.mock('emailjs', {
      send: sendMock
    })

    render(<Contact />)

    fireEvent.change(screen.getByLabelText('Your Name'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('Your Email'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Your Message'), {
      target: { value: 'Hello, world!' },
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(sendMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      {
        from_name: 'John Doe',
        to_name: 'Kamil',
        from_email: 'john@example.com',
        to_email: 'kamilzak366@gmail.com',
        message: 'Hello, world!',
      },
      expect.any(String)
    )

    await screen.findByText('Thank you. I will get back to you as soon as possible.')
  })

  it('shows an error message when the form submission fails', async () => {
    vi.mock('emailjs', {
      send: () => Promise.reject(new Error('Something went wrong')),
    })

    render(<Contact />)

    fireEvent.submit(screen.getByRole('button'))

    await screen.findByText('Something went wrong')
  })
})

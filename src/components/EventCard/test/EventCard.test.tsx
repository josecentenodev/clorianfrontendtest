import EventCard from "@/components/EventCard";
import { Provider } from 'react-redux';
import { store } from "@/redux/store";
import { render, cleanup, screen } from "@testing-library/react";

describe('EventCard component', () => {
    afterAll(cleanup)

    test('renders correctly', () => {
        const mockEvent = {
            id: 1,
            name: 'Example Event',
            description: 'This is an example event',
            imageUrl: 'example.jpg',
            altImg: 'Example Image',
            validityDate: '2024-03-31',
            cost: 10,
          };

          render(<Provider store={store}><EventCard {...mockEvent}/></Provider>)

          const eventName = screen.getByText('Example Event')
          const eventDescription = screen.getByText('This is an example event')
          const eventImage = screen.getByRole('img')
          const eventAltText = screen.getByAltText('Example Image')
          const eventDate = screen.getByText('Date: 2024-03-31')
          const eventCost = screen.getByText(/10/)
          expect(eventName).toBeDefined()
          expect(eventDescription).toBeDefined()
          expect(eventImage).toBeDefined()
          expect(eventAltText).toBeDefined()
          expect(eventDate).toBeDefined()
          expect(eventCost).toBeDefined()
          
    })

    test('should render buttons enabled with future date', () => {
        const mockEvent = {
            id: 1,
            name: 'Example Event',
            description: 'This is an example event',
            imageUrl: 'example.jpg',
            altImg: 'Example Image',
            validityDate: '2024-03-31',
            cost: 10,
          };

          render(<Provider store={store}><EventCard {...mockEvent}/></Provider>)

          const select = screen.getByRole('combobox')
          const button = screen.getByRole('button')

          expect(select).toHaveProperty('disabled', false)
          expect(button).toHaveProperty('disabled', false)
          
    })

    test('should render buttons disabled with past date', () => {
        const mockEvent = {
            id: 1,
            name: 'Example Event',
            description: 'This is an example event',
            imageUrl: 'example.jpg',
            altImg: 'Example Image',
            validityDate: '2024-02-21',
            cost: 10,
          };

          render(<Provider store={store}><EventCard {...mockEvent}/></Provider>)

          const select = screen.getByRole('combobox')
          const button = screen.getByRole('button')

          expect(select).toHaveProperty('disabled', true)
          expect(button).toHaveProperty('disabled', true)
          
          expect(screen.getByText('This event has already occurred')).toBeDefined()
    })
})
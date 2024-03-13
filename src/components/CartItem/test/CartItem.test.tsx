import { render, screen } from '@testing-library/react';
import CartItem from '@/components/CartItem';
import { Provider } from 'react-redux';
import { store } from "@/redux/store";



describe('CartItem component', () => {
  const mockCartItem = {
    id: 1,
    name: 'Event Name',
    description: 'Event Description',
    imageUrl: 'event.jpg',
    altImg: 'Alt Image',
    cost: 10,
    quantity: 2,
  };

  beforeEach(()=>{
    render(<Provider store={store}><CartItem {...mockCartItem} /></Provider>);
})

  test('renders correctly', () => {

    expect(screen.getByText('Event Name')).toBeDefined();
    expect(screen.getByText('Event Description')).toBeDefined();
    expect(screen.getByText('Tickets: 2')).toBeDefined();
    expect(screen.getByText('Total: € 20')).toBeDefined();
    expect(screen.getByAltText('Alt Image')).toBeDefined();
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  });


  test('calculates subtotal correctly', () => {
    expect(screen.getByText('Total: € 20')).toBeDefined();
  });

});

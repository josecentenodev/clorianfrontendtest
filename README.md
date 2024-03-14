# Clorian Frontend Test

This is a React web application developed for the Clorian frontend test. It displays a list of products, allows sorting and filtering, and manages a shopping cart.

## Features

- Display a list of 10 products sorted alphabetically by name.
- Sort the list by name or description.
- Filter the list of products by text input.
- Add products to the shopping cart with a dropdown selector.
- Show information about the state of the shopping cart.
- Disable the option to add products to the cart if their validity date is earlier than the current date.
- Empty the shopping cart.

## Extra Features

- **Animations**: Implement animations for smoother user experience.
- **Ascending and Descending Sorting**: Allow sorting of products in both ascending and descending order.
- **Toasts for Alerts**: Display toasts for alerts or notifications to provide feedback to the user.
- **Control for Non-Positive Quantities**: Prevent adding non-positive quantities of products to the shopping cart.
- **Simulation of API Call**: Simulate API call using Redux Toolkit's `createAsyncThunk` and `extraReducers` for managing asynchronous behavior.
  
## Technologies Used

- React
- Redux Toolkit for state management
- TypeScript for type-checking
- Vite for building and development
- Tailwind CSS for styling
- Testing Library for unit testing
- Vitest for test automation

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/josecentenodev/clorianfrontendtest
   ```

2. Navigate to the project directory:

   ```bash
   cd clorianfrontendtest
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Note on Initial Cart State

For the sake of time and practicality, the initial state of the cart is pre-set with 3 products. This is done to facilitate testing and demonstration purposes.


## Running Tests

To run the tests, use the following command:

```bash
npm test
```


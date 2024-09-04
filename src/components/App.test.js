import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock FontAwesome and react-icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
}));

jest.mock('react-icons/fa', () => ({
  FaChevronLeft: () => <span>FaChevronLeft</span>,
  FaChevronRight: () => <span>FaChevronRight</span>,
  FaPlus: () => <span>FaPlus</span>,
}));

test('renders App component', () => {
  render(<App />);
  expect(screen.getByTestId('instruction-widget')).toBeInTheDocument();
  expect(screen.getByTestId('about-experience-widget')).toBeInTheDocument();
  expect(screen.getByTestId('gallery-widget')).toBeInTheDocument();
});

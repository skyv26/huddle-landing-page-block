/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  render(
    <ContextProvider>
        <Footer />
    </ContextProvider>
  );
  const linkElement = screen.getByText(/FAQ/i);
  expect(linkElement).toBeInTheDocument();
});

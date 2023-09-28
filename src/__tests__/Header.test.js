/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  render(
    <ContextProvider>
        <Header />
    </ContextProvider>
  );
  const linkElement = screen.getByText(/Try it free/i);
  expect(linkElement).toBeInTheDocument();
});

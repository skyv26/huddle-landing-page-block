/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  render(
    <ContextProvider>
        <HeroSection />
    </ContextProvider>
  );
  const linkElement = screen.getByText(/Build The Community Your Fans Will Love/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import FeatureSection from '../components/FeatureSection';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  render(
    <ContextProvider>
        <FeatureSection />
    </ContextProvider>
  );
  const linkElement = screen.getByText(/Grow Together/i);
  expect(linkElement).toBeInTheDocument();
});

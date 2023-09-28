/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import HeroSection from '../components/HeroSection';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  const hero = render(
    <ContextProvider>
        <HeroSection />
    </ContextProvider>
  );
  expect(hero).toMatchSnapshot();
});

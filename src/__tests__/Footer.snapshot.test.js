/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Footer from '../components/Footer';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  const footer = render(
    <ContextProvider>
        <Footer />
    </ContextProvider>
  );
  expect(footer).toMatchSnapshot();
});

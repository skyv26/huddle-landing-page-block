/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Header from '../components/Header';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  const header = render(
    <ContextProvider>
        <Header />
    </ContextProvider>
  );
  expect(header).toMatchSnapshot();
});

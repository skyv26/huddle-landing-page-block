/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import FeatureSection from '../components/FeatureSection';
import ContextProvider from '../store/ContextProvider';

test('renders learn react link', () => {
  const featureSection = render(
    <ContextProvider>
        <FeatureSection />
    </ContextProvider>
  );
  expect(featureSection).toMatchSnapshot();
});

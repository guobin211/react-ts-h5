import { render, screen } from '@testing-library/react';
import React from 'react';
import Playground from './playground';

test('renders learn react link', () => {
  render(<Playground />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

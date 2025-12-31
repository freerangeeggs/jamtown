import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with character list', () => {
  render(<App />);
  const charList = screen.getByRole('main');
  expect(charList).toBeInTheDocument();
});

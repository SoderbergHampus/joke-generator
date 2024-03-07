import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('Test that elements loads', () => {
  test('Main header of page should load', async () => {
    render(<App />);
    const element = await screen.findByTestId('test');
    // console.log(element);
    expect(element).toBeDefined();
  });
});

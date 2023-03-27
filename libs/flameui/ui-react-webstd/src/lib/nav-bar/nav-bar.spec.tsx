import { screen, render } from '@testing-library/react';

import NavBar from './nav-bar';

describe('NavBar', () => {
  it('renders successfully with children', () => {
    render(
      <NavBar>
        <span>test</span>
      </NavBar>,
    );

    expect(screen.getByText('test')).toBeVisible();
  });

  it('is a nav element', () => {
    render(
      <NavBar>
        <span>test</span>
      </NavBar>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('accepts custom tailwind classes', () => {
    render(
      <NavBar className="bg-green-400">
        <span>test</span>
      </NavBar>,
    );

    expect(screen.getByRole('navigation')).toHaveClass('bg-green-400');
  });

  it('becomes sticky with sticky prop', () => {
    render(
      <NavBar sticky>
        <span>test</span>
      </NavBar>,
    );

    expect(screen.getByRole('navigation')).toHaveClass('sticky');
  });
});

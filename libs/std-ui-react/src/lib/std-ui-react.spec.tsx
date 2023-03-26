import { render } from '@testing-library/react';

import StdUiReact from './std-ui-react';

describe('StdUiReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StdUiReact />);
    expect(baseElement).toBeTruthy();
  });
});

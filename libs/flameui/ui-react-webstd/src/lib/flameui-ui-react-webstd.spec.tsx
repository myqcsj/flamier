import { render } from '@testing-library/react';

import FlameuiUiReactWebstd from './flameui-ui-react-webstd';

describe('FlameuiUiReactWebstd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlameuiUiReactWebstd />);
    expect(baseElement).toBeTruthy();
  });
});

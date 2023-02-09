import { render } from '@testing-library/react';

import MenuButton from './menuButton';

describe('MenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuButton />);
    expect(baseElement).toBeTruthy();
  });
});

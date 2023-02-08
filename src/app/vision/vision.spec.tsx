import { render } from '@testing-library/react';

import Vision from './vision';

describe('Vision', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vision />);
    expect(baseElement).toBeTruthy();
  });
});

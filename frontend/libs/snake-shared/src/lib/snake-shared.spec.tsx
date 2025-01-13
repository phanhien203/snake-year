import { render } from '@testing-library/react';

import SnakeShared from './snake-shared';

describe('SnakeShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnakeShared />);
    expect(baseElement).toBeTruthy();
  });
});

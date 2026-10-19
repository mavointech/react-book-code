import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InlineStyles from './InlineStyles.jsx';
import StyledCard from './StyledCard.jsx';
import FlexDemo from './FlexDemo.jsx';
import GridDemo from './GridDemo.jsx';
import MuiDemo from './MuiDemo.jsx';

describe('Chapter 8 examples', () => {
  it('InlineStyles changes style with state', async () => {
    render(<InlineStyles />);
    const status = screen.getByText('Status: Inactive');
    expect(status).toHaveStyle({ color: 'rgb(220, 20, 60)' });
    await userEvent.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.getByText('Status: Active')).toHaveStyle({
      color: 'rgb(0, 128, 0)',
    });
  });

  it('StyledCard adds a class when highlighted', () => {
    const { container } = render(<StyledCard title="T" text="x" highlighted />);
    expect(container.firstChild).toHaveClass('product', 'product--highlight');
  });

  it('FlexDemo and GridDemo render', () => {
    render(
      <>
        <FlexDemo />
        <GridDemo />
      </>,
    );
    expect(screen.getByText('I am in the exact centre')).toBeInTheDocument();
    expect(screen.getByText('Webcam')).toBeInTheDocument();
  });

  it('MuiDemo validates the email and shows a success message', async () => {
    const user = userEvent.setup();
    render(<MuiDemo />);
    const button = screen.getByRole('button', { name: 'Subscribe' });
    expect(button).toBeDisabled();
    await user.type(screen.getByLabelText('Email'), 'nope');
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    await user.type(screen.getByLabelText('Email'), '@x.fi');
    expect(button).toBeEnabled();
    await user.click(button);
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Welcome from './Welcome.jsx';
import ProfileCard from './ProfileCard.jsx';
import Conditional from './Conditional.jsx';
import ProductList from './ProductList.jsx';
import Panel from './Panel.jsx';

describe('Chapter 4 examples', () => {
  it('Welcome uses expressions', () => {
    render(<Welcome />);
    expect(
      screen.getByRole('heading', { name: 'Hello, Aino!' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/2 \+ 3 = 5/)).toBeInTheDocument();
  });

  it('ProfileCard shows defaults and the Senior badge', () => {
    const { rerender } = render(
      <ProfileCard name="A" jobTitle="Dev" years={8} />,
    );
    expect(screen.getByText('Dev at Freelance')).toBeInTheDocument();
    expect(screen.getByText('Senior')).toBeInTheDocument();
    rerender(<ProfileCard name="A" jobTitle="Dev" years={2} />);
    expect(screen.queryByText('Senior')).not.toBeInTheDocument();
  });

  it('Panel renders children', () => {
    render(
      <Panel title="T">
        <p>inside</p>
      </Panel>,
    );
    expect(screen.getByText('inside')).toBeInTheDocument();
  });

  it('Conditional chooses what to show', () => {
    const { rerender } = render(<Conditional />);
    expect(screen.getByText('Please log in')).toBeInTheDocument();
    expect(screen.getByText('Only 3 left')).toBeInTheDocument();
    rerender(<Conditional user={{ name: 'Aino' }} stock={0} messages={[1]} />);
    expect(screen.getByText('Welcome back, Aino')).toBeInTheDocument();
    expect(screen.getByText('Sold out')).toBeInTheDocument();
    expect(screen.getByText('You have 1 new messages')).toBeInTheDocument();
  });

  it('ProductList renders every product', () => {
    render(<ProductList />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

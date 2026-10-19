import InlineStyles from './InlineStyles.jsx';
import StyledCard from './StyledCard.jsx';
import FlexDemo from './FlexDemo.jsx';
import GridDemo from './GridDemo.jsx';
import MuiDemo from './MuiDemo.jsx';

export default function Ch08Demo() {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <InlineStyles />
      <div className="grid">
        <StyledCard title="Normal card" text="Hover over me" />
        <StyledCard
          title="Highlighted"
          text="I have an extra class"
          highlighted
        />
      </div>
      <FlexDemo />
      <GridDemo />
      <MuiDemo />
    </div>
  );
}

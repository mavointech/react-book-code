import Panel from './Panel.jsx';

export default function PanelDemo() {
  return (
    <Panel title="Today">
      <p>Any content can go inside a panel.</p>
      <button>A button</button>
      <Panel>
        <em>Panels can even contain other panels.</em>
      </Panel>
    </Panel>
  );
}

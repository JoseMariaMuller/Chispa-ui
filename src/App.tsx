import TechText from './components/Techtext/TechText';

export default function App() {
  return (<main className="min-h-screen bg-[#080b12] flex items-center justify-center p-6">
    <div style={{ width: '100%', maxWidth: '1000px', height: '480px', position: 'relative', }} >
      <TechText text="CHISPA-UI" fontWeight={600} fontSize={150} reveal="letter" dashLength={4} dashGap={2} specks={15} fontFamily="" color="#ffffff" accentColor="#00e5ff" letterSpacing={-0.05} reach={200} softness={0.7} strokeWidth={1.5} speed={1} lineStyle="dashed" selection labels draggable sweep />
    </div>
  </main>);
}
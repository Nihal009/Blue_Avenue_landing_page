import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="relative min-h-[200px] bg-gradient-to-b from-slate-800 to-slate-600">
      <Navigation onNavigate={(section) => console.log('Navigate to:', section)} />
      <div className="pt-24 px-6 text-white text-center">
        <p className="text-sm opacity-70">Scroll down to see navigation style change</p>
      </div>
    </div>
  );
}

import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      onBookConsultation={() => console.log('Book consultation clicked')}
      onViewWork={() => console.log('View work clicked')}
    />
  );
}

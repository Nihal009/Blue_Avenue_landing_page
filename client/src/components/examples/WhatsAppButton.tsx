import WhatsAppButton from '../WhatsAppButton';

export default function WhatsAppButtonExample() {
  return (
    <div className="relative h-[200px] bg-background flex items-center justify-center">
      <p className="text-muted-foreground text-sm">WhatsApp button appears in bottom-right corner</p>
      <WhatsAppButton />
    </div>
  );
}

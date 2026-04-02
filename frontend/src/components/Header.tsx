import { Binary } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Binary className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Numeric Visualizer</h1>
            <p className="text-xs text-muted-foreground">Interactive digit selection</p>
          </div>
        </div>
      </div>
    </header>
  );
}

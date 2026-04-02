import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025. Built with{' '}
          <Heart className="inline h-4 w-4 fill-destructive text-destructive" />{' '}
          using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

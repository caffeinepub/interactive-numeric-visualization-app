import { useRef, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';

interface DigitCanvasProps {
  digitSequence: string;
}

export default function DigitCanvas({ digitSequence }: DigitCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const FONT_SIZE = 56;
  const PADDING = 60;
  const LINE_HEIGHT = FONT_SIZE * 1.8;
  const SPACE_WIDTH = FONT_SIZE * 0.6;

  // Draw canvas
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set font and style
    ctx.font = `${FONT_SIZE}px "JetBrains Mono", "Courier New", monospace`;
    ctx.fillStyle = 'oklch(var(--foreground))';
    ctx.textBaseline = 'alphabetic';

    const lines = digitSequence.split('\n');
    
    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Calculate total width of line to center it
      let totalWidth = 0;
      for (let i = 0; i < trimmedLine.length; i++) {
        const char = trimmedLine[i];
        if (char === ' ') {
          totalWidth += SPACE_WIDTH;
        } else {
          totalWidth += ctx.measureText(char).width;
        }
      }

      let x = (canvas.width - totalWidth) / 2;
      const y = PADDING + FONT_SIZE + (lineIndex * LINE_HEIGHT);

      // Draw each character
      for (let i = 0; i < trimmedLine.length; i++) {
        const char = trimmedLine[i];
        const isSpace = char === ' ';
        
        if (!isSpace) {
          ctx.fillText(char, x, y);
        }
        
        const width = isSpace ? SPACE_WIDTH : ctx.measureText(char).width;
        x += width;
      }
    });
  }, [digitSequence]);

  useEffect(() => {
    draw();
  }, [draw]);

  if (!digitSequence.trim()) {
    return (
      <Card className="flex h-80 w-full max-w-6xl items-center justify-center border-2 border-dashed">
        <p className="text-lg text-muted-foreground">
          Enter digits and press DISPLAY to begin
        </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden p-0 w-full max-w-6xl">
      <canvas
        ref={canvasRef}
        width={1400}
        height={900}
        className="w-full bg-card"
      />
    </Card>
  );
}

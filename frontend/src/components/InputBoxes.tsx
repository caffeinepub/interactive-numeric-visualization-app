import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface InputBoxesProps {
  values: string[];
  onChange: (values: string[]) => void;
  onDisplay: () => void;
}

export default function InputBoxes({ values, onChange, onDisplay }: InputBoxesProps) {
  const handleInputChange = (index: number, value: string) => {
    // Only allow digits and limit to 5 characters
    const filtered = value.replace(/[^0-9]/g, '').slice(0, 5);
    const newValues = [...values];
    newValues[index] = filtered;
    onChange(newValues);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* First row - 7 input boxes */}
      <div className="flex gap-3 justify-center">
        {values.slice(0, 7).map((value, index) => (
          <Input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="00000"
            className="w-24 text-center font-mono text-lg"
            maxLength={5}
          />
        ))}
      </div>

      {/* Second row - 4 input boxes */}
      <div className="flex gap-3 justify-center">
        {values.slice(7, 11).map((value, index) => (
          <Input
            key={index + 7}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index + 7, e.target.value)}
            placeholder="00000"
            className="w-24 text-center font-mono text-lg"
            maxLength={5}
          />
        ))}
      </div>

      {/* Display button */}
      <Button
        onClick={onDisplay}
        size="lg"
        className="px-12"
      >
        DISPLAY
      </Button>
    </div>
  );
}

import { Input } from '@/components/ui/input';

interface TopInputBoxesProps {
  values: string[];
  onChange: (values: string[]) => void;
}

const digitLengths = [8, 4, 8, 5, 5];

export default function TopInputBoxes({ values, onChange }: TopInputBoxesProps) {
  const handleInputChange = (index: number, value: string) => {
    const maxLength = digitLengths[index];
    // Only allow digits and limit to specified length
    const filtered = value.replace(/[^0-9]/g, '').slice(0, maxLength);
    const newValues = [...values];
    newValues[index] = filtered;
    onChange(newValues);
  };

  const getInputWidth = (length: number) => {
    // Calculate width based on digit length
    if (length === 4) return 'w-20';
    if (length === 5) return 'w-24';
    if (length === 8) return 'w-32';
    return 'w-24';
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {values.map((value, index) => (
        <div key={index} className="flex justify-center">
          <Input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={'0'.repeat(digitLengths[index])}
            className={`${getInputWidth(digitLengths[index])} text-center font-mono text-lg`}
            maxLength={digitLengths[index]}
          />
        </div>
      ))}
    </div>
  );
}

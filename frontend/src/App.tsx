import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DigitCanvas from './components/DigitCanvas';
import InputBoxes from './components/InputBoxes';
import TopInputBoxes from './components/TopInputBoxes';
import { Button } from '@/components/ui/button';

function App() {
  // Bottom section: 11 input boxes with 5 digits each
  const [inputValues, setInputValues] = useState<string[]>(Array(11).fill('00000'));
  
  // Top section: 5 input boxes with varying digit lengths
  const [topInputValues, setTopInputValues] = useState<string[]>([
    '00000000', // 8 digits
    '0000',     // 4 digits
    '00000000', // 8 digits
    '00000',    // 5 digits
    '00000'     // 5 digits
  ]);
  
  const [displayedSequence, setDisplayedSequence] = useState<string>('');

  const handleDisplay = () => {
    // Combine top section values (each on its own line)
    const topLines = topInputValues.join('\n');
    
    // Combine bottom section values into two lines
    const line1 = inputValues.slice(0, 7).join(' ');
    const line2 = inputValues.slice(7, 11).join(' ');
    
    // Combine all sections
    setDisplayedSequence(`${topLines}\n${line1}\n${line2}`);
  };

  const handleClear = () => {
    setDisplayedSequence('');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-between px-4 py-8">
        <div className="flex w-full max-w-6xl flex-col items-center space-y-8">
          {/* Top input section */}
          <div className="w-full pt-4">
            <TopInputBoxes
              values={topInputValues}
              onChange={setTopInputValues}
            />
          </div>
          
          {/* Visualization area - centered in middle with increased height */}
          <div className="flex-1 flex items-center justify-center w-full min-h-[500px]">
            <DigitCanvas digitSequence={displayedSequence} />
          </div>
          
          {/* Clear button - immediately below visualization with matching style */}
          {displayedSequence.trim() && (
            <Button
              onClick={handleClear}
              size="lg"
              className="px-12"
            >
              CLEAR
            </Button>
          )}
          
          {/* Bottom input boxes and display button */}
          <div className="w-full pb-8">
            <InputBoxes
              values={inputValues}
              onChange={setInputValues}
              onDisplay={handleDisplay}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

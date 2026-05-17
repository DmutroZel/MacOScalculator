import { useState } from 'react';

type Operation = '+' | '-' | '*' | '/' | null;

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldClearDisplay || display === '0') {
      setDisplay(num);
      setShouldClearDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleDecimal = () => {
    if (shouldClearDisplay) {
      setDisplay('0.');
      setShouldClearDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: Operation) => {
    if (prevValue === null) {
      setPrevValue(display);
    } else if (operation && !shouldClearDisplay) {
      calculate();
    }
    setOperation(op);
    setShouldClearDisplay(true);
  };

  const calculate = () => {
    if (!prevValue || !operation) return;

    const prev = parseFloat(prevValue);
    const current = parseFloat(display);
    let result: number;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : NaN;
        break;
      default:
        return;
    }

    const resultStr = Number.isInteger(result) ? result.toString() : result.toFixed(8).replace(/\.?0+$/, '');
    setDisplay(resultStr);
    setPrevValue(null);
    setOperation(null);
    setShouldClearDisplay(true);
  };

  const handleEquals = () => {
    if (operation) {
      calculate();
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setShouldClearDisplay(false);
  };

  const handleToggleSign = () => {
    if (display === '0') return;
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  const handlePercent = () => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setDisplay((value / 100).toString());
      setShouldClearDisplay(true);
    }
  };

  
  return (
    <div className='w-[350px] h-[600px] bg-[#65625d] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] p-6 flex flex-col justify-between backdrop-blur-sm'>
        <div className='mb-4'>
          <div className='text-right text-[#f9f8f4] text-5xl font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out'>
            {display.length > 12 ? parseFloat(display).toExponential(4) : display}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <button onClick={handleClear} className='bg-[#a9a8a4] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'>
            {display === '0' ? 'AC' : 'C'}
            </button>
            <button onClick={handleToggleSign} className='bg-[#a9a8a4] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-plus-minus"></i></button>
            <button onClick={handlePercent} className='bg-[#a9a8a4] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'>%</button>
            <button onClick={() => handleOperation('/')} className='bg-[#ff941e] w-18 h-18 text-white flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(255,148,30,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_16px_rgba(255,148,30,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-divide"></i></button>
        </div>
        <div className='flex gap-2'>
            <button onClick={() => handleNumber('7')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-7"></i></button>
            <button onClick={() => handleNumber('8')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-8"></i></button>
            <button onClick={() => handleNumber('9')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-9"></i></button>
            <button onClick={() => handleOperation('*')} className='bg-[#ff941e] text-white w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(255,148,30,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_16px_rgba(255,148,30,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className='flex gap-2'>  
            <button onClick={() => handleNumber('4')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-4"></i></button>
            <button onClick={() => handleNumber('5')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-5"></i></button>
            <button onClick={() => handleNumber('6')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-6"></i></button>
            <button onClick={() => handleOperation('-')} className='bg-[#ff941e] text-white w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(255,148,30,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_16px_rgba(255,148,30,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-minus"></i></button>
        </div>
        <div className='flex gap-2'>
            <button onClick={() => handleNumber('1')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-1"></i></button>
            <button onClick={() => handleNumber('2')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-2"></i></button>
            <button onClick={() => handleNumber('3')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-3"></i></button>
            <button onClick={() => handleOperation('+')} className='bg-[#ff941e] text-white w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(255,148,30,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_16px_rgba(255,148,30,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-plus"></i></button>
        </div>
        <div className='flex gap-2'>
            <button className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-calculator"></i></button>
            <button onClick={() => handleNumber('0')} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-0"></i></button>
            <button onClick={handleDecimal} className='bg-[#8f8c87] text-[#f9f8f4] w-18 h-18 flex justify-center items-center rounded-full text-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'>,</button>
            <button onClick={handleEquals} className='bg-[#ff941e] text-white w-18 h-18 flex justify-center items-center rounded-full text-[26px] shadow-[0_4px_12px_rgba(255,148,30,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_16px_rgba(255,148,30,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out'><i className="fa-solid fa-equals"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
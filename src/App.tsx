import { useState } from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(true);

  const toggleCalculator = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
  };

  return (
    <div className="h-screen bg-[url('/wallpaper.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" style={{fontFamily: "'SN Pro', sans-serif"}} >
      {isCalculatorOpen && (
        <div className="flex-1 flex items-center justify-center">
          <Calculator />
        </div>
      )}
      
      <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="flex items-end gap-1">
          <div className="w-14 h-14 rounded-xl bg-[url('/finder.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/chrome.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-95 hover:scale-105 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/appstore.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/safari.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div onClick={toggleCalculator} className="w-14 h-14 rounded-xl bg-[url('/calculator.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200 cursor-pointer">
          </div>
          <div className="w-14 h-14 rounded-xl bg-[url('/telegram.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/terminal.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/weather.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/folder-quick.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/wordmic.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/facetime.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/reminders.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/setting.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/verba.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          <div className="w-14 h-14 rounded-xl bg-[url('/pages.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center scale-110 hover:scale-120 transition-transform duration-200"></div>
          
          <div className="w-[1px] h-12 bg-white/30 mx-1"></div>
          
          <div className="w-14 h-14 rounded-xl bg-gray-400/30 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
            <i className="fa-solid fa-trash text-2xl text-white/70"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
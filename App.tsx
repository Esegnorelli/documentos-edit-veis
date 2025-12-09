import React, { useState } from 'react';
import { OilControl } from './components/OilControl';
import { WasteControl } from './components/WasteControl';
import { GeneralInventory } from './components/GeneralInventory';
import { DailyStock } from './components/DailyStock';
import { NolaInventory } from './components/NolaInventory';
import { DocumentType } from './types';
import { Printer, FileText, Trash2, ClipboardList, ChefHat } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DocumentType>('oil');

  const handlePrint = () => {
    window.print();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'oil': return <OilControl />;
      case 'waste': return <WasteControl />;
      case 'general_inventory': return <GeneralInventory />;
      case 'daily_stock': return <DailyStock />;
      case 'nola_inventory': return <NolaInventory />;
      default: return <OilControl />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-gray-900 print:block print:min-h-0 print:h-auto">
      
      {/* Sidebar Navigation - Hidden on Print. Widened to w-80 to fit long text. */}
      <aside className="w-full md:w-80 bg-gray-900 text-white flex-shrink-0 no-print flex flex-col transition-all duration-300">
        <div className="p-6 flex flex-col items-center border-b border-gray-800">
          <ChefHat className="w-12 h-12 text-red-500 mb-2" />
          <h1 className="text-xl font-bold text-center leading-tight">Hora do Pastel <span className="text-yellow-400 block text-sm font-normal">Controles</span></h1>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('oil')}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === 'oil' ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
          >
            <FileText className="w-5 h-5 mr-3 flex-shrink-0" />
            Troca de Óleo
          </button>
          
          <button 
            onClick={() => setActiveTab('waste')}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === 'waste' ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
          >
            <Trash2 className="w-5 h-5 mr-3 flex-shrink-0" />
            Controle de Desperdício
          </button>
          
          <button 
            onClick={() => setActiveTab('general_inventory')}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === 'general_inventory' ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
          >
            <ClipboardList className="w-5 h-5 mr-3 flex-shrink-0" />
            Inventário Geral
          </button>

           <button 
            onClick={() => setActiveTab('nola_inventory')}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === 'nola_inventory' ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
          >
            <ClipboardList className="w-5 h-5 mr-3 flex-shrink-0" />
            Inventário - Sistema Nola
          </button>

           <button 
            onClick={() => setActiveTab('daily_stock')}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === 'daily_stock' ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
          >
            <ClipboardList className="w-5 h-5 mr-3 flex-shrink-0" />
            Estoque Diário
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
           <p className="text-xs text-gray-500 text-center">Use CTRL+P ou o botão abaixo para salvar como PDF.</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow bg-gray-100 overflow-y-auto h-screen print:h-auto print:overflow-visible print:bg-white print:block">
        
        {/* Top Bar for Actions - Hidden on Print */}
        <div className="h-16 bg-white shadow-sm flex items-center justify-between px-8 no-print sticky top-0 z-10">
           <h2 className="text-lg font-semibold text-gray-700">Visualização de Documento</h2>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition-colors"
           >
             <Printer className="w-4 h-4" />
             <span>Imprimir / Salvar PDF</span>
           </button>
        </div>

        {/* Document Rendering Canvas */}
        <div className="p-8 print:p-0 flex justify-center print:block">
            {renderContent()}
        </div>
      </main>

      {/* Floating Action Button for Mobile - Hidden on Print */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-6 right-6 md:hidden bg-red-600 text-white p-4 rounded-full shadow-xl z-50 no-print"
      >
        <Printer className="w-6 h-6" />
      </button>

    </div>
  );
};

export default App;
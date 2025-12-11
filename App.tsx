import React, { useState } from 'react';
import { OilControl } from './components/OilControl';
import { WasteControl } from './components/WasteControl';
import { GeneralInventory } from './components/GeneralInventory';
import { DailyStock } from './components/DailyStock';
import { NolaInventory } from './components/NolaInventory';
import { DocumentType } from './types';
import { Printer, FileText, Trash2, ClipboardList, ChefHat, Menu, X, RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DocumentType>('oil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    if (confirm('Tem certeza que deseja limpar todos os campos? A página será recarregada.')) {
      window.location.reload();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (tab: DocumentType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
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

  // Helper for nav items to reduce duplication
  const NavItem = ({ id, label, icon: Icon }: { id: DocumentType, label: string, icon: any }) => (
    <button 
      onClick={() => handleTabChange(id)}
      className={`w-full flex items-center p-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${activeTab === id ? 'bg-red-600 text-white shadow-md' : 'hover:bg-gray-800 text-gray-300'}`}
    >
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-gray-900 print:block print:min-h-0 print:h-auto">
      
      {/* Mobile Header Bar - Only visible on mobile */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-20 sticky top-0 no-print">
        <div className="flex items-center gap-2">
           <ChefHat className="w-8 h-8 text-red-500" />
           <span className="font-bold text-lg">Hora do Pastel</span>
        </div>
        <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-800 rounded-md">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      {/* On desktop: always visible (w-80) */}
      {/* On mobile: fixed overlay or hidden based on state */}
      <aside className={`
        fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm md:bg-gray-900 md:relative md:w-80 md:block md:translate-x-0
        transition-transform duration-300 ease-in-out text-white flex flex-col no-print
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Close button for mobile overlay */}
        <div className="md:hidden absolute top-4 right-4">
           <button onClick={toggleMobileMenu} className="p-2 text-gray-400 hover:text-white">
             <X className="w-8 h-8" />
           </button>
        </div>

        <div className="p-6 flex flex-col items-center border-b border-gray-800">
          <ChefHat className="w-12 h-12 text-red-500 mb-2 hidden md:block" />
          <h1 className="text-xl font-bold text-center leading-tight">Hora do Pastel <span className="text-yellow-400 block text-sm font-normal">Controles</span></h1>
        </div>
        
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          <NavItem id="oil" label="Troca de Óleo" icon={FileText} />
          <NavItem id="waste" label="Controle de Desperdício" icon={Trash2} />
          <NavItem id="general_inventory" label="Inventário Geral" icon={ClipboardList} />
          <NavItem id="nola_inventory" label="Inventário - Sistema Nola" icon={ClipboardList} />
          <NavItem id="daily_stock" label="Estoque Diário" icon={ClipboardList} />
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-3">
           <button 
             onClick={handleClear}
             className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-bold uppercase transition-colors border border-gray-700"
           >
             <RefreshCw className="w-4 h-4 mr-2" />
             Limpar Dados
           </button>
           <p className="text-xs text-gray-500 text-center">v1.2 - Otimizado para Mobile</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow bg-gray-100 overflow-y-auto h-[calc(100vh-64px)] md:h-screen print:h-auto print:overflow-visible print:bg-white print:block">
        
        {/* Top Bar for Actions - Hidden on Print */}
        <div className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-8 no-print sticky top-0 z-10">
           <h2 className="text-sm md:text-lg font-semibold text-gray-700 truncate mr-2">
              {activeTab === 'oil' && 'Troca de Óleo'}
              {activeTab === 'waste' && 'Desperdício'}
              {activeTab === 'general_inventory' && 'Inventário Geral'}
              {activeTab === 'nola_inventory' && 'Inventário Nola'}
              {activeTab === 'daily_stock' && 'Estoque Diário'}
           </h2>
           <div className="flex gap-2">
             <button 
               onClick={handleClear}
               className="md:hidden flex items-center justify-center p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
               title="Limpar campos"
             >
               <RefreshCw className="w-5 h-5" />
             </button>
             <button 
               onClick={handlePrint}
               className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded shadow transition-colors text-sm md:text-base"
             >
               <Printer className="w-4 h-4" />
               <span className="hidden md:inline">Imprimir / Salvar PDF</span>
               <span className="md:hidden">PDF</span>
             </button>
           </div>
        </div>

        {/* Document Rendering Canvas */}
        <div className="p-2 md:p-8 print:p-0 flex justify-center print:block">
            {renderContent()}
        </div>
      </main>

    </div>
  );
};

export default App;
import React from 'react';
import { Logo } from './Logo';
import { InventoryCategory } from '../types';

const categories: InventoryCategory[] = [
  {
    title: "Bebidas (Estoque Central)",
    items: [
      { name: "AGUA COM GAS", unit: "UN" },
      { name: "AGUA SEM GAS", unit: "UN" },
      { name: "AMSTEL 473ML", unit: "UN" },
      { name: "CHÁ ICE LIMÃO 450ML", unit: "UN" },
      { name: "CHÁ ICE TEA PESSEGO 450ML", unit: "UN" },
      { name: "CITRUS", unit: "UN" },
      { name: "COCA COLA ZERO 350ML", unit: "UN" },
      { name: "COCA-COLA 2L", unit: "UN" },
      { name: "COCA-COLA 600ML", unit: "UN" },
      { name: "COCA-COLA ORIGINAL 350ML", unit: "UN" },
      { name: "COCA-COLA ZERO 2L", unit: "UN" },
      { name: "COCA ZERO 600ML", unit: "UN" },
      { name: "ENERGETICO MONSTER", unit: "UN" },
      { name: "FANTA GUARANA 350ML", unit: "UN" },
      { name: "FANTA GUARANÁ 2L", unit: "UN" },
      { name: "FANTA GUARANÁ 600ML", unit: "UN" },
      { name: "FANTA LARANJA 2L", unit: "UN" },
      { name: "FANTA LARANJA 350ML", unit: "UN" },
      { name: "FANTA LARANJA 600ML", unit: "UN" },
      { name: "FANTA MARACUJÁ 350ML", unit: "UN" },
      { name: "FANTA UVA 2L", unit: "UN" },
      { name: "FANTA UVA 350ML", unit: "UN" },
      { name: "FANTA UVA 600ML", unit: "UN" },
      { name: "KAPO LARANJA", unit: "UN" },
      { name: "KAPO MORANGO", unit: "UN" },
      { name: "KAPO UVA", unit: "UN" },
      { name: "KUAT 2L", unit: "UN" },
      { name: "KUAT 350ML", unit: "UN" },
      { name: "KUAT 600ML", unit: "UN" },
      { name: "SCHWEPPES CITRUS 350ML", unit: "UN" },
      { name: "SPRITE 2L", unit: "UN" },
      { name: "SPRITE 350ML", unit: "UN" },
      { name: "SPRITE 600ML", unit: "UN" },
      { name: "SUCO 1,5L LARANJA", unit: "UN" },
      { name: "SUCO 1,5L LIMÃO", unit: "UN" },
      { name: "SUCO 1,5L UVA", unit: "UN" },
      { name: "SUCO 450ML LARANJA", unit: "UN" },
      { name: "SUCO 450ML UVA", unit: "UN" },
      { name: "TÔNICA 350ML", unit: "UN" },
      { name: "TÔNICA ZERO 350ML", unit: "UN" },
    ]
  },
  {
    title: "Insumos (Estoque Central)",
    items: [
      { name: "BACON", unit: "KG" },
      { name: "BIS", unit: "UN" },
      { name: "BOMBOM OURO BRANCO", unit: "KG" },
      { name: "CALABRESA", unit: "KG" },
      { name: "CHEDDAR", unit: "KG" },
      { name: "CHOCOLATE BRANCO", unit: "KG" },
      { name: "CHOCOLATE MEIO AMARGO", unit: "KG" },
      { name: "CHOCOLATE PRETO", unit: "KG" },
      { name: "CREME DE AVELÃ", unit: "KG" },
      { name: "FILÉ", unit: "KG" },
      { name: "FRANGO DESFIADO", unit: "KG" },
      { name: "CARNE DE PANELA", unit: "KG" },
      { name: "KIT KAT", unit: "UN" },
      { name: "MM'S", unit: "KG" },
      { name: "MUSSARELA", unit: "KG" },
      { name: "OREO", unit: "UN" },
      { name: "OVO", unit: "UN" },
      { name: "PROVOLONE", unit: "KG" },
      { name: "RECHEIO GOIABADA", unit: "KG" },
      { name: "REQUEIJÃO", unit: "KG" },
      { name: "STIKADINHO", unit: "UN" },
      { name: "STROGONOFF CARNE", unit: "KG" },
      { name: "STROGONOFF FRANGO", unit: "KG" },
    ]
  },
  {
    title: "Ingredientes (Crús)",
    items: [
      { name: "BACON PICADO CRU", unit: "KG" },
      { name: "CARNE MOÍDA CRU", unit: "KG" },
      { name: "GADO CUBOS", unit: "KG" },
      { name: "GADO PICADO", unit: "KG" },
      { name: "PEITO DE FRANGO PICADO", unit: "KG" },
      { name: "SASSAMI", unit: "KG" },
    ]
  },
  {
    title: "Massas",
    items: [
      { name: "MASSA GRANDE", unit: "UN" },
      { name: "MASSA MÉDIA", unit: "UN" },
    ]
  }
];

export const NolaInventory: React.FC = () => {
  const renderTable = (category: InventoryCategory) => (
    <div className="mb-1.5" key={category.title}>
      <table className="w-full border-collapse border border-black text-[8.5px] leading-tight">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-1 py-px text-left w-[45%] uppercase font-bold">{category.title}</th>
            <th className="border border-black px-0.5 py-px w-6 text-center">UN</th>
            <th className="border border-black px-0.5 py-px w-8 text-center">Fec</th>
            <th className="border border-black px-0.5 py-px w-8 text-center">Abe</th>
            <th className="border border-black px-0.5 py-px w-8 text-center">Tot</th>
          </tr>
        </thead>
        <tbody>
          {category.items.map((item, i) => (
            <tr key={i} className="border-b border-black h-[13px]">
              <td className="border-r border-black px-1 font-medium whitespace-nowrap overflow-hidden align-middle">
                <span className="block truncate">{item.name}</span>
              </td>
              <td className="border-r border-black px-0.5 text-center bg-gray-50 text-[7px] align-middle">{item.unit}</td>
              <td className="border-r border-black px-0.5"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
              <td className="border-r border-black px-0.5"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
              <td className="px-0.5"><input type="text" className="w-full h-full bg-transparent outline-none text-center font-bold" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white p-4 max-w-[210mm] mx-auto min-h-[297mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 text-[8.5px] print:w-full print:max-w-none overflow-hidden">
      <style>{`
        @media print {
           @page { size: A4 portrait; margin: 4mm; }
           body { -webkit-print-color-adjust: exact; }
        }
      `}</style>

      <div className="flex justify-between items-center mb-1 border-b border-red-600 pb-1">
         <h1 className="text-lg font-bold text-gray-900 uppercase tracking-wide text-center flex-grow pl-10">
          INVENTÁRIO - SISTEMA NOLA
        </h1>
        <div className="transform scale-75 origin-right">
           <Logo />
        </div>
      </div>
      
      <div className="flex flex-wrap -mx-1.5 items-start">
        {/* Column 1: Bebidas (Long list) */}
        <div className="w-1/2 px-1.5">
           {renderTable(categories[0])} {/* Bebidas */}
        </div>
        
        {/* Column 2: The rest */}
        <div className="w-1/2 px-1.5">
           {renderTable(categories[1])} {/* Insumos */}
           {renderTable(categories[2])} {/* Ingredientes */}
           {renderTable(categories[3])} {/* Massas */}
           
           <div className="mt-2 border border-black p-1.5 bg-gray-50 text-[8.5px]">
             <div className="grid grid-cols-1 gap-1.5">
               <div>
                 <label className="block font-bold mb-px uppercase">Responsável:</label>
                 <input type="text" className="w-full border-b border-black bg-transparent outline-none h-3" />
               </div>
               <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block font-bold mb-px uppercase">Data atual:</label>
                    <input type="text" className="w-full border-b border-black bg-transparent outline-none h-3" placeholder="__/__/__" />
                  </div>
                  <div className="flex-1">
                    <label className="block font-bold mb-px uppercase">Data anterior:</label>
                    <input type="text" className="w-full border-b border-black bg-transparent outline-none h-3" placeholder="__/__/__" />
                  </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
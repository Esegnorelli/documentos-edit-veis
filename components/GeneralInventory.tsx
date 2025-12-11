import React from 'react';
import { Logo } from './Logo';
import { InventoryCategory } from '../types';

const categories: InventoryCategory[] = [
  {
    title: "Insumos",
    items: [
      { name: "Alho caramelizado", unit: "KG" },
      { name: "Azeitona", unit: "KG" },
      { name: "Bacon", unit: "KG" },
      { name: "Banana", unit: "KG" },
      { name: "Batata Palha", unit: "KG" },
      { name: "Batata Palito", unit: "KG" },
      { name: "Batata Smile", unit: "KG" },
      { name: "Bis", unit: "UN" },
      { name: "Bom Bom", unit: "KG" },
      { name: "Brócolis", unit: "KG" },
      { name: "Calabresa", unit: "KG" },
      { name: "Canela", unit: "KG" },
      { name: "Carne de Panela", unit: "KG" },
      { name: "Carne Moída", unit: "KG" },
      { name: "Cebola Caramelizada", unit: "KG" },
      { name: "Cenoura", unit: "UN" },
      { name: "Cheddar", unit: "KG" },
      { name: "Chocolate Branco", unit: "KG" },
      { name: "Choc. Meio Amargo", unit: "KG" },
      { name: "Chocolate Preto", unit: "KG" },
      { name: "Coco Flocos", unit: "KG" },
      { name: "Creme de Avelã", unit: "KG" },
      { name: "Filé", unit: "KG" },
      { name: "Frango Desfiado", unit: "KG" },
      { name: "Kit Kat", unit: "UN" },
      { name: "M&M's", unit: "KG" },
      { name: "Milho", unit: "KG" },
      { name: "Muçarela", unit: "KG" },
      { name: "Orégano", unit: "KG" },
      { name: "Oreo", unit: "UN" },
      { name: "Ovo", unit: "UN" },
      { name: "Palmito", unit: "KG" },
      { name: "Parmesão", unit: "KG" },
      { name: "Provolone", unit: "KG" },
      { name: "Recheio de Goiaba", unit: "KG" },
      { name: "Requeijão", unit: "KG" },
      { name: "Stikadinho", unit: "UN" },
      { name: "Strogonoff carne", unit: "KG" },
      { name: "Strogonoff frango", unit: "KG" },
      { name: "Tempero Verde", unit: "KG" },
      { name: "Maionese Sachê", unit: "UN" },
      { name: "Catchup Sachê", unit: "UN" },
      { name: "Mostarda Sachê", unit: "UN" },
    ]
  },
  {
    title: "Embalagens",
    items: [
      { name: "Caixa Kids", unit: "UN" },
      { name: "Brinquedos", unit: "UN" },
      { name: "Caixa Fritas", unit: "UN" },
      { name: "Guardanapo", unit: "UN" },
      { name: "Papel Bandeja", unit: "UN" },
      { name: "Pastel Grande", unit: "UN" },
      { name: "Pastel Médio doce", unit: "UN" },
      { name: "Pastel Médio Salgado", unit: "UN" },
      { name: "Pastel Pequeno", unit: "UN" },
      { name: "Saco Insumo", unit: "UN" },
      { name: "Tele Entrega", unit: "UN" },
      { name: "Validade Insumos", unit: "RL" },
      { name: "Validade secundária", unit: "UN" },
    ]
  },
  {
    title: "Bebidas",
    items: [
      { name: "Água C/ Gás", unit: "UN" },
      { name: "Água S/ Gás", unit: "UN" },
      { name: "Eisenbahn Longneck", unit: "UN" },
      { name: "Heineken Longneck", unit: "UN" },
      { name: "Coca 350ml", unit: "UN" },
      { name: "Coca 600ml", unit: "UN" },
      { name: "Coca Zero 350ml", unit: "UN" },
      { name: "Coca Zero 600ml", unit: "UN" },
      { name: "Monster 473ml", unit: "UN" },
      { name: "Fanta Guaraná 2L", unit: "UN" },
      { name: "Fanta Guaraná 350ml", unit: "UN" },
      { name: "Fanta Guaraná 600ml", unit: "UN" },
      { name: "Fanta Laranja 350ml", unit: "UN" },
      { name: "Fanta Laranja 600ml", unit: "UN" },
      { name: "Fanta Uva 350ml", unit: "UN" },
      { name: "Fanta Uva 600ml", unit: "UN" },
      { name: "Kapo Laranja", unit: "UN" },
      { name: "Kapo Morango", unit: "UN" },
      { name: "Kapo Uva", unit: "UN" },
      { name: "Kuat 350ml", unit: "UN" },
      { name: "Kuat 600ml", unit: "UN" },
      { name: "Sprite 350ml", unit: "UN" },
      { name: "Sprite 600ml", unit: "UN" },
      { name: "Suco Laranja 1,5ml", unit: "UN" },
      { name: "Suco Laranja 450ml", unit: "UN" },
      { name: "Suco Limão 1,5l", unit: "UN" },
      { name: "Suco Limão 450ml", unit: "UN" },
      { name: "Suco Uva 1,5l", unit: "UN" },
      { name: "Suco Uva 450ml", unit: "UN" },
    ]
  },
  {
      title: "Ingredientes",
      items: [
          { name: "Amido De Milho", unit: "KG" },
          { name: "Bacon", unit: "KG" },
          { name: "Carne Moída", unit: "KG" },
          { name: "Creme Culinário", unit: "KG" },
          { name: "Gado Cubos", unit: "KG" },
          { name: "Gado Picado", unit: "KG" },
          { name: "Mix Frango", unit: "KG" },
          { name: "Mix Moída", unit: "KG" },
          { name: "Mix Picado", unit: "KG" },
          { name: "Molho De Ketchup", unit: "KG" },
          { name: "Molho De Tomate", unit: "KG" },
          { name: "Molho Inglês", unit: "KG" },
          { name: "Peito De Frango", unit: "KG" },
          { name: "Sassami", unit: "KG" },
      ]
  },
  {
      title: "Massas",
      items: [
          { name: "Grande", unit: "UN" },
          { name: "Média", unit: "UN" },
      ]
  },
  {
      title: "Óleos",
      items: [
          { name: "Óleo de Algodão", unit: "KG" },
      ]
  }
];

export const GeneralInventory: React.FC = () => {
  // Reduced to h-[14.5px] and text-[8px] to be extremely safe against mobile print pagination
  const renderTable = (category: InventoryCategory) => (
    <div className="mb-2" key={category.title}>
      <table className="w-full border-collapse border border-black text-[8px] leading-tight">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-1 py-0.5 text-left w-[45%] uppercase font-bold">{category.title}</th>
            <th className="border border-black px-0.5 py-0.5 w-7 text-center">UN</th>
            <th className="border border-black px-0.5 py-0.5 w-9 text-center">Fec</th>
            <th className="border border-black px-0.5 py-0.5 w-9 text-center">Abe</th>
            <th className="border border-black px-0.5 py-0.5 w-9 text-center">Tot</th>
          </tr>
        </thead>
        <tbody>
          {category.items.map((item, i) => (
            <tr key={i} className="border-b border-black h-[14.5px]">
              <td className="border-r border-black px-1 font-medium whitespace-nowrap overflow-hidden align-middle">
                <span className="block truncate">{item.name}</span>
              </td>
              <td className="border-r border-black px-0.5 text-center bg-gray-50 text-[8px] align-middle">{item.unit}</td>
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
    <div className="w-full overflow-x-auto">
      <div className="bg-white p-2 md:p-4 min-w-[210mm] max-w-[210mm] mx-auto min-h-[297mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 text-[8px] print:w-full print:max-w-none print:min-w-0 overflow-hidden">
        <style>{`
          @media print {
             @page { size: A4 portrait; margin: 3mm; }
             body { -webkit-print-color-adjust: exact; }
          }
        `}</style>

        <div className="flex justify-between items-center mb-1 border-b border-red-600 pb-1">
           <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-center flex-grow pl-10">
            INVENTÁRIO GERAL
          </h1>
          <div className="transform scale-75 origin-right">
             <Logo />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-1.5 items-start">
          {/* Column 1 */}
          <div className="w-1/2 px-1.5">
             {renderTable(categories[0])} {/* Insumos */}
             {renderTable(categories[1])} {/* Embalagens */}
          </div>
          
          {/* Column 2 */}
          <div className="w-1/2 px-1.5">
             {renderTable(categories[2])} {/* Bebidas */}
             {renderTable(categories[3])} {/* Ingredientes */}
             <div className="flex gap-2">
               <div className="w-1/2">{renderTable(categories[4])} {/* Massas */}</div>
               <div className="w-1/2">{renderTable(categories[5])} {/* Óleos */}</div>
             </div>
             
             <div className="mt-2 border border-black p-2 bg-gray-50 text-[8px]">
               <div className="grid grid-cols-1 gap-2">
                 <div>
                   <label className="block font-bold mb-0.5 uppercase">Responsável:</label>
                   <input type="text" className="w-full border-b border-black bg-transparent outline-none h-4" />
                 </div>
                 <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block font-bold mb-0.5 uppercase">Data atual:</label>
                      <input type="text" className="w-full border-b border-black bg-transparent outline-none h-4" placeholder="__/__/__" />
                    </div>
                    <div className="flex-1">
                      <label className="block font-bold mb-0.5 uppercase">Data anterior:</label>
                      <input type="text" className="w-full border-b border-black bg-transparent outline-none h-4" placeholder="__/__/__" />
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
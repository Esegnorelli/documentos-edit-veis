import React from 'react';
import { Logo } from './Logo';

type StockItem = string | { name: string; unit: string };

export const DailyStock: React.FC = () => {
  const renderSimpleTable = (title: string, items: StockItem[], rows = items.length, defaultUnit = "un") => (
    <div className="mb-2 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[10px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-2 text-left w-2/3 py-1 uppercase">{title}</th>
            <th className="border border-gray-600 px-2 text-center w-1/3 py-1">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const itemName = typeof item === 'string' ? item : item.name;
            const itemUnit = typeof item === 'string' ? defaultUnit : item.unit;
            
            return (
              <tr key={i} className="h-[22px]">
                <td className="border border-gray-600 px-2">
                   <input 
                    type="text" 
                    defaultValue={itemName} 
                    className="w-full h-full bg-transparent outline-none font-medium text-gray-900" 
                  />
                </td>
                <td className="border border-gray-600 px-2 bg-white">
                    <div className="flex justify-between items-center h-full">
                       <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                       <span className="text-[9px] text-gray-500 ml-1 uppercase">{itemUnit}</span>
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white p-4 md:p-8 min-w-[297mm] max-w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none print:min-w-0 flex flex-col h-full">
        <style>{`
          @media print {
             @page { size: A4 landscape; margin: 5mm; }
          }
        `}</style>
        
        <div className="flex justify-between items-center mb-4 border-b-2 border-red-600 pb-2">
           <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
            Controle do Estoque Diário
          </h1>
          <div className="transform scale-90 origin-right">
             <Logo />
          </div>
        </div>

        <div className="flex-grow flex flex-col gap-4">
            {/* Tabela de Cozidos - Agora com mais destaque */}
            <div className="flex-shrink-0">
              <div className="text-sm font-bold mb-1 uppercase text-red-700">Cozidos</div>
              <table className="w-full border-collapse border border-gray-600 text-[10px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-600 p-1 w-48 text-left uppercase">Descrição</th>
                    {Array.from({length: 4}).map((_, i) => (
                      <React.Fragment key={i}>
                        <th className="border border-gray-600 p-1 w-16">QTD. (KG)</th>
                        <th className="border border-gray-600 p-1 w-20">VAL.</th>
                      </React.Fragment>
                    ))}
                    <th className="border border-gray-600 p-1 w-20">Total (KG)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Bacon", "Carne de Panela", "Carne Moída", "Filé", 
                    "Frango Desfiado", "Strogonoff de Carne", "Strogonoff de Frango"
                  ].map((item, i) => (
                    <tr key={i} className="h-[25px]">
                      <td className="border border-gray-600 px-2 font-medium bg-gray-50">
                        <input type="text" defaultValue={item} className="w-full h-full bg-transparent outline-none text-gray-900" />
                      </td>
                       {Array.from({length: 4}).map((_, j) => (
                          <React.Fragment key={j}>
                            <td className="border border-gray-600 px-1 bg-white">
                               <input type="text" className="w-full bg-transparent outline-none text-right" />
                            </td>
                            <td className="border border-gray-600 px-1 bg-white text-center">
                               <input type="text" className="w-full h-full bg-transparent outline-none text-center" placeholder="__/__/__" />
                            </td>
                          </React.Fragment>
                       ))}
                      <td className="border border-gray-600 px-1 text-center font-bold bg-gray-50">
                        <input type="text" className="w-full bg-transparent outline-none text-right" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Colunas para Hortifrúti e Ingredientes */}
            <div className="flex gap-6 items-start">
              
              <div className="flex-1">
                {renderSimpleTable("Hortifrúti", [
                   "Banana", 
                   "Brócolis", 
                   "Cenoura", 
                   "Tempero Verde"
                 ], 4, "kg")}
              </div>

              <div className="flex-1">
                 {renderSimpleTable("Ingredientes (Crús)", [
                   "Bacon Cru", "Calabresa", "Carne Moída", "Gado Cubos", "Gado Picado",
                   "Peito de Frango", "Sassami"
                 ], 7, "kg")}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                 <div className="border border-gray-600 p-2 text-[10px] h-24 bg-white">
                   <strong className="block mb-1 uppercase text-gray-700">Observações:</strong>
                   <textarea className="w-full h-16 resize-none bg-transparent outline-none" placeholder="Digite observações aqui..."></textarea>
                 </div>
                 
                 <div className="border border-gray-600 p-2 bg-gray-50">
                    <div className="flex flex-col gap-2">
                       <div>
                         <label className="text-[10px] font-bold block uppercase mb-1">Nome do Responsável:</label>
                         <input type="text" className="border-b border-gray-400 w-full bg-transparent outline-none text-sm py-1" />
                       </div>
                       <div>
                         <label className="text-[10px] font-bold block uppercase mb-1">Data:</label>
                         <input type="text" className="border-b border-gray-400 w-32 bg-transparent outline-none text-sm py-1" placeholder="__/__/____" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
        
        {/* Rodapé de Instruções */}
        <div className="mt-auto border-t-2 border-red-600 pt-2 text-[10px] text-gray-600 flex justify-between items-center">
          <p><strong>Atenção:</strong> Tomate seco/Azeitonas (contar &gt; 50%). Calabresa/Muçarela (fracionar por unidade). Provolone (metade = 1 un).</p>
          <p className="font-bold text-red-700">HORA DO PASTEL - QUALIDADE E CONTROLE</p>
        </div>

      </div>
    </div>
  );
};
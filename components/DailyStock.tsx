import React from 'react';
import { Logo } from './Logo';

type StockItem = string | { name: string; unit: string };

export const DailyStock: React.FC = () => {
  // Reduced row height to h-[17px] and font to text-[8.5px] to create safety buffer for mobile printing margins
  const renderSimpleTable = (title: string, items: StockItem[], rows = items.length, defaultUnit = "un") => (
    <div className="mb-1 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[8.5px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-1 text-left w-1/2 py-0.5">{title}</th>
            <th className="border border-gray-600 px-1 text-center w-1/2 py-0.5">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const itemName = typeof item === 'string' ? item : item.name;
            const itemUnit = typeof item === 'string' ? defaultUnit : item.unit;
            
            return (
              <tr key={i} className="h-[17px]">
                <td className="border border-gray-600 px-1">
                   <input 
                    type="text" 
                    defaultValue={itemName} 
                    className="w-full h-full bg-transparent outline-none font-medium text-gray-900 placeholder-gray-400" 
                  />
                </td>
                <td className="border border-gray-600 px-1 bg-white">
                    <div className="flex justify-between items-center h-full">
                       <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                       <span className="text-[8px] text-gray-500 ml-1 uppercase">{itemUnit}</span>
                    </div>
                </td>
              </tr>
            );
          })}
          {items.length < rows && Array.from({length: rows - items.length}).map((_, i) => (
             <tr key={`empty-${i}`} className="h-[17px]">
                <td className="border border-gray-600 px-1 bg-white"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
                <td className="border border-gray-600 px-1 bg-white">
                  <div className="flex justify-between items-center h-full">
                     <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                     <span className="text-[8px] text-gray-500 ml-1 uppercase">{defaultUnit}</span>
                  </div>
                </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMassasTable = () => (
    <div className="mb-1 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[8.5px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-1 text-left w-1/2 py-0.5">Massas</th>
            <th className="border border-gray-600 px-1 text-center w-1/2 py-0.5">Total</th>
          </tr>
        </thead>
        <tbody>
          {["Massa Grande", "Massa Média"].map((item, i) => (
            <tr key={i} className="h-[17px]">
              <td className="border border-gray-600 px-1 font-medium text-gray-900 align-middle">
                {item}
              </td>
              <td className="border border-gray-600 px-1 bg-white">
                <div className="flex justify-between items-center h-full gap-1">
                  <div className="flex items-center flex-1 min-w-0">
                    <input type="text" className="w-full bg-transparent outline-none text-right min-w-0" />
                    <span className="text-[8px] text-gray-500 ml-0.5 uppercase">PCT</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300 mx-0.5"></div>
                  <div className="flex items-center flex-1 min-w-0">
                    <input type="text" className="w-full bg-transparent outline-none text-right min-w-0" />
                    <span className="text-[8px] text-gray-500 ml-0.5 uppercase">UN</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white p-2 md:p-4 min-w-[297mm] max-w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none flex flex-col h-full justify-between">
        <style>{`
          @media print {
             @page { size: A4 landscape; margin: 3mm; }
          }
        `}</style>
        
        <div className="flex justify-center items-center mb-1 border-b-2 border-red-600 pb-1 flex-shrink-0">
           <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-center mr-4">
            Controle do Estoque Diário
          </h1>
          <div className="transform scale-60">
             <Logo />
          </div>
        </div>

        <div className="flex-grow flex flex-col gap-1">
            {/* Complex Meat Table - Cozidos */}
            <div className="flex-shrink-0">
              <div className="text-[9px] font-bold mb-0.5 italic">Cozidos</div>
              <table className="w-full border-collapse border border-gray-600 text-[8.5px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-600 p-0.5 w-32 text-left">Descrição</th>
                    {Array.from({length: 4}).map((_, i) => (
                      <React.Fragment key={i}>
                        <th className="border border-gray-600 p-0.5 w-12">QTD. (KG)</th>
                        <th className="border border-gray-600 p-0.5 w-14">VAL.</th>
                      </React.Fragment>
                    ))}
                    <th className="border border-gray-600 p-0.5 w-16">Total (KG)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Bacon", "Carne de Panela", "Carne Moída", "Filé", 
                    "Frango Desfiado", "Strogonoff de Carne", "Strogonoff de Frango"
                  ].map((item, i) => (
                    <tr key={i} className="h-[17px]">
                      <td className="border border-gray-600 px-1 font-medium">
                        <input type="text" defaultValue={item} className="w-full h-full bg-transparent outline-none text-gray-900" />
                      </td>
                       {Array.from({length: 4}).map((_, j) => (
                          <React.Fragment key={j}>
                            <td className="border border-gray-600 px-1 bg-white">
                              <div className="flex justify-between items-center h-full">
                                 <input type="text" className="w-full bg-transparent outline-none text-right" />
                              </div>
                            </td>
                            <td className="border border-gray-600 px-0.5 bg-white text-center">
                               <input type="text" className="w-full h-full bg-transparent outline-none text-center tracking-tighter" placeholder="__/__/__" />
                            </td>
                          </React.Fragment>
                       ))}
                      <td className="border border-gray-600 px-1 text-center font-bold bg-white">
                          <div className="flex justify-between items-center h-full">
                              <input type="text" className="w-full bg-transparent outline-none text-right" />
                          </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Columns for lists */}
            <div className="flex gap-2 items-start flex-grow">
              
              {/* Col 1 */}
              <div className="flex-1">
                {renderSimpleTable("Chocolates", [
                  "Bis", 
                  "BomBom", 
                  "Kit Kat", 
                  { name: "M&Ms", unit: "kg" },
                  "Oreo", 
                  "Stikadinho"
                ])}

                {renderSimpleTable("Hortifrúti", [
                   "Banana", 
                   "Brócolis", 
                   "Cenoura", 
                   "Tempero Verde"
                 ], 4, "kg")}

                 {renderMassasTable()}
              </div>

              {/* Col 2 */}
              <div className="flex-1">
                 {renderSimpleTable("Secos", [
                   "Alho Caramelizado",
                   "Azeitona",
                   "Batata Palha",
                   "Batata Palito", 
                   "Batata Smile", 
                   "Bisnaga Choc. Branco", 
                   "Bisnaga Choc. Preto", 
                   "Bisnaga Creme de Avelã", 
                   "Bisnaga de Goiaba", 
                   "Bisnaga Meio Amargo", 
                   "Canela", 
                   "Cebola Caramelizada", 
                   "Coco Ralado", 
                   "Milho", 
                   "Óleo Algodão", 
                   "Orégano", 
                   "Palmito", 
                   "Tomate Seco"
                 ], 18, "kg")}
              </div>

              {/* Col 3 */}
              <div className="flex-1 flex flex-col h-full">
                 {renderSimpleTable("Laticínios e Ovos (Refrigerados)", [
                   { name: "Bisnaga Cheddar", unit: "kg" },
                   { name: "Bisnaga Requeijão", unit: "kg" },
                   { name: "Muçarela", unit: "kg" },
                   { name: "Ovo", unit: "un" },
                   { name: "Parmesão", unit: "kg" },
                   { name: "Provolone", unit: "kg" }
                 ])}

                 {renderSimpleTable("Ingredientes (Crús)", [
                   "Bacon Cru", "Calabresa", "Carne Moída", "Gado Cubos", "Gado Picado",
                   "Peito de Frango", "Sassami"
                 ], 7, "kg")}
                 
                 <div className="mt-auto">
                   <div className="border border-gray-600 p-1 text-[8px] h-10 bg-white mb-1">
                     <strong className="block mb-0.5">Observações:</strong>
                     <textarea className="w-full h-4 resize-none bg-transparent outline-none" placeholder="..."></textarea>
                   </div>
                   
                   <div className="border border-gray-600 p-1 bg-gray-50">
                      <div className="flex flex-col gap-1">
                         <div>
                           <label className="text-[8px] font-bold mr-2">Nome:</label>
                           <input type="text" className="border-b border-gray-600 flex-grow w-full bg-transparent outline-none text-xs" />
                         </div>
                         <div>
                           <label className="text-[8px] font-bold mr-2">Data:</label>
                           <input type="text" className="border-b border-gray-600 w-32 bg-transparent outline-none text-xs" placeholder="__/__/____" />
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
        </div>
        
        {/* Instructions footer */}
        <div className="mt-1 border-t border-gray-400 pt-0.5 text-[8px] text-gray-600 flex-shrink-0">
          <p><strong>Atenção:</strong> Tomate seco/Azeitonas (contar &gt; 50%). Calabresa/Muçarela (fracionar por unidade). Provolone (metade = 1 un).</p>
        </div>

      </div>
    </div>
  );
};
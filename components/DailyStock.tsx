import React from 'react';
import { Logo } from './Logo';

export const DailyStock: React.FC = () => {
  const renderSimpleTable = (title: string, items: string[], rows = items.length) => (
    <div className="mb-4 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[10px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-1 text-left w-1/2">{title}</th>
            <th className="border border-gray-600 px-1 text-center w-1/2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="h-5">
              <td className="border border-gray-600 px-1">
                 <input 
                  type="text" 
                  defaultValue={item} 
                  className="w-full h-full bg-transparent outline-none font-medium text-gray-900 placeholder-gray-400" 
                />
              </td>
              <td className="border border-gray-600 px-1 bg-white">
                  <div className="flex justify-between items-center h-full">
                     <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                     <span className="text-[9px] text-gray-500 ml-1">un</span>
                  </div>
              </td>
            </tr>
          ))}
          {items.length < rows && Array.from({length: rows - items.length}).map((_, i) => (
             <tr key={`empty-${i}`} className="h-5">
                <td className="border border-gray-600 px-1 bg-white"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
                <td className="border border-gray-600 px-1 bg-white">
                  <div className="flex justify-between items-center h-full">
                     <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                     <span className="text-[9px] text-gray-500 ml-1">un</span>
                  </div>
                </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white p-4 max-w-[297mm] mx-auto min-h-[210mm] shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none">
      <style>{`
        @media print {
           @page { size: A4 landscape; margin: 5mm; }
        }
      `}</style>
      
      <div className="flex justify-center items-center mb-2 border-b-2 border-red-600 pb-1">
         <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide text-center mr-4">
          Controle do Estoque Diário
        </h1>
        <div className="transform scale-50">
           <Logo />
        </div>
      </div>

      {/* Complex Meat Table */}
      <div className="mb-4">
        <div className="text-xs font-bold mb-1 italic">Resfriados (Carnes)</div>
        <table className="w-full border-collapse border border-gray-600 text-[10px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-600 p-1 w-32 text-left">Descrição</th>
              {Array.from({length: 4}).map((_, i) => (
                <React.Fragment key={i}>
                  <th className="border border-gray-600 p-1 w-12">QTD.</th>
                  <th className="border border-gray-600 p-1 w-12">VAL.</th>
                </React.Fragment>
              ))}
              <th className="border border-gray-600 p-1 w-16">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Bacon", "Carne de Panela", "Carne Moída", "Filé", 
              "Frango Desfiado", "Strogonoff de Carne", "Strogonoff de Frango"
            ].map((item, i) => (
              <tr key={i} className="h-6">
                <td className="border border-gray-600 px-1 font-medium">
                  <input type="text" defaultValue={item} className="w-full h-full bg-transparent outline-none text-gray-900" />
                </td>
                 {Array.from({length: 4}).map((_, j) => (
                    <React.Fragment key={j}>
                      <td className="border border-gray-600 px-1 text-center bg-white"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
                      <td className="border border-gray-600 px-1 text-center bg-gray-50 text-[9px]">UN</td>
                    </React.Fragment>
                 ))}
                <td className="border border-gray-600 px-1 text-center font-bold bg-white"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Columns for lists */}
      <div className="flex gap-4 items-start">
        
        {/* Col 1 */}
        <div className="flex-1">
          {renderSimpleTable("Diversos", [
            "Azeitona", "Batata Palha", "Batata Palito", "Batata Smile", "Bis",
            "BomBom", "Canela", "Coco Ralado", "Kit Kat", "M&Ms", "Milho",
            "Óleo Algodão", "Orégano", "Oreo", "Palmito", "Sikadinho", "Tomate Seco"
          ], 23)}
        </div>

        {/* Col 2 */}
        <div className="flex-1">
           {renderSimpleTable("Massas", ["Massa Grande", "Massa Pequena"])}
           {renderSimpleTable("Laticínios & Embutidos", [
             "Bacon Cru", "Calabresa", "Cheddar", "Muçarela", "Parmesão", 
             "Provolone", "Requeijão"
           ])}
           
           <div className="mt-4 border border-gray-600 p-2 text-[10px] h-32">
             <strong className="block mb-1">Observações:</strong>
             <textarea className="w-full h-24 resize-none bg-transparent outline-none" placeholder="Digite observações aqui..."></textarea>
           </div>
        </div>

        {/* Col 3 */}
        <div className="flex-1">
           {renderSimpleTable("Hortifruti", ["Banana", "Brócolis", "Cenoura", "Ovo", "Tempero Verde"])}
           {renderSimpleTable("Chocolates & Caramelizados", [
             "Alho Caramelizado", "Cebola Caramelizada", "Chocolate Preto", 
             "Chocolate Branco", "Chocolate Amargo", "Avelã", "Goiabada"
           ])}

           <div className="mt-8 border border-gray-600 p-3 bg-gray-50">
              <div className="flex flex-col gap-3">
                 <div>
                   <label className="text-xs font-bold mr-2">Nome:</label>
                   <input type="text" className="border-b border-gray-600 flex-grow w-full bg-transparent outline-none" />
                 </div>
                 <div>
                   <label className="text-xs font-bold mr-2">Data:</label>
                   <input type="text" className="border-b border-gray-600 w-32 bg-transparent outline-none" placeholder="__/__/____" />
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Instructions footer - shortened version */}
      <div className="mt-4 border-t border-gray-400 pt-2 text-[9px] text-gray-600">
        <p><strong>Atenção:</strong> Tomate seco/Azeitonas (contar &gt; 50%). Calabresa/Muçarela (fracionar por unidade). Provolone (metade = 1 un).</p>
      </div>

    </div>
  );
};
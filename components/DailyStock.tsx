import React from 'react';
import { Logo } from './Logo';

export const DailyStock: React.FC = () => {
  const renderSimpleTable = (title: string, items: string[], rows = items.length, unit = "un") => (
    <div className="mb-2 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[9px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-1 text-left w-1/2 py-0.5">{title}</th>
            <th className="border border-gray-600 px-1 text-center w-1/2 py-0.5">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="h-[18px]">
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
                     <span className="text-[8px] text-gray-500 ml-1">{unit}</span>
                  </div>
              </td>
            </tr>
          ))}
          {items.length < rows && Array.from({length: rows - items.length}).map((_, i) => (
             <tr key={`empty-${i}`} className="h-[18px]">
                <td className="border border-gray-600 px-1 bg-white"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
                <td className="border border-gray-600 px-1 bg-white">
                  <div className="flex justify-between items-center h-full">
                     <input type="text" className="w-full h-full bg-transparent outline-none text-right" />
                     <span className="text-[8px] text-gray-500 ml-1">{unit}</span>
                  </div>
                </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white p-4 max-w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none">
      <style>{`
        @media print {
           @page { size: A4 landscape; margin: 5mm; }
        }
      `}</style>
      
      <div className="flex justify-center items-center mb-1 border-b-2 border-red-600 pb-1">
         <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-center mr-4">
          Controle do Estoque Diário
        </h1>
        <div className="transform scale-50">
           <Logo />
        </div>
      </div>

      {/* Complex Meat Table - FIXED as requested */}
      <div className="mb-2">
        <div className="text-[10px] font-bold mb-0.5 italic">Resfriados (Carnes)</div>
        <table className="w-full border-collapse border border-gray-600 text-[9px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-600 p-0.5 w-32 text-left">Descrição</th>
              {Array.from({length: 4}).map((_, i) => (
                <React.Fragment key={i}>
                  <th className="border border-gray-600 p-0.5 w-12">QTD.</th>
                  <th className="border border-gray-600 p-0.5 w-12">VAL.</th>
                </React.Fragment>
              ))}
              <th className="border border-gray-600 p-0.5 w-16">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Bacon", "Carne de Panela", "Carne Moída", "Filé", 
              "Frango Desfiado", "Strogonoff de Carne", "Strogonoff de Frango"
            ].map((item, i) => (
              <tr key={i} className="h-5">
                <td className="border border-gray-600 px-1 font-medium">
                  <input type="text" defaultValue={item} className="w-full h-full bg-transparent outline-none text-gray-900" />
                </td>
                 {Array.from({length: 4}).map((_, j) => (
                    <React.Fragment key={j}>
                      <td className="border border-gray-600 px-1 text-center bg-white"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
                      <td className="border border-gray-600 px-1 text-center bg-gray-50 text-[8px]">UN</td>
                    </React.Fragment>
                 ))}
                <td className="border border-gray-600 px-1 text-center font-bold bg-white"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Columns for lists - Reorganized Categories */}
      <div className="flex gap-3 items-start">
        
        {/* Col 1: Doces */}
        <div className="flex-1">
          {renderSimpleTable("Chocolates & Bisnagas Doces", [
            "Bisnaga Choc. Preto", 
            "Bisnaga Choc. Branco", 
            "Bisnaga Meio Amargo", 
            "Bisnaga Creme de Avelã", 
            "Bisnaga de Goiaba"
          ])}

          {renderSimpleTable("Doces & Sobremesas", [
             "Banana", "Bis", "BomBom", "Canela", 
             "Coco Ralado", "Kit Kat", "M&Ms", 
             "Oreo", "Stikadinho"
          ])}
        </div>

        {/* Col 2: Hortifruti, Diversos & Frituras */}
        <div className="flex-1">
           {renderSimpleTable("Hortifruti", [
             "Brócolis", "Cenoura", "Tempero Verde"
           ])}

           {renderSimpleTable("Diversos", [
             "Alho Caramelizado", "Azeitona", "Cebola Caramelizada", 
             "Milho", "Orégano", "Ovo", "Palmito", "Tomate Seco"
           ])}
           
           {renderSimpleTable("Frituras & Acompanhamentos", [
             "Batata Palha", "Batata Palito", "Batata Smile", "Óleo Algodão"
           ])}
        </div>

        {/* Col 3: Massas, Queijos e Crus */}
        <div className="flex-1">
           <div className="flex gap-2">
             <div className="w-1/2">{renderSimpleTable("Massas", ["Massa Grande", "Massa Pequena"])}</div>
             <div className="w-1/2">{renderSimpleTable("Queijos & Bisnagas", [
               "Bisnaga Cheddar", "Bisnaga Requeijão", 
               "Muçarela", "Parmesão", "Provolone"
             ])}</div>
           </div>

           {/* Calabresa moved here */}
           {renderSimpleTable("Ingredientes (Crús)", [
             "Bacon Cru", "Calabresa", "Carne Moída", "Gado Cubos", "Gado Picado",
             "Peito de Frango", "Sassami"
           ], 7, "kg")}
           
           <div className="mt-2 border border-gray-600 p-2 text-[9px] h-16 bg-white">
             <strong className="block mb-1">Observações:</strong>
             <textarea className="w-full h-8 resize-none bg-transparent outline-none" placeholder="Digite observações aqui..."></textarea>
           </div>
           
           <div className="mt-2 border border-gray-600 p-2 bg-gray-50">
              <div className="flex flex-col gap-2">
                 <div>
                   <label className="text-[9px] font-bold mr-2">Nome:</label>
                   <input type="text" className="border-b border-gray-600 flex-grow w-full bg-transparent outline-none text-xs" />
                 </div>
                 <div>
                   <label className="text-[9px] font-bold mr-2">Data:</label>
                   <input type="text" className="border-b border-gray-600 w-32 bg-transparent outline-none text-xs" placeholder="__/__/____" />
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Instructions footer */}
      <div className="mt-2 border-t border-gray-400 pt-1 text-[8px] text-gray-600">
        <p><strong>Atenção:</strong> Tomate seco/Azeitonas (contar &gt; 50%). Calabresa/Muçarela (fracionar por unidade). Provolone (metade = 1 un).</p>
      </div>

    </div>
  );
};
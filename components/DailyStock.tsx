import React from 'react';
import { Logo } from './Logo';

type StockItem = string | { name: string; unit: string };

export const DailyStock: React.FC = () => {
  const renderSimpleTable = (title: string, items: StockItem[], defaultUnit = "un") => (
    <div className="mb-2 print:break-inside-avoid">
      <table className="w-full border-collapse border border-gray-600 text-[10px] leading-tight">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-600 px-2 text-left w-2/3 py-1 uppercase font-bold text-gray-700">{title}</th>
            <th className="border border-gray-600 px-2 text-center w-1/3 py-1">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const itemName = typeof item === 'string' ? item : item.name;
            const itemUnit = typeof item === 'string' ? defaultUnit : item.unit;
            
            return (
              <tr key={i} className="h-[22px] print:h-[20px]">
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
                       <span className="text-[9px] text-gray-400 ml-1 uppercase">{itemUnit}</span>
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
      <div className="bg-white p-4 md:p-6 min-w-[297mm] max-w-[297mm] mx-auto min-h-[210mm] print:min-h-0 print:h-[200mm] shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none print:min-w-0 flex flex-col h-full overflow-hidden">
        <style>{`
          @media print {
             @page { 
               size: A4 landscape; 
               margin: 5mm !important; 
             }
             body { -webkit-print-color-adjust: exact; }
             /* Ensure no extra pages are created */
             html, body { height: 100%; overflow: hidden; }
          }
        `}</style>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-2 border-b-2 border-red-600 pb-1">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
              Controle do Estoque Diário
            </h1>
            <span className="text-[9px] text-gray-500 font-medium italic">Visão Real e Organização de Produção</span>
          </div>
          <div className="transform scale-75 origin-right">
             <Logo />
          </div>
        </div>

        <div className="flex-grow flex flex-col gap-2">
            {/* Tabela de Cozidos - Full Width */}
            <div className="flex-shrink-0">
              <div className="text-[10px] font-bold mb-1 uppercase text-red-700 flex items-center">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-1.5"></span>
                Cozidos / Prontos (Estoque Diário)
              </div>
              <table className="w-full border-collapse border border-gray-600 text-[10px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-600 p-1 w-44 text-left uppercase">Descrição</th>
                    {Array.from({length: 4}).map((_, i) => (
                      <React.Fragment key={i}>
                        <th className="border border-gray-600 p-1 w-16 text-center">QTD (KG)</th>
                        <th className="border border-gray-600 p-1 w-16 text-center">VAL.</th>
                      </React.Fragment>
                    ))}
                    <th className="border border-gray-600 p-1 w-16 text-center">Total (KG)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Bacon Frito", "Carne de Panela", "Carne Moída", "Filé", 
                    "Frango Desfiado", "Strogonoff de Carne", "Strogonoff de Frango"
                  ].map((item, i) => (
                    <tr key={i} className="h-[23px] print:h-[21px]">
                      <td className="border border-gray-600 px-2 font-medium bg-gray-50 text-[9px]">
                        <input type="text" defaultValue={item} className="w-full h-full bg-transparent outline-none text-gray-900" />
                      </td>
                       {Array.from({length: 4}).map((_, j) => (
                          <React.Fragment key={j}>
                            <td className="border border-gray-600 px-1 bg-white">
                               <input type="text" className="w-full bg-transparent outline-none text-right" />
                            </td>
                            <td className="border border-gray-600 px-1 bg-white text-center">
                               <input type="text" className="w-full h-full bg-transparent outline-none text-center text-[9px]" placeholder="__/__/__" />
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

            {/* Coluna Esquerda: Hortifrúti, Embutidos e Ovos | Coluna Direita: Observações e Assinaturas */}
            <div className="flex gap-4 items-stretch flex-grow">
              
              {/* Esquerda */}
              <div className="w-5/12 flex flex-col gap-1">
                {renderSimpleTable("Hortifrúti, Embutidos e Ovos", [
                   "Banana", 
                   "Brócolis", 
                   "Tempero Verde",
                   "Ovo",
                   { name: "Calabresa", unit: "kg" },
                   { name: "Bacon (Picado)", unit: "kg" }
                 ], "un")}
              </div>

              {/* Direita */}
              <div className="w-7/12 flex flex-col gap-2">
                 <div className="border-2 border-gray-600 p-2 bg-white flex flex-col flex-grow">
                   <strong className="block mb-1 uppercase text-gray-800 text-[10px] border-b border-gray-200 pb-0.5">Observações Gerais:</strong>
                   <textarea 
                    className="w-full flex-grow resize-none bg-transparent outline-none text-xs leading-tight" 
                    placeholder="Anote aqui desperdícios, necessidades de compra ou observações de produção..."
                   ></textarea>
                 </div>
                 
                 <div className="border border-gray-600 p-3 bg-gray-50 grid grid-cols-2 gap-4 flex-shrink-0">
                    <div>
                      <label className="text-[9px] font-bold block uppercase text-gray-600 mb-0.5">Nome do Responsável:</label>
                      <input type="text" className="border-b border-gray-400 w-full bg-transparent outline-none text-sm py-0.5 font-medium" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold block uppercase text-gray-600 mb-0.5">Data de Preenchimento:</label>
                      <input type="text" className="border-b border-gray-400 w-full bg-transparent outline-none text-sm py-0.5 text-center font-medium" placeholder="__/__/____" />
                    </div>
                 </div>
              </div>
            </div>
        </div>
        
        {/* Rodapé Didático */}
        <div className="mt-3 border-t-2 border-red-600 pt-2 grid grid-cols-12 gap-3 flex-shrink-0">
          <div className="col-span-8 border-r border-gray-300 pr-3">
            <h4 className="text-[10px] font-bold text-red-700 uppercase mb-0.5">ATENÇÃO – OBJETIVOS DO CONTROLE</h4>
            <p className="text-[9px] text-gray-700 leading-tight">
              Preenchimento <strong>obrigatório</strong> ao final do último turno. Garante a visão real do estoque, 
              auxiliando no planejamento de compras, organização da produção e redução de desperdícios.
            </p>
          </div>
          <div className="col-span-4">
            <h4 className="text-[10px] font-bold text-gray-900 uppercase mb-0.5 flex items-center">
              ⚠️ ATENÇÃO ÀS VALIDADES
            </h4>
            <p className="text-[9px] text-gray-700 leading-tight italic">
              Mais de 3 validades indica produção excessiva. Produza conforme a demanda.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
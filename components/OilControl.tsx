import React from 'react';
import { Logo } from './Logo';

export const OilControl: React.FC = () => {
  return (
    <div className="bg-white p-4 max-w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 landscape:w-full print:w-full print:max-w-none flex flex-col h-full">
       <style>{`
        @media print {
           @page { size: A4 landscape; margin: 5mm; }
           body { -webkit-print-color-adjust: exact; }
        }
      `}</style>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-1.5 border-b-2 border-red-600 pb-1">
         <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide text-center flex-grow">
          Controle de Troca e Reposição de Óleo
        </h1>
        <div className="transform scale-90 origin-right">
           <Logo />
        </div>
      </div>

      {/* Warning Box */}
      <div className="border-2 border-red-500 bg-red-50 p-1.5 mb-2 text-center text-xs flex justify-between items-center px-4 rounded-md">
         <div className="flex flex-col items-start text-left">
            <strong className="text-red-700 uppercase">ATENÇÃO!</strong>
            <span className="font-medium text-[11px]">Troca: Máx 07 dias | Filtragem: A cada 03 dias</span>
         </div>
         <div className="flex items-center gap-2 text-sm font-bold">
            <span>Temp. Ideal (150°C a 170°C):</span>
            <input type="text" className="w-12 text-center bg-transparent border-b-2 border-red-400 outline-none text-red-900" placeholder="___" />
            <span>°C</span>
         </div>
         <div className="text-right leading-tight text-[10px] font-medium text-gray-700">
             <span>Nível do óleo: Respeitar limite</span>
             <br/>
             <span>"→": Repetir data anterior</span>
         </div>
      </div>

      {/* Main Grid */}
      <div className="flex gap-4 flex-grow items-start h-full">
        
        {/* LEFT PANEL: Troca & Filtragem */}
        <div className="w-1/2 flex flex-col gap-3 h-full">
            
            {/* Troca de Óleo - Reduced to 5 rows (approx 1 month at 7 days) to save space */}
            <div className="flex-grow">
              <h3 className="font-bold text-center text-xs py-1 bg-gray-200 border border-black border-b-0 uppercase">Troca de óleo</h3>
              <table className="w-full border border-black text-xs h-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-black">
                    <th className="border-r border-black w-24 py-1">Data</th>
                    <th className="border-r border-black py-1">Quant. (L)</th>
                    <th className="py-1">Assinatura</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="h-7 border-b border-black">
                       <td className="border-r border-black p-0 relative">
                          {i === 0 && <span className="absolute left-1 top-1 text-[9px] font-bold">→</span>}
                          <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                       </td>
                       <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></td>
                       <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-2" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Filtragem - Two side-by-side tables. 10 rows total per month is accurate (every 3 days). */}
            <div className="flex-grow">
                <h3 className="font-bold text-center text-xs py-1 bg-gray-200 border border-black border-b-0 uppercase">Filtragem do óleo</h3>
                <div className="flex gap-0">
                     {/* Filtragem Table 1 */}
                     <table className="w-1/2 border border-black text-xs border-r-0">
                        <thead>
                          <tr className="bg-gray-100 border-b border-black">
                            <th className="border-r border-black w-20 py-1">Data</th>
                            <th className="py-1 border-r border-black">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }).map((_, i) => (
                            <tr key={i} className="h-7 border-b border-black">
                              <td className="border-r border-black p-0 relative">
                                 {i === 0 && <span className="absolute left-1 top-1 text-[9px] font-bold">→</span>}
                                 <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                              </td>
                              <td className="p-0 border-r border-black"><input type="text" className="w-full h-full outline-none bg-transparent px-2" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                     
                     {/* Filtragem Table 2 */}
                     <table className="w-1/2 border border-black text-xs">
                        <thead>
                          <tr className="bg-gray-100 border-b border-black">
                            <th className="border-r border-black w-20 py-1">Data</th>
                            <th className="py-1">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }).map((_, i) => (
                            <tr key={i} className="h-7 border-b border-black">
                              <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" /></td>
                              <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-2" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                </div>
            </div>
        </div>

        {/* RIGHT PANEL: Reposição */}
        <div className="w-1/2 flex flex-col h-full">
          <h3 className="font-bold text-center text-xs py-1 bg-gray-200 border border-black border-b-0 uppercase">Reposição Diária</h3>
          <div className="flex gap-0 h-full">
             {/* Reposição Table 1 - Reduced to 16 rows (Total 32 slots for full month + 1) */}
            <table className="w-1/2 border border-black text-xs h-auto border-r-0">
              <thead>
                <tr className="bg-gray-100 border-b border-black">
                   <th className="border-r border-black w-14 py-1">Data</th>
                   <th className="border-r border-black w-12 py-1">Qtd</th>
                   <th className="py-1 border-r border-black">Assin.</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 16 }).map((_, i) => (
                   <tr key={i} className="h-6 border-b border-black">
                      <td className="border-r border-black p-0 relative">
                        {i === 0 && <span className="absolute left-1 top-1 text-[9px] font-bold">→</span>}
                        <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                      </td>
                      <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></td>
                      <td className="p-0 border-r border-black"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
            
             {/* Reposição Table 2 */}
            <table className="w-1/2 border border-black text-xs h-auto">
              <thead>
                <tr className="bg-gray-100 border-b border-black">
                   <th className="border-r border-black w-14 py-1">Data</th>
                   <th className="border-r border-black w-12 py-1">Qtd</th>
                   <th className="py-1">Assin.</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 16 }).map((_, i) => (
                   <tr key={i} className="h-6 border-b border-black">
                      <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" /></td>
                      <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></td>
                      <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-1 border-t-2 border-black flex justify-end">
        <div className="flex items-end w-1/3">
            <span className="text-sm font-bold mr-2">RESPONSÁVEL:</span>
            <input type="text" className="border-b border-black flex-grow outline-none text-sm" />
        </div>
      </div>
      
    </div>
  );
};
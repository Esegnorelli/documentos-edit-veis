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
      <div className="flex justify-between items-center mb-1 border-b-2 border-red-600 pb-1">
         <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-center flex-grow">
          Controle de Troca e Reposição de Óleo
        </h1>
        <div className="transform scale-75 origin-right">
           <Logo />
        </div>
      </div>

      {/* Warning Box */}
      <div className="border border-red-500 bg-red-50 p-1 mb-1 text-center text-[10px] flex justify-between items-center px-4">
         <div className="flex flex-col items-start text-left">
            <strong className="text-red-600 text-xs">ATENÇÃO!</strong>
            <span>Troca: Máx 07 dias | Filtragem: A cada 03 dias</span>
         </div>
         <div className="flex items-center gap-2">
            <span>Temp. Fritadeira (150°C a 170°C). Ideal:</span>
            <input type="text" className="w-8 text-center bg-transparent border-b border-red-400 outline-none font-bold" placeholder="___" />
            <span>°C</span>
         </div>
         <div className="text-right leading-tight">
             <span>Nível do óleo: Respeitar limite</span>
             <br/>
             <span>"→": Repetir data anterior</span>
         </div>
      </div>

      {/* Main Grid */}
      <div className="flex gap-3 flex-grow items-start">
        
        {/* LEFT PANEL: Troca & Filtragem */}
        <div className="w-1/2 flex flex-col gap-1">
            
            {/* Troca de Óleo - Full Width of Left Panel */}
            <div>
              <h3 className="font-bold text-center text-xs mb-0.5 bg-gray-100 border border-black border-b-0">Troca de óleo</h3>
              <table className="w-full border border-black text-[10px]">
                <thead>
                  <tr className="bg-gray-200 border-b border-black">
                    <th className="border-r border-black w-20 py-0.5">Data</th>
                    <th className="border-r border-black py-0.5">Quant. (L)</th>
                    <th className="py-0.5">Assinatura</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <tr key={i} className="h-4 border-b border-black">
                       <td className="border-r border-black p-0 relative">
                          {i === 0 && <span className="absolute left-0 top-0 text-[7px] px-0.5">→</span>}
                          <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                       </td>
                       <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></td>
                       <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Filtragem - Two side-by-side tables */}
            <div>
                <h3 className="font-bold text-center text-xs mb-0.5 bg-gray-100 border border-black border-b-0">Filtragem do óleo</h3>
                <div className="flex gap-1">
                     {/* Filtragem Table 1 */}
                     <table className="w-1/2 border border-black text-[10px]">
                        <thead>
                          <tr className="bg-gray-200 border-b border-black">
                            <th className="border-r border-black w-16 py-0.5">Data</th>
                            <th className="py-0.5">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <tr key={i} className="h-4 border-b border-black">
                              <td className="border-r border-black p-0 relative">
                                 {i === 0 && <span className="absolute left-0 top-0 text-[7px] px-0.5">→</span>}
                                 <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                              </td>
                              <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                     
                     {/* Filtragem Table 2 */}
                     <table className="w-1/2 border border-black text-[10px]">
                        <thead>
                          <tr className="bg-gray-200 border-b border-black">
                            <th className="border-r border-black w-16 py-0.5">Data</th>
                            <th className="py-0.5">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <tr key={i} className="h-4 border-b border-black">
                              <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" /></td>
                              <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                </div>
            </div>
        </div>

        {/* RIGHT PANEL: Reposição */}
        <div className="w-1/2 flex flex-col h-full">
          <h3 className="font-bold text-center text-xs mb-0.5 bg-gray-100 border border-black border-b-0">Reposição</h3>
          <div className="flex gap-1 h-full">
             {/* Reposição Table 1 */}
            <table className="w-1/2 border border-black text-[10px] h-auto">
              <thead>
                <tr className="bg-gray-200 border-b border-black">
                   <th className="border-r border-black w-12 py-0.5">Data</th>
                   <th className="border-r border-black w-10 py-0.5">Qtd</th>
                   <th className="py-0.5">Assin.</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 19 }).map((_, i) => (
                   <tr key={i} className="h-4 border-b border-black">
                      <td className="border-r border-black p-0 relative">
                        {i === 0 && <span className="absolute left-0 top-0 text-[7px] px-0.5">→</span>}
                        <input type="text" className="w-full h-full text-center outline-none bg-transparent" placeholder="__/__" />
                      </td>
                      <td className="border-r border-black p-0"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></td>
                      <td className="p-0"><input type="text" className="w-full h-full outline-none bg-transparent px-1" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
            
             {/* Reposição Table 2 */}
            <table className="w-1/2 border border-black text-[10px] h-auto">
              <thead>
                <tr className="bg-gray-200 border-b border-black">
                   <th className="border-r border-black w-12 py-0.5">Data</th>
                   <th className="border-r border-black w-10 py-0.5">Qtd</th>
                   <th className="py-0.5">Assin.</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 19 }).map((_, i) => (
                   <tr key={i} className="h-4 border-b border-black">
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

      <div className="mt-1 pt-0.5 border-t-2 border-black flex justify-end">
        <div className="flex items-end w-1/3">
            <span className="text-xs font-bold mr-2">RESPONSÁVEL:</span>
            <input type="text" className="border-b border-black flex-grow outline-none text-xs" />
        </div>
      </div>
      
      {/* Manual de Procedimentos - Condensed Footer */}
      <div className="mt-1 border border-gray-300 p-1 rounded bg-gray-50 text-[8px] leading-tight">
         <h4 className="font-bold text-center mb-0.5 text-[9px]">MANUAL DE PROCEDIMENTOS</h4>
         <div className="grid grid-cols-3 gap-2">
            <div>
               <strong className="block text-red-700">TROCA (7 dias)</strong>
               <ul className="list-disc pl-3">
                 <li>Desligue a fritadeira e espere esfriar.</li>
                 <li>Retire cuba, despeje óleo no galão de coleta.</li>
                 <li>Higienize cuba e resistência (pano úmido).</li>
                 <li>Remonte e reponha óleo novo.</li>
               </ul>
            </div>
            <div>
               <strong className="block text-red-700">FILTRAGEM (3 dias)</strong>
               <ul className="list-disc pl-3">
                 <li>Desligue e retire a cuba.</li>
                 <li>Filtre o óleo com peneira inox em outra cuba.</li>
                 <li>Lave a fritadeira suja.</li>
                 <li>Retorne o óleo filtrado e complete se necessário.</li>
               </ul>
            </div>
            <div>
               <strong className="block text-red-700">REPOSIÇÃO (Diária)</strong>
               <p>Faça a reposição sempre que o nível estiver baixo para evitar queima do alimento. Mantenha no nível indicado.</p>
               <p className="mt-0.5 italic font-semibold">Preencha este controle após cada procedimento!</p>
            </div>
         </div>
      </div>

    </div>
  );
};
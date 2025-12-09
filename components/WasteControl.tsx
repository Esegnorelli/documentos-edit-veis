import React from 'react';
import { Logo } from './Logo';

export const WasteControl: React.FC = () => {
  const rows = 20;

  return (
    <div className="bg-white p-8 w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 print:w-full">
       {/* Landscape mode forced for printing */}
       <style>{`
        @media print {
           @page { size: landscape; margin: 5mm; }
        }
      `}</style>
      
      <div className="flex justify-between items-center mb-4 border-b-2 border-red-600 pb-2">
         <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide text-center flex-grow">
          Controle de Desperdício
        </h1>
        <div className="transform scale-75 origin-right">
           <Logo />
        </div>
      </div>

      <table className="w-full border-collapse border border-black text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black p-2 w-24">DATA</th>
            <th className="border border-black p-2 w-48">ITEM</th>
            <th className="border border-black p-2 w-16">QTD</th>
            <th className="border border-black p-2 w-16">KG/UN</th>
            <th className="border border-black p-2 w-48">MOTIVO</th>
            <th className="border border-black p-2">DESCREVER O QUE HOUVE</th>
            <th className="border border-black p-2 w-32">NOME</th>
            <th className="border border-black p-2 w-24">TURNO</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="h-8">
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none text-center" placeholder="__/__/__" /></td>
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
              <td className="border border-black p-1"><input type="number" className="w-full h-full bg-transparent outline-none text-center" /></td>
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none text-center" /></td>
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
              <td className="border border-black p-1"><input type="text" className="w-full h-full bg-transparent outline-none" /></td>
              <td className="border border-black p-1 text-center font-mono text-xs align-middle">
                 <div className="flex justify-center items-center gap-2">
                   <label className="cursor-pointer flex items-center"><input type="checkbox" className="mr-0.5" /> D</label>
                   <label className="cursor-pointer flex items-center"><input type="checkbox" className="mr-0.5" /> N</label>
                 </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-center text-sm font-semibold uppercase text-gray-700">
        Atenção: Esse controle deve ser atualizado sempre que tiver um desperdício ou produto impróprio para uso.
      </div>

       <div className="print:break-before-page mt-12 pt-8 border-t-2 border-dashed border-gray-300">
         <h2 className="text-xl font-bold text-center mb-4">Guia de Preenchimento (Versão Impressa)</h2>
         <div className="text-sm space-y-4 max-w-2xl mx-auto">
            <p><strong>1. Complete os campos em branco:</strong></p>
            <ul className="list-disc pl-8 space-y-1">
               <li><strong>DATA:</strong> informe a data do registro.</li>
               <li><strong>ITEM:</strong> descreva o produto.</li>
               <li><strong>QTD:</strong> informe a quantidade desperdiçada.</li>
               <li><strong>KG/UN:</strong> indique o peso ou unidade.</li>
               <li><strong>MOTIVO:</strong> explique o motivo.</li>
               <li><strong>DESCREVER:</strong> detalhe o ocorrido.</li>
               <li><strong>NOME:</strong> assine seu nome.</li>
               <li><strong>TURNO:</strong> Marque D (Dia) ou N (Noite).</li>
            </ul>
            <div className="bg-yellow-50 p-4 border border-yellow-200 rounded mt-4">
              <strong>Atenção!</strong>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                 <li>Mantenha o controle atualizado.</li>
                 <li>Analise os dados para identificar padrões.</li>
                 <li>Compartilhe para reduzir o desperdício.</li>
              </ol>
            </div>
         </div>
       </div>
    </div>
  );
};
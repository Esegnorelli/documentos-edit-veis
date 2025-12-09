import React from 'react';
import { Logo } from './Logo';

export const WasteControl: React.FC = () => {
  const rows = 16;

  return (
    <div className="bg-white p-8 w-[297mm] mx-auto min-h-[210mm] print:min-h-0 shadow-lg print:shadow-none print:p-0 print:w-full">
       <style>{`
        @media print {
           @page { size: A4 landscape; margin: 5mm; }
        }
      `}</style>
      
      <div className="flex justify-between items-center mb-3 border-b-2 border-red-600 pb-2">
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
            <th className="border border-black p-1.5 w-24">DATA</th>
            <th className="border border-black p-1.5 w-48">ITEM</th>
            <th className="border border-black p-1.5 w-16">QTD</th>
            <th className="border border-black p-1.5 w-16">KG/UN</th>
            <th className="border border-black p-1.5 w-48">MOTIVO</th>
            <th className="border border-black p-1.5">DESCREVER O QUE HOUVE</th>
            <th className="border border-black p-1.5 w-32">NOME</th>
            <th className="border border-black p-1.5 w-24">TURNO</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="h-7">
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

      <div className="mt-3 text-center text-sm font-semibold uppercase text-gray-700">
        Atenção: Esse controle deve ser atualizado sempre que tiver um desperdício ou produto impróprio para uso.
      </div>
    </div>
  );
};
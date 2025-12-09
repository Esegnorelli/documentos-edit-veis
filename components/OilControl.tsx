import React from 'react';
import { Logo } from './Logo';

export const OilControl: React.FC = () => {
  const renderRow = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <tr key={i} className="h-8 border-b border-gray-400">
        <td className="border-r border-gray-400 p-1"><input type="text" className="w-full h-full text-center bg-transparent outline-none" placeholder="__/__" /></td>
        {/* Some tables have different columns, handled in parent */}
      </tr>
    ));
  };

  return (
    <div className="bg-white p-8 max-w-[210mm] mx-auto min-h-[297mm] shadow-lg print:shadow-none print:p-0 print:w-full print:max-w-none">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b-2 border-red-600 pb-4">
         <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide text-center flex-grow">
          Controle de Troca e Reposição de Óleo
        </h1>
        <div className="transform scale-75 origin-right">
           <Logo />
        </div>
      </div>

      {/* Warning Box */}
      <div className="border border-red-500 bg-red-50 p-2 mb-6 text-center text-sm">
        <strong className="text-red-600 block text-lg mb-1">ATENÇÃO!</strong>
        <p>A troca de óleo, máximo 07 dias</p>
        <p>A filtragem a cada 03 dias</p>
        <p>Respeitar o limite do nível do óleo</p>
        <p className="flex justify-center items-center gap-1">
          Respeitar a temperatura de fritadeira (150C° a 170C°) - Verificar temperatura ideal desta fritadeira 
          <input type="text" className="w-12 text-center bg-transparent border-b border-red-400 outline-none" placeholder="____" />
          C°
        </p>
        <p>Na sinalização com o ícone " → " preencher com a data do relatório anterior</p>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        
        {/* Left Column: Troca and Filtragem */}
        <div className="flex flex-col gap-8">
            {/* Troca de Óleo */}
            <div>
              <h3 className="font-bold text-center mb-2">Troca de óleo</h3>
              <table className="w-full border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-black">
                    <th className="border-r border-black w-24 py-1">Data</th>
                    <th className="border-r border-black py-1">Quant. óleo</th>
                    <th className="py-1">Assinatura</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <tr key={i} className="h-7 border-b border-black">
                       <td className="border-r border-black p-1 relative">
                          {i === 0 && <span className="absolute -left-4 top-1">→</span>}
                          <input type="text" className="w-full text-center outline-none bg-transparent" placeholder="__/__/__" />
                       </td>
                       <td className="border-r border-black p-1 flex items-center">
                         <input type="text" className="w-full text-right outline-none bg-transparent pr-1" /> Lts
                       </td>
                       <td className="p-1"><input type="text" className="w-full outline-none bg-transparent" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Filtragem */}
            <div>
                <h3 className="font-bold text-center mb-2">Filtragem do óleo</h3>
                <div className="flex gap-2">
                     <table className="w-full border border-black text-sm">
                        <thead>
                          <tr className="bg-gray-100 border-b border-black">
                            <th className="border-r border-black w-24 py-1">Data</th>
                            <th className="py-1">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <tr key={i} className="h-7 border-b border-black">
                              <td className="border-r border-black p-1 relative">
                                 {i === 0 && <span className="absolute -left-4 top-1">→</span>}
                                 <input type="text" className="w-full text-center outline-none bg-transparent" placeholder="__/__/__" />
                              </td>
                              <td className="p-1"><input type="text" className="w-full outline-none bg-transparent" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                     <table className="w-full border border-black text-sm">
                        <thead>
                          <tr className="bg-gray-100 border-b border-black">
                            <th className="border-r border-black w-24 py-1">Data</th>
                            <th className="py-1">Assinatura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <tr key={i} className="h-7 border-b border-black">
                              <td className="border-r border-black p-1"><input type="text" className="w-full text-center outline-none bg-transparent" placeholder="__/__/__" /></td>
                              <td className="p-1"><input type="text" className="w-full outline-none bg-transparent" /></td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                </div>
            </div>
        </div>

        {/* Right Column: Reposição */}
        <div className="h-full flex flex-col">
          <h3 className="font-bold text-center mb-2">Reposição</h3>
          <div className="flex h-full">
             {/* Two columns for reposição */}
            <table className="w-full border border-black text-sm mr-1 h-full">
              <thead>
                <tr className="bg-gray-100 border-b border-black h-8">
                   <th className="border-r border-black w-16 py-1">Data</th>
                   <th className="border-r border-black w-16 py-1">Qtde</th>
                   <th className="py-1">Assin.</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {Array.from({ length: 19 }).map((_, i) => (
                   <tr key={i} className="h-7 border-b border-black">
                      <td className="border-r border-black p-1 relative">
                        {i === 0 && <span className="absolute -left-4 top-1">→</span>}
                        <input type="text" className="w-full text-center outline-none bg-transparent text-xs" placeholder="__/__" />
                      </td>
                      <td className="border-r border-black p-1 text-xs"><input type="text" className="w-8 text-right outline-none bg-transparent" />Lts</td>
                      <td className="p-1"><input type="text" className="w-full outline-none bg-transparent" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full border border-black text-sm ml-1 h-full">
              <thead>
                <tr className="bg-gray-100 border-b border-black h-8">
                   <th className="border-r border-black w-16 py-1">Data</th>
                   <th className="border-r border-black w-16 py-1">Qtde</th>
                   <th className="py-1">Assin.</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {Array.from({ length: 19 }).map((_, i) => (
                   <tr key={i} className="h-7 border-b border-black">
                      <td className="border-r border-black p-1"><input type="text" className="w-full text-center outline-none bg-transparent text-xs" placeholder="__/__" /></td>
                      <td className="border-r border-black p-1 text-xs"><input type="text" className="w-8 text-right outline-none bg-transparent" />Lts</td>
                      <td className="p-1"><input type="text" className="w-full outline-none bg-transparent" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t-2 border-black">
        <div className="flex items-end">
            <span className="text-xl font-bold mr-4">FRITADEIRA</span>
            <input type="text" className="border-b border-black flex-grow outline-none text-xl" />
        </div>
      </div>
      
      {/* Page Break for procedures */}
      <div className="print:break-before-page mt-12 pt-8 border-t-4 border-double border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-6">Manual de Procedimentos:</h2>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
           {/* Col 1 */}
           <div className="border border-black p-4 rounded">
              <h3 className="font-bold text-center border-b border-gray-300 pb-2 mb-2">Troca de Óleo</h3>
              <p className="text-center italic mb-4 text-gray-600">Informativo</p>
              <ul className="list-disc pl-4 space-y-1 mb-4">
                <li>Verificar a viscosidade do óleo</li>
                <li>Checar periodicamente</li>
                <li>Fazer a troca em até 7 dias</li>
              </ul>
              <div className="border-t border-gray-300 pt-2">
                 <h4 className="font-semibold text-center mb-2">Procedimento</h4>
                 <ul className="text-xs space-y-2">
                   <li>Executar a troca de óleo</li>
                   <li>Desligue a fritadeira da tomada</li>
                   <li>Certifique-se de que o óleo está frio</li>
                   <li>Retire a cuba da fritadeira</li>
                   <li>Despeje o óleo usado no galão destinado à coleta</li>
                   <li>Lave e higienize a cuba e fritadeira</li>
                   <li>Limpe a resistência com pano úmido cuidadosamente</li>
                   <li>Remonte a fritadeira e reponha o óleo até o nível pré-estabelecido</li>
                 </ul>
              </div>
           </div>

           {/* Col 2 */}
           <div className="border border-black p-4 rounded">
              <h3 className="font-bold text-center border-b border-gray-300 pb-2 mb-2">Filtragem de óleo</h3>
              <p className="text-center italic mb-4 text-gray-600">Informativo</p>
              <p className="mb-4">Realize a filtragem de óleo a cada 3 dias para evitar o acúmulo de sujeira no fundo da fritadeira.</p>
              <div className="border-t border-gray-300 pt-2">
                 <h4 className="font-semibold text-center mb-2">Procedimento</h4>
                 <ul className="text-xs space-y-2">
                   <li>Executar a filtragem de óleo</li>
                   <li>Desligue a fritadeira da tomada</li>
                   <li>Retire a cuba e leve à pia</li>
                   <li>Utilize outra cuba limpa e uma peneira inox para filtrar o óleo</li>
                   <li>Lave a cuba e fritadeira suja e passe o óleo filtrado de volta a ela</li>
                   <li>Complete a reposição de óleo, se necessário</li>
                 </ul>
              </div>
           </div>

           {/* Col 3 */}
           <div className="border border-black p-4 rounded">
              <h3 className="font-bold text-center border-b border-gray-300 pb-2 mb-2">Reposição de óleo</h3>
              <p className="text-center italic mb-4 text-gray-600">Informativo</p>
              <p className="mb-4">Importante para manter o nível adequado. Evita queima do alimento e perda da qualidade do óleo.</p>
              <div className="border-t border-gray-300 pt-2">
                 <h4 className="font-semibold text-center mb-2">Procedimento</h4>
                 <p className="text-xs">Faça a reposição no início do turno ou durante, quando o nível estiver abaixo da marcação.</p>
              </div>
           </div>
        </div>
        
        <div className="mt-8 text-center bg-gray-50 p-4 rounded border border-gray-200">
           <strong className="block text-lg mb-2">Atenção!</strong>
           <p>É importante preencher o controle sempre que os procedimentos de <strong>troca de óleo, filtragem e reposição</strong> forem realizados.</p>
        </div>
      </div>

    </div>
  );
};
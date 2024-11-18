function App() {
   return (
      <div className='max-w-6xl mx-auto flex flex-col gap-6 p-6'>
         <h1 className='text-4xl'>Paginação com React</h1>
         <div className='border border-gray-300 rounded-lg'>
            <table className='w-full'>
               <thead>
                  <tr className='border-b border-gray-300'>
                     <th className='p-3 text-left'>Código</th>
                     <th className='p-3 text-left'>Nome</th>
                     <th className='p-3 text-left'>E-mail</th>
                  </tr>
               </thead>
               <tbody>
                  {Array.from({ length: 8 }).map((_, i) => {
                     return (
                        <tr key={i} className='border-b border-gray-300'>
                           <td className='py-2 px-3 text-zinc-400'>48123</td>
                           <td className='py-2 px-3 text-zinc-400'>Fulano de Tal</td>
                           <td className='py-2 px-3 text-zinc-400'>
                              fulanodetal@emailfake.com.br
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <td colSpan={1} className='py-2 px-3 text-zinc-400 text-sm'>
                        10 de 228
                     </td>
                     <td
                        colSpan={2}
                        className='py-2 px-3 text-zinc-400 text-sm text-right'
                     >
                        Página 1 de 23
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
}

export default App;

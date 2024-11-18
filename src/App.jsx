import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { users } from './data/users';

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
                  {users.map((user) => {
                     return (
                        <tr key={user.id} className='border-b border-gray-300'>
                           <td className='py-2 px-3 text-zinc-400'>{user.id}</td>
                           <td className='py-2 px-3 text-zinc-400'>{user.name}</td>
                           <td className='py-2 px-3 text-zinc-400'>{user.email}</td>
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
                        colSpan={20}
                        className='py-2 px-3 text-zinc-400 text-sm text-right'
                     >
                        <div className='flex items-center justify-end gap-4'>
                           <span>Página 1 de 23</span>
                           <div className='flex gap-0.5'>
                              <button
                                 type='button'
                                 className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1 hover:bg-zinc-300'
                              >
                                 <ChevronsLeft size={18} />
                              </button>
                              <button
                                 type='button'
                                 className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1 hover:bg-zinc-300'
                              >
                                 <ChevronLeft size={18} />
                              </button>
                              <button
                                 type='button'
                                 className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1 hover:bg-zinc-300'
                              >
                                 <ChevronsRight size={18} />
                              </button>
                              <button
                                 type='button'
                                 className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1 hover:bg-zinc-300'
                              >
                                 <ChevronRight size={18} />
                              </button>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
}

export default App;

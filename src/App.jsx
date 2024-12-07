import { useState } from 'react';
import {
   ChevronLeft,
   ChevronRight,
   ChevronsLeft,
   ChevronsRight,
   ExternalLink,
} from 'lucide-react';

import { users } from './data/users';

import { Button } from './components/Button';
import { Table } from './components/table/Table';
import { TableHeader } from './components/table/TableHeader';
import { TableCell } from './components/table/TableCell';
import { TableRow } from './components/table/TableRow';

function App() {
   const [page, setPage] = useState(1);

   const currentItems = users.slice((page - 1) * 10, page * 10);

   const totalPages = Math.ceil(users.length / 10);

   function goToFirstPage() {
      setPage(1);
   }

   function goToNextPage() {
      setPage(page + 1);
   }

   function goToPreviousPage() {
      setPage(page - 1);
   }

   function goToLastPage() {
      setPage(totalPages);
   }

   return (
      <div className='flex flex-col max-w-6xl mx-auto min-h-screen'>
         <main className='flex-1 p-6'>
            <div className='flex flex-col gap-6'>
               <h1 className='bg-zinc-400 text-zinc-950 text-4xl max-sm:text-3xl font-medium p-2 my-2 text-center rounded-lg'>
                  Paginação com React
               </h1>
               <Table>
                  <thead>
                     <TableRow>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Sobrenome</TableHeader>
                        <TableHeader className='max-sm:hidden'>E-mail</TableHeader>
                     </TableRow>
                  </thead>
                  <tbody>
                     {currentItems.map((user) => {
                        return (
                           <TableRow key={user.id}>
                              <TableCell>{user.id}</TableCell>
                              <TableCell>{user.firstName}</TableCell>
                              <TableCell>{user.lastName}</TableCell>
                              <TableCell className='max-sm:hidden'>
                                 {user.email}
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </tbody>
                  <tfoot>
                     <tr>
                        <TableCell colSpan={4} className='text-sm'>
                           <div className='flex justify-between gap-4 py-3'>
                              <span>
                                 {currentItems.length} de {users.length}
                              </span>
                              <span>
                                 Página {page} de {totalPages}
                              </span>
                           </div>
                        </TableCell>
                     </tr>
                  </tfoot>
               </Table>
               <div className='flex justify-center gap-0.5'>
                  <Button
                     onClick={goToFirstPage}
                     disabled={page === 1}
                     title='Primeira página'
                  >
                     <ChevronsLeft size={18} />
                  </Button>
                  <Button
                     onClick={goToPreviousPage}
                     disabled={page === 1}
                     title='Página anterior'
                  >
                     <ChevronLeft size={18} />
                  </Button>
                  <Button
                     onClick={goToNextPage}
                     disabled={page === totalPages}
                     title='Próxima página'
                  >
                     <ChevronRight size={18} />
                  </Button>
                  <Button
                     onClick={goToLastPage}
                     disabled={page === totalPages}
                     title='Última página'
                  >
                     <ChevronsRight size={18} />
                  </Button>
               </div>
            </div>
         </main>
         <footer>
            <p className='flex gap-1 justify-center text-sm p-4 border-t border-zinc-400'>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
                  className='flex gap-1'
               >
                  Philipe Oliveira
                  <ExternalLink strokeWidth={1.5} size={16} />
               </a>
            </p>
         </footer>
      </div>
   );
}

export default App;

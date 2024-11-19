import { twMerge } from 'tailwind-merge';

export function TableCell({ children, className, colSpan }) {
   return (
      <td className={twMerge('py-2 px-3 text-zinc-400', className)} colSpan={colSpan}>
         {children}
      </td>
   );
}

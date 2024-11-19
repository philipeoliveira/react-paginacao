import { twMerge } from 'tailwind-merge';

export function TableHeader({ children, className }) {
   return <th className={twMerge('p-3 text-left', className)}>{children}</th>;
}

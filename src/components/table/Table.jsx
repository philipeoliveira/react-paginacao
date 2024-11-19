export function Table({ children }) {
   return (
      <div className='border border-zinc-300 rounded-lg'>
         <table className='w-full'>{children}</table>
      </div>
   );
}

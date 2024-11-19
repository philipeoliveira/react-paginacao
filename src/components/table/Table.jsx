export function Table({ children }) {
   return (
      <div className='border border-gray-300 rounded-lg'>
         <table className='w-full'>{children}</table>
      </div>
   );
}

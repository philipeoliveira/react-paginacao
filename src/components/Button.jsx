export function Button({ children, onClick, disabled }) {
   return (
      <button
         type='button'
         className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1 hover:bg-zinc-300 disabled:bg-zinc-700'
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
}

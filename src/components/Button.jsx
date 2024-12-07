export function Button({ children, onClick, title, disabled }) {
   return (
      <button
         type='button'
         className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1.5 hover:bg-zinc-300 disabled:bg-zinc-700'
         onClick={onClick}
         title={title}
         disabled={disabled}
      >
         {children}
      </button>
   );
}

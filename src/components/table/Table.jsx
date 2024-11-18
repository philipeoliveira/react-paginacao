export function Table(props) {
   return (
      <div className='border border-gray-300 rounded-lg'>
         <table className='w-full'>{props.children}</table>
      </div>
   );
}

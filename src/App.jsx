function App() {
   return (
      <>
         <h1>Paginação com React</h1>
         <table>
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>E-mail</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>48123</td>
                  <td>Fulano de Tal</td>
                  <td>fulanodetal@emailfake.com.br</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={1}>10 de 228</td>
                  <td colSpan={2}>Página 1 de 23</td>
               </tr>
            </tfoot>
         </table>
      </>
   );
}

export default App;

import NavBar from './navBar';
import NxWelcome from './nx-welcome';
import App1 from './test';

export function App() {
  fetch('http://localhost:8080/api/addresses').then(console.log).catch(console.error);
  return (
    <>
      <NavBar/>
      {/* <App1/> */}
     </>
  );
}
export default App;

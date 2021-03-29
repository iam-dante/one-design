import Home from './screens/Home'
import Service from './screens/Service'
import Porfolio from './screens/Portfolio'
import Team from './screens/Team'

function App() {
  return (
    <>
    
      <Home/>
      <div id="service">
        <Service/>
      </div>
      <Porfolio/>
      <Team/>
    </>
  );
}

export default App;

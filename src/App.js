import Home from './screens/Home'
import Service from './screens/Service'
import Porfolio from './screens/Portfolio'
import Team from './screens/Team'
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <>
      <div id="home">
        <Home/>
      </div>
      <div id="service">
        <Service/>
      </div>
      <div id="portfolio">
        <Porfolio/>
      </div>
      <div id="team">
        <Team/>
      </div>
      <div id="contactus">
        <ContactUs/>
      </div>
    </>
  );
}

export default App;

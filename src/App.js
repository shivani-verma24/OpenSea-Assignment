import Cars from "./components/Cars"
import { carsData } from "./data/carsData";
import NavBar from "./components/NavBar";
import Tab from "./components/Tab";

// import Dropdown from "./components/Dropdown";


const App = (props) => {
  const companyName = "OpenSea";
  var count = carsData.length;

  return (
    <div className="container">
      
      <NavBar companyName = {companyName}/> 
      <Tab count ={count +" "+"items"}/>
      
      {/* <Dropdown /> */}
    
      <div class="row">
        {carsData.map((item, index) => {
          return <Cars
            imageUrl={item.imageUrl}
            carName={item.carName}
            price={item.price}
            index={index + 1} />
        })}
      </div>
     
    </div>

  )
};

export default App;
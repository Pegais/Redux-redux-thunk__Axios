import Body from "./Component/Body"
import Card from "./Component/Card"
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import './style.css'
import { Provider } from 'react-redux'
import store from "./store"


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Body />
      <Card/>
      <Footer/>
      
      </div>
      </Provider>
  );
}

export default App;

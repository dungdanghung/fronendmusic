import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Mainlayout from "./layout/mainlayout/index"
import Homepage from './page/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Mainlayout> <Homepage/> </Mainlayout>}></Route>
        <Route path="/login" ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

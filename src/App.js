
import {MonsterList,MonsterPage,Welcome,NavBar,About} from './components'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <NavBar />
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Welcome />}/>
        <Route path='monster' element={<MonsterList/>}>
          <Route path=':monsterID' element={<MonsterPage/>}/>
        </Route> 
        <Route path='about' element={<About/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

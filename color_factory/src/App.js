import './App.css';
import React,{useState}from "react"
import {BrowserRouter,Route,NavLink,Redirect,Switch} from "react-router-dom"
import AddColorForm from "./AddColor"
import ColorList  from './ColorList'
import ColorDetail from "./ColorDetail"


function App() {

  const [colors,addColor] = useState([])

  const AddFormColor = (color)=>{
      addColor(colors => (
        [
          color,
          ...colors
        ]
      ))
  }

  return (
    <div className="App">
        <h1>Welcome to the color factory</h1>
        <BrowserRouter> 
          <Switch>
              <Route exact path="/colors">
                <NavLink to="/color/new">Add New Color</NavLink>
                <ColorList colors={colors}/>
              </Route>

              <Route exact path="/colors/:name">
                <ColorDetail colors={colors}/>
              </Route>

              <Route exact path="/color/new">
                <AddColorForm AddFormColor={AddFormColor}/>
              </Route>

              <Redirect to="/colors"/>
            </Switch>
        </BrowserRouter>  
    </div>
  );
}

export default App;

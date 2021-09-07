import './App.css';
import {AboutMe} from "./Components/About-me/About_me";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/MyWork/MyWorks";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {MyTitle} from "./Components/MyTitle/MyTitle";
import {Route} from "react-router-dom";

function App() {
    return <div className="App">
        <MyTitle/>
        <Route path={'/main'} component={AboutMe}/>
        <Route path={'/work'} component={MyWorks}/>
        <Route path={'/skills'} component={Skills}/>
        <Route path={'/contact'} component={Contacts}/>
        <Route path={'/contact'} component={Footer}/>
      {/*  <Route path={'*'} render={() => <div>404 not found</div>}/>*/}

        {/* <Options/>*/}

    </div>
}

export default App;

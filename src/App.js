import './App.css';
import {Header} from "./Components/Header/Header";
import {AboutMe} from "./Components/About-me/About_me";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/MyWork/MyWorks";
import {Options} from "./Components/OptionsWork/Options";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {MyTitle} from "./Components/MyTitle/MyTitle";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                    <Header/>

                    <MyTitle/>

                    <AboutMe/>

                    <MyWorks/>

                     <Skills/>

                   {/* <Options/>*/}

                    <Contacts/>

                    <Footer/>


            </div>
        </BrowserRouter>
    );
}

export default App;

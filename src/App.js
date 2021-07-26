import './App.css';
import {Header} from "./Components/Header/Header";
import {AboutMe} from "./Components/About-me/About_me";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/My_work/My_works";
import {Options} from "./Components/OptionsWork/Options";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <MyWorks/>
            <Options/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

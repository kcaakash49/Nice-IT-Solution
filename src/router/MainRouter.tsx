import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

// import About from "../pages/About";
import MainLayout from "../layout/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import About from "../pages/About";
import ContactPage from "../components/Contact";

// const MainLayout = React.lazy(() => import('../layout/MainLayout'));


export const MainRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element = {<MainLayout/>}>
            <Route index element = {<HomePage/>}/>
            <Route path = "services" element = {<Services/>}/>
            <Route path = "about" element = {<About/>}/>
            <Route path = "contact" element = {<ContactPage/>}/>
            <Route path="*" element = {<PageNotFound/>}/>
        </Route>
        
            {/* <Route path="*" element = {<PageNotFound/>}/> */}
    </Route> 
))
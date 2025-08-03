import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function MainLayout() {
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-900 ">
        <NavBar/>
        <main className="flex-grow flex flex-col min-h-0 w-full">
          <Outlet/>
        </main>
        <Footer />
      </div>
    );
  }
import Sidebar from "@/components/Sidebar";
import MainNavBar from "@/components/MainNavBar";
import Footer from "@/components/Footer";
import List from "@/components/List";


const MainPage = () => (
    <>
        <header>
            <MainNavBar />
        </header>

        <div className="flex-grow-1 d-flex justify-content-lg-between ">
            <Sidebar />
            <List />
        </div>

        {/*<Footer />*/}
    </>
);

export default MainPage;
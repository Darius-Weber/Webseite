import Banner from "./Banner"
import Websitedescription from "./Website_description";
import About from "./About";
import Imgdivider from "./Img_divider";
import Keywords from "./Keywords";
import Description from "./Description";
import Footer from "./Footer";

function App(){

return(
    <div>
    <Banner />
    <div className="container app_div">
        
        <Websitedescription />
        <hr className="division1" />
        <About />
        <Imgdivider />
        <Keywords />
        <Description />
    </div>
    <div>
        <footer>
            <Footer />
        </footer>
    </div>
    </div>
  
);

}

export default App;
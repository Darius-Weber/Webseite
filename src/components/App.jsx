import Banner from "./Banner"
import Websitedescription from "./Website_description";
import About from "./About";
import Imgdivider from "./Img_divider";
import Keywords from "./Keywords";
import Description from "./Description";

function App(){

return(
    <div className="container">
        <Banner />
        <Websitedescription />
        <hr className="division1" />
        <About />
        <Imgdivider />
        <Keywords />
        <Description />
        <footer>
            
        </footer>
    </div>
);

}

export default App;
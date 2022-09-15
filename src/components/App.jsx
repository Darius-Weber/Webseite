import Banner from "./Banner"
import Websitedescription from "./Website_description";
import About from "./About";
import Imgdivider from "./Img_divider";
function App(){

return(
    <div class="container">
        <Banner />
        <Websitedescription />
        <hr class="division1" />
        <About />
        <Imgdivider />
    </div>
);

}

export default App;
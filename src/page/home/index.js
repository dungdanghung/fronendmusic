import "./home.scss";
import Compunent01 from "./compunent01/compunent01";
import Compunent02 from "./compunent02/compunent02";
import Compunent03 from "./compunent03/compunent03";

function Homepage() {


    return (
        <>
            <div className="Homepage">
                <Compunent01 />
                <Compunent02 />
                <Compunent03 />
            </div>
        </>
    )
}


export default Homepage;
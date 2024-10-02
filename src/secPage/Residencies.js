import Carddeck from "../component/Carddeck"
import "./Residencies.css"
import {  useScroll, useTransform} from 'framer-motion'

function Residencies(){
    

    return(
        <div class="secMain" id="Residencies">
            <div class="main">
            <h2  >Popular Residencies</h2>
                <p class="secMainp">Best Choices</p>
                <p class="secMainp">make your Best Choice</p>
                 <div class="row   ">
                 <button class="btn btn-light btn-outline-success col-lg-3 col-md-3 secMainbutton" type="submit">Apply Filter</button>

                    <div class="col-lg-3 col-md-3  secMainselect">
                   
                    <select class="form-select "  >
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                    </div>
                   
                    
                 </div>
                 <Carddeck/>
            </div>
        </div>
    );
}

export default Residencies;
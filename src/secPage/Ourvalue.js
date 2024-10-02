import Accordion from "../component/Accordion";
import "./Ourvalue.css"
import {motion, useTransform,useScroll} from 'framer-motion'

function OurValue(){
   

    return(
       <div class="main ourvalue" id="Ourvalue">
         <div class="row g-4">
         <div class="col-lg-6 "  >
        <img src="https://real-estate-web.pages.dev/value.png" alt="home" class="home_img"/>
      </div>
      <div class="col-lg-6 "  >
      <h2  >Our Value</h2>
      <h1>Value We Give to You</h1>
      <p>We always ready to help by providijng the best services for you.
</p>
<p>
We beleive a good blace to live can make your life better
</p>
      <Accordion/>
      </div>
      
         </div>
          
       </div>
    );
}

export default OurValue;
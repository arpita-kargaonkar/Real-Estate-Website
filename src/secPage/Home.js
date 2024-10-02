import "./Home.css"
import {motion, useTransform,useScroll} from 'framer-motion'
import CountUp from 'react-countup';

function Home(){
    const {scrollYProgress}=useScroll();
    const y = useTransform(scrollYProgress,[0,1],[0,490])
     
    return(
        <div>
        <div class="main ">
            <div class="row">
      <div class="col-lg-6 d-flex align-content-center flex-wrap "  >
        <motion.h1 class="big-heading "
            initial={{y:"3rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:4,
            type:"spring"}} style={{y:y}}
        >Discover Most Suitable Property</motion.h1>
        <p class="small-heading "  ><br/><br/>Find a variety of properties that suit you very easilty </p>
        <p class="small-heading ">Forget all difficulties in finding a residence for you</p>
    <form class="d-flex form-search mx-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    

    <div class="row mx-auto justify-content-center align-items-center g-2">
        <div class="col-lg-4 col-6">
            <p class="prices" data-end="+"><CountUp end={9000 } duration={2}></CountUp></p>
            <p class="price_detail">Premium Products</p>
        </div>
        <div class="col-lg-4 col-6">
            <p class="prices" data-end="+"><CountUp end={2000 } duration={2}></CountUp></p>
            <p class="price_detail">Happy Customers</p>
        </div>
        <div class="col-lg-4 col-6">
            <p class="prices" data-end="+"><CountUp end={50 } duration={2}></CountUp></p>
            <p class="price_detail">Awards Winning</p>
        </div>
    </div>
         
      </div>
      <motion.div class="col-lg-6 " 
        initial={{x:"7rem",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
            duration:3,
            type:"tween"
        }}
      >
        <img src="https://real-estate-web.pages.dev/hero-image.png" alt="home" class="home_img"/>
      </motion.div>
      
  </div>
  </div>
        {/* Footer of Home page */}
        <div class="sponser ">
            <div class="row sponser2 mx-auto">
                <div class="col-lg-3 col-5  ">
                     <img src="https://www.dlf.in/images/logo.svg" class="img-fluid"/>
                </div>
                <div class="col-lg-3  col-5  ">
                     <img src="https://www.godrejproperties.com/images/logo_godrej_properties.png" class="img-fluid"/>
                </div>
                <div class="col-lg-3 col-5  ">
                     <img src="https://www.oberoirealty.com/images/oberoi_logo.png" class="img-fluid"/>
                </div>
                <div class="col-lg-3  col-5  ">
                     <img src="https://www.lntrealty.com/wp-content/themes/lntrealty/assets/images/brand-logo-desktop.webp" class="img-fluid"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
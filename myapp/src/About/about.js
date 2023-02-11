import  "./about.css"
import React from "react"

export const About= () =>{
    return(
    
    <section class="home">
				<div class="home-container">
					<div class="row-home">
						<div class="col-home1">
							<h1>We offer modern solutions for growing your business</h1>
                            <h3>We are team of talented designers making websites with Bootstrap</h3>
							<div class="icon">
								<div class="ico">
									<button>Get Started</button>
								</div>
								{/* <div class="icoico">
								<a href=""><span><i class="bi bi-play-circle"></i>Watch viedo </span></a>
								</div> */}
							</div>
						</div>
						<div class="col-home2">
							<div class="home-image">
                            <img src={require("../Images/hero-img.png")}/>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}

//export const About= () =>{
   // return(
    //     <div className="about-container">
    //         <div className="about-row">
    //             <div className="about-column">
    //                 <h1>We offer modern solutions for growing your business</h1>
    //                 <h3>We are team of talented designers making websites with Bootstrap</h3>
    //                 <div className="about-but">
    //                 <button>Get Started</button>
    //                 </div>
    //             </div>
    //             <div className="about-column1">
    //                 <div className="img-img">
    //             <img src={require("../Images/hero-img.png")}/>
    //             </div>
    //             </div>
    //         </div>
            

    //  </div>
	
   // )
//}
import  "./Header.css"

export const Header=() => {
    return(
        <section className="header-container">
            <div class="header-name">
				<div>
					<a href="">
					<img src={require("../Images/logo.png")} class="head-logo"/></a>
				</div>
				<div>
					<h1>FlexStart<span>.</span></h1>
				</div>
					
			
				{/* <div class="bar-icon" style="font-size:24px">
							<i class="fa fa-bars"></i>
						</div> */}
				
				<div class="navbut">
					<nav class="navbut">
						<a href="">HOME</a>
						<a href="">ABOUT</a>
						<a href="">SERVICES</a>
						<a href="">PORTIFOLIO</a>
						<a href="">TEAM</a>
						<a href="">BLOCK</a>
						<a href="">CONTACT</a>
					</nav>
				<div class="navbut">
					<button>Get startrd</button>
				</div>
				</div>
            </div>
        </section>
    )
}


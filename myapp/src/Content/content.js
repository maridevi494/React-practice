import  "./content.css"
import React from "react"

export const Content=() => {
    return(
                    <section class="team-back">
						<div class="team-container">
							<div class="team-head">
								<h1>TEAM</h1>
								<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
							</div>
							<div class="team-row">
							<div class="team-image">
								<div class="team-col">
									
                                <img src={require("../Images/team-1.jpg")}/>
									
										<div class="team-icon">
											<a href=""><i class="bi bi-twitter"></i></a>
											<a href=""><i class="bi bi-facebook"></i></a>
											<a href=""><i class="bi bi-instagram"></i></a>
											<a href=""><i class="bi bi-linkedin"></i></a>
										</div>
								</div>
								<div class="team-cont">
									<h2>Walter White</h2>
									<p>Chief Executive Officer</p>
								</div>
							</div>
							<div class="team-image">
								<div class="team-col">
									
                                <img src={require("../Images/team-2.jpg")}/>
									
										<div class="team-icon">
											<a href=""><i class="bi bi-twitter"></i></a>
											<a href=""><i class="bi bi-facebook"></i></a>
											<a href=""><i class="bi bi-instagram"></i></a>
											<a href=""><i class="bi bi-linkedin"></i></a>
										</div>
								</div>
								<div class="team-cont">
									<h2>Sarah Jhonson</h2>
									<p>Product Manager</p>
								</div>
							</div>
							<div class="team-image">
								<div class="team-col">
									
                                <img src={require("../Images/team-3.jpg")}/>
									
										<div class="team-icon">
											<a href=""><i class="bi bi-twitter"></i></a>
											<a href=""><i class="bi bi-facebook"></i></a>
											<a href=""><i class="bi bi-instagram"></i></a>
											<a href=""><i class="bi bi-linkedin"></i></a>
										</div>
								</div>
								<div class="team-cont">
									<h2>William Anderson</h2>
									<p>CTO</p>
								</div>
							</div>
							<div class="team-image">
								<div class="team-col">
									
                                <img src={require("../Images/team-4.jpg")}/>
									
										<div class="team-icon">
											<a href=""><i class="bi bi-twitter"></i></a>
											<a href=""><i class="bi bi-facebook"></i></a>
											<a href=""><i class="bi bi-instagram"></i></a>
											<a href=""><i class="bi bi-linkedin"></i></a>
										</div>
								</div>
								<div class="team-cont">
									<h2>Amanda Jepson</h2>
									<p>Accountant</p>
								</div>
							</div>
							</div>
						</div>
					</section>
                    )
                    }
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <div>
           <section id="footer" className="section1">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
				
          <img  src={"/assets/img/logo.jpeg"} style={{height:"auto",maxWidth:"250px",width:"100%",marginBottom:"10px"}} alt="logo"/>
          <p className="text-white">Compuwave society aims to transform its members into perspicacious & innovative individuals besides improving their logical skills.</p>
				</div>
				
				<div class="col-xs-12 col-sm-8 col-md-8">
					<h5>Contact Us</h5>
					<ul class="list-unstyled quick-links text-white">
          <li class="list-inline-item">
            compuwave@sbsstc.ac.in
            </li>
            <br/>
            <li class="list-inline-item">
            SBSSTC, Moga Road,
            
            </li>
            <br/>
            <li class="list-inline-item">
            
Ferozepur, Punjab 152004
            </li>
					</ul>
				</div>
			</div>
			<div class="row">
				
        
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					
					<p class="h6">© All right Reversed. <Link class="text-green ml-2" >Compuwave</Link></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>

        </div>
    )
}

export default Footer

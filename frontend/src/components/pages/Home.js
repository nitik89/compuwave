import React, { useEffect} from 'react'
import Base from '../basic/Base'

import {Link} from 'react-router-dom';

import Footer from '../basic/Footer';
function Home() {

    useEffect(()=>{
      window.scrollTo(0, 0)
  },[])
    return (
        <div>
         <Base>
            <section id="hero">  
      <video src={"/assets/img/abs.mp4"} type="video/mp4" id="video" autoPlay muted loop></video>
    <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
        
      <h1 class="mb-4 pb-0">COMPUWAVE <br/> </h1>
      <p class="mb-4 pb-0">From Shaheed Bhagat <span>Singh State</span> Technical University</p>
      <a href="https://youtu.be/F-U5Hdh38_8" class="glightbox play-btn mb-4" target="_blank"  rel="noreferrer">.</a>
      <Link to="/about-us"  class="about-btn scrollto">About Us</Link>
    </div>
  </section>

  <main id="main">


    <section id="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6">
            <h2>About Us</h2>
            <p>Compuwave society is a society of computer science department at 
              Shaheed Bhagat Singh State Technical Campus Ferozepur,Punjab.

            </p>
          </div>
          <div class="col-lg-6">
            <h3>Where</h3>
            <p>Moga Road, NH-95, Firozpur, Punjab 152001</p>
          </div>
      
        </div>
      </div>
    </section>
    <section id="events">
      <div class="container p-4" data-aos="fade-up">
        <div class="section-header">
          <h2>Why you should attend Compuwave?</h2>
        
        </div>


        <div class="row">
          <div className="col-lg-6 col-sm-12 p-4">
            <img src="assets/img/Frontpage.png" className="responsive" alt="Atoma" style={{height:"auto",maxWidth:"100%"}}/>
          </div>
          <div className="col-lg-6 col-sm-12 p-4" >
          <p style={{color:"black",fontSize:"20px"}}>There is one thing that is constant and that is change
<br/><br/>

Attending these events can ignite energy in you when you see lot of people with like mindset and energy sitting
close to you striving to learn and be better.
<br/><br/>
<i class="fa fa-check" aria-hidden="true"></i> Network with Different Peers
<br/>
<i class="fa fa-check" aria-hidden="true"></i> Show Your Skills<br/>
<i class="fa fa-check" aria-hidden="true"></i> You Have Got Nothing to Lose
<br/>
<i class="fa fa-check" aria-hidden="true"></i> You Are Investing in Yourself
<br/>
<i class="fa fa-check" aria-hidden="true"></i> You Become a Thought Leader
</p>

            </div>
          <div class="col-lg-4 col-md-6 p-4">
            <div class="speaker" data-aos="fade-up" data-aos-delay="100">
            <i class="fa fa-user" aria-hidden="true" style={{fontSize:"40px"}}></i>
              <div class="details">
                <h3>Network with Different Peers</h3>
                <p>Connect with students across different colleges & increase your Network</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-4">
            <div class="speaker" data-aos="fade-up" data-aos-delay="200">
            <i class="fa fa-user-friends" aria-hidden="true" style={{fontSize:"40px"}}></i>
              <div class="details">
                <h3>You Have Got Nothing to Lose</h3>
                <p>No matter what stream you are, there is something I guaranty that you must pick up at these events.</p>
              </div>
              </div>
            
          </div>
          <div class="col-lg-4 col-md-6 p-4">
            <div class="speaker" data-aos="fade-up" data-aos-delay="300">
             
            <i class="fa fa-chart-pie" aria-hidden="true" style={{fontSize:"40px"}}></i>
              <div class="details">
                <h3>You Become a Thought Leader</h3>
                <p>Learning from Speaker by listening and jotting down means you are duplicating their brain which normally is not easy to access anywhere except these kind of events</p>
              </div>
            </div>
          </div>
          
         
        
        </div>
      </div>

    </section>
   


    <section id="gallery">

      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div class="gallery-slider swiper-container">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide"><a href="assets/img/gallery/1.jpg" class="gallery-lightbox"><img src="assets\img\ud933845-9686-4720-9596-b9affe8a0954.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/2.jpg" class="gallery-lightbox"><img src="assets\img\u8a0f71b-1bef-48c4-9c79-ad85b5479c6e.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/3.jpg" class="gallery-lightbox"><img src="assets\img\u9f9aa9f-279f-427b-835f-9079029737b9.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/4.jpg" class="gallery-lightbox"><img src="assets\img\ab68fb39-f644-4e15-9fba-f345b3f663db.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/5.jpg" class="gallery-lightbox"><img src="assets\img\aa42dc72-711d-45de-b07f-369fb507b9cb.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/6.jpg" class="gallery-lightbox"><img src="assets\img\ab68fb39-f644-4e15-9fba-f345b3f663db.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/7.jpg" class="gallery-lightbox"><img src="assets\img\b6d5855f-9f38-4c0c-ad68-f302b6249daf.jpg" class="img-fluid" alt=""/></a></div>
          <div class="swiper-slide"><a href="assets/img/gallery/8.jpg" class="gallery-lightbox"><img src="assets\img\d1438461-34fb-45c3-974e-d0129dbc126e.jpg" class="img-fluid" alt=""/></a></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </section>
    <section id="supporters" class="section-with-bg">

      <div class="container" data-aos="fade-up" >
        <div class="section-header">
          <h2>Our Investors & Collaborators</h2>
        </div>

        <div class="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-4 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets\img\WhatsApp-Image-2021-04-07-at-10.42.14-PM.jpeg" class="img-fluid" alt=""/>
            
            </div>
            <h1 className="text-center mt-2">Kaizen</h1>
            <p className="text-dark text-justify">Kaizen Home Solution is one stop solution company for Modular furniture and interior works like Kitchen, Wardrobe, T.V unit, wallpaper, Madhubani Wall Art, 2D & 3D designs etc in India.</p>
           
          </div>

          <div class="col-lg-4 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets\img\Copy-of-Blue-and-Green-Construction-Logo.png" class="img-fluid" alt=""/>
            </div>
            <h1 className="text-center mt-2">Kaizen</h1>
            <p className="text-dark text-justify">Kaizen Home Solution is one stop solution company for Modular furniture and interior works like Kitchen, Wardrobe, T.V unit, wallpaper, Madhubani Wall Art, 2D & 3D designs etc in India.</p>
           
          </div>

        

          <div class="col-lg-4 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets\img\Copy-of-Blue-and-Green-Construction-Logo-1.png" class="img-fluid" alt=""/>
            </div>
            <h1 className="text-center mt-2">Pagistnation</h1>
            <p className="text-dark text-justify">A one-stop platform with Tech-first approach to all written study material management and Solution-first approach to curbing latent illiteracy amongst students. Providing all the Textual Study Material to everyone in one go.</p>
           
          </div>

      

         

        </div>

      </div>

    </section>
  
  </main>


       </Base>
       <Footer/>    
</div>
    
    )
}

export default Home

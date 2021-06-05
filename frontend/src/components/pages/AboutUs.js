import React from 'react'
import Base from '../basic/Base'

function AboutUs() {
    return (
        <div>
            <Base>
            <div class="container-fluid" style={{backgroundImage:"linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)"}}>
  <div class="row">
    <div class="col-sm-12 h-100" >
      <div class="container">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                  <div>
                 <h1 className="text-white ans mt-4 p-2" style={{fontWeight:"bold"}}>COMPUWAVE!</h1>
                 <p className="text-white" >Where you go,a better future begins here</p>
                 </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                  <img  src={"/assets/img/logo.jpeg"} style={{height:"auto",maxWidth:"400px",width:"100%",padding:"10%"}} alt="Compuwave"/>
              </div>
          </div>
          </div>
      </div>
    </div>
   
  </div>

  <div class="container-fluid  d-flex flex-column justify-content-center text-center mt-2 w-100 ">
  <div class="row">
    <div class="col-sm-12 " >
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <h1 style={{fontWeight:"bold",fontSize:"50px"}} >About Us</h1> 
                </div>
                <div className="col-sm-12">
                <p style={{fontWeight:"bold",fontSize:"20px"}}>| Compuwave society is a society of the computer science department at Shaheed Bhagat Singh State Technical Campus, Ferozepur Punjab.</p>
                </div>
                <div className="col-sm-12">
                <p className="p-4 " style={{textAlign:"justify",fontSize:"20px"}}>
   Society enables collaboration knowledge sharing, carrier environment, and skill development across all engineering disciplines, toward a goal of helping the students to benefit lives and livelihood.No matter how high one aspires to reach, we aim to provide the skills and lay down the path towards success.  Being the society of the computer science department it is our responsibility to ensure that we maintain a high productivity environment. Through mentorship, teaching, conducting the highly competitive activity.
   </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <hr style={{width:"50%"}}/>
                    <h1 style={{fontWeight:"bold",fontSize:"50px"}}>Journey</h1>
                    <p  className="p-4 " style={{textAlign:"justify",fontSize:"20px"}}>
                    We began our venture in the year 1996 by collective efforts of a group of students and teachers with the strong urge to complement the theoretical knowledge imparted in classrooms.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <hr/>
            
                    <p  className="p-4 " style={{textAlign:"justify",fontSize:"20px"}}>
                    The competition we participate is highly prestigious in order to showcase our technical prowess, skill and hone our knowledge pertaining to real-life engineering. The society's mission is to bring the student together for events and aid in carrier .
                    </p>
                </div>
            </div>
        </div>
    
 
  

  
    </div>
    
  </div>
  </div>
  </Base>
</div>
     
    )
}

export default AboutUs

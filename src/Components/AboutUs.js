import React from 'react'
import photo1 from '../images/i1.png'
import photo2 from '../images/i2.png'
import photo3 from '../images/i3.png'
import cover3 from '../images/cover3.png'
import './AboutUs.css'

const AboutUs = () => {
  return (<div id='AboutUs'>
    <div class="prvi">
            <p>Streetwear brand designed and made in Sarajevo</p>
            <br />
                    <p>Bosnia&Herzegovina since 2019</p>
                    <br />  
    </div>
    <div className='our-service-section text-center '>
        <div className='section-bg-overlay'>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='section-header mt-5'>
                            <div className='header-subtitle'>
                                Welcome, 
                            </div>
                            <div className='header-title'> we are Drei Rucci</div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='container p-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='service-box'>
                            <div className='d-flec justify-content-center'>
                              <img src={photo1} class="slika-area"/>
                            </div>
                            <div className='service-info'> 
                            <h3>Drei Rucci</h3></div>
                            <div className='service-description'> 
                            <p>Drei Rucci is an idea about something different in our society. It is about culture, fashion, art and everything that you can imagine that is related with that.</p></div>
                            
                        </div>

                    </div>

                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='service-box active'>
                            <div className='d-flec justify-content-center'>
                            <img src={photo2} class="slika-area"/>
                            </div>
                            <div className='service-info'> 
                            <h3>Design</h3></div>
                            <div className='service-description'> 
                            <p>I always wanted to create and make something that would be appreciated and respected. So, here you can find mixture of a lit bit of every part of art integrated into our products.</p></div>
                            
                        </div>

                    </div>

                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='service-box'>
                            <div className='d-flec justify-content-center'>
                            <img src={photo3} class="slika-area"/>
                            </div>
                            <div className='service-info'> 
                            <h3>Fashion</h3></div>
                            <div className='service-description'> 
                            <p>Fashion is a popular aesthetic expression in a certain time and context, especially in clothing and footwear, and that is expecialy what we are specialized for.</p></div>
                            
                        </div>

                    </div>

                </div>

            </div>


        </div>
    </div>


    </div>
  )
}

export default AboutUs;

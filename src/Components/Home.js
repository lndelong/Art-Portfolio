import React from 'react';

export default function Home() {

    return(
        <>
            <div className="container d-flex  text-center home" >
                <div className="row row-cols-1 g-3 row-cols-lg-2 g-lg-5">
                    <div className=" col-sm-8">
                        <img src='https://drive.google.com/uc?export=view&id=1d5Q1V3Ka2G8n2j67rhwrf385gHG_CamA' 
                        alt='vivid art' className='mainPhoto p-5'/>
                    </div>                    
                    <div className="col text-center px-5 pb-5 pt-lg-5" data-bs-theme="dark">
                        <div className='card rounded-5 text-center homeCard border-white p-3'>
                            <h1>
                                Welcome
                            </h1>
                            <p>
                            Hi, I'm Angelica, a 19-year-old artist who loves to create comics, art, 
                            and animations. I'm passionate about using my art to tell stories and bring characters
                            to life. Currently, I offer digital art commissions on Ko-fi, and I post digital and traditional 
                            art on DeviantArt and ArtStation. You can also catch me streaming traditional drawings and animating in 
                            Flipnote on Twitch.<br/><br/>
                            In my free time, I enjoy playing video games, spoiling my dog Bubba, and reading. 
                            I'm always looking for new ways to challenge myself and improve my skills. I'm excited 
                            to share my work with you, and I hope you enjoy it!<br/><br/>
                            Thanks for visiting my website!
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </> 
        
    )

}
    
    
    



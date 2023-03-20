import './home.css'

export default function Home(){
    return(
        <body>
        <div className="home min-w-full flex justify-center flex-col items-center min-h-screen -z-10">
        <h1  className="blurbg text-5xl text-center"> Welcome to PVC studio.Com</h1>
        <p className='text-center text-xl blurbg'>Hi, We are the photographers for all your Life events &
            Functions. Your story is important and deserves to be told in
            the most beautyful way.</p>
        <p className='text-white'>Check Availability & Book Now!</p>
        <button className='btn blurbg border-2 rounded-lg p-2 mt-2' >Book Now</button>
              </div>

              
        <div id ="home2" className="home min-w-full min-h-screen -z-10 blurbgfull">
        <h1 className='text-5xl text-center'>OUR WORK</h1>
        <div className='w-90 flex flex-row '>
            <img src="img/services/baby.jpg" alt="baby image" className=' h-80 w-80 m-10 rounded-2xl' />
            <img src="img/services/wedding.jpg" alt="wedding image" className=' h-80 w-80 m-10 rounded-2xl' />

        </div>
         
        </div>

        </body>

    )
}
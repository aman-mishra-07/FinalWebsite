import './home.css'
import 'animate.css';

export default function Home(){
    return(
        <body>
        <div className="home min-w-full flex justify-center flex-col items-center min-h-screen">
        <h1  className="blurbg text-5xl text-center"> Welcome to PVC studio.Com</h1>
        <p className='text-center text-xl blurbg'>Hi, We are the photographers for all your Life events &
            Functions. Your story is important and deserves to be told in
            the most beautyful way.</p>
        <p>Check Availability & Book Now!</p>
        <button className='btn blurbg border-2 rounded-lg p-2 mt-2' >Book Now</button>
              </div>

        </body>

    )
}
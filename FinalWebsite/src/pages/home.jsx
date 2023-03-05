import './home.css'

export default function Home(){
    return(
        <>
        <div className="home min-w-full flex justify-center flex-col items-center min-h-screen">
        <h1 id='pvc' className="text-5xl text-center"> Welcome to PVC studio.Com</h1>
        <p className='text-center text-xl'>Hi, We are the photographers for all your Life events &
            Functions. Your story is important and deserves to be told in
            the most beautyful way.</p>
        <p>Check Availability & Book Now!</p>
        <button className='btn'>Book Now</button>
              </div>

        </>

    )
}
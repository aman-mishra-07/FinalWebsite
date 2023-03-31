export default function Contact() {
    return(
        <>
        <div className="parent flex flex-wrap flex-row justify-evenly items-center text-white w-full h-screen backdrop-blur-sm">
        <div className="left bg-transparent p-8 bg-white bg-opacity-20 rounded-3xl">
            <h1 className="text-center text-2xl">Aman PVC Studio</h1>
            <form action="post" className="p-4 flex flex-col ">
                <label htmlFor="user">Name</label><input type="text" name="user" placeholder="enter your name" className="bg-transparent m-2 rounded-2xl" />
                <label htmlFor="email">Email</label><input type="email" name="email" placeholder="enter your email" className="bg-transparent m-2 rounded-2xl" />
                <input type="submit" value="Submit" className=" bg-sky-700 p-2 m-2 rounded-2xl "/>
            </form>
        </div>
        <div className="right">hello</div>    
        </div>  
        </>
    )
    
}
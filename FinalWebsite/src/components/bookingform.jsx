export default function BookingForm(props) {
    return(
        <>
        <div className="flex flex-col right bg-transparent p-8 bg-slate-900 bg-opacity-40 rounded-3xl border border-white ">
                    <h1 className="text-center text-4xl">{props.formmsg}</h1>
                    <p className="text-center text-md">{props.msg}</p>

                        <form action="booking.php" method="get">    
                        <label htmlFor="name" className="text-xl">Name</label>
                        <input type="text" name="fname" placeholder="First Name" className="bg-transparent ml-5 rounded-2xl border-white "/>
                        <input type="text" name="lname" placeholder="Last Name" className="bg-transparent m-1 rounded-2xl border-white "/>
                        <label htmlFor="email" className="text-xl">E-mail</label>
                        <input type="email" name="email" />
                        </form>

                    <p className="text-center text-md">You may also Contact Us at: <br />{props.phone}</p>
                </div>
        </>
    )
    
}
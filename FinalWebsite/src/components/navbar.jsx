import { Navbar } from "flowbite-react"
import Logo  from "../assets/logo.png"

export default function Flownavbar(){
    return(
        <>
        <Navbar  fluid={true} rounded={true} className="shadow">
  <Navbar.Brand>
    <img
      src={ Logo }
      className="mr-3 h-6 sm:h-9 rounded-full"
      alt="PVC Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      PVC STUDIO
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link>
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
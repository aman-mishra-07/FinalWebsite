import { Footer } from "flowbite-react"
import Logo from "../assets/logo.png"

export default function Flowfooter(){
    return(
        <>
        <Footer container={true} className="bottom-0 absolute">
    <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
      <Footer.Brand
        href="https://PVCstudio.com"
        name="PVC STUDIO"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="PVCstudio™"
      year={2023}
    />
  </div>
</Footer>
        </>
    )
}
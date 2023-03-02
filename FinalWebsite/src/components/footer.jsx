import { Footer } from "flowbite-react"
import Logo from "../assets/logo.png"

export default function Flowfooter() {
  return (
    <>
      <Footer container={true} className="bottom-0 static">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-white">
            <Footer.Brand
              href="https://PVCstudio.com"
              name="PVC STUDIO"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#" className="pr-1">
                About
              </Footer.Link>
              <Footer.Link href="#" className="pr-1">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="pr-1">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="pr-1">
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
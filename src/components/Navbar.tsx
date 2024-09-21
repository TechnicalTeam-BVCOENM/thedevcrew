import Link from 'next/link'
import Button from './Buttons'
import LogoSvg from './svg/LogoSvg'


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-14 w-full">
      <Link href="/" className="flex items-center">
        <LogoSvg/> 
      </Link>
      <div className="hidden md:flex space-x-12">
        <Link href="#projects" className="hover:text-gray-300">PROJECTS</Link>
        <Link href="#clients" className="hover:text-gray-300">CLIENTS</Link>
        <Link href="#services" className="hover:text-gray-300">SERVICES</Link>
        <Link href="#about" className="hover:text-gray-300">ABOUT US</Link>
      </div>
      <Button>CONTACT</Button>
    </nav>
  )
}
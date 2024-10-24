import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <Image src="/my.jpg" alt="my picture" width={100} height={100} />
            <h1>Resume</h1>
            
            <ul>
                <li><Link href="#fi">Basic Information </Link></li>                
                <li><Link href="#se">Education </Link></li>                
                <li><Link href="#th">Contact Informaion </Link></li>                
                <li><Link href="#fo">Skills </Link></li>                
                <li><Link href="#fif">Portfolio </Link></li>                
            </ul>
            
        </nav>
    )
}
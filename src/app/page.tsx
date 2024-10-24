import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <br />
    <div id="main" >
  
        <div id="fi">
        <h1 >Basic Information :-</h1>
        <br />
        <p>My name is <b>Taha Ali Abbasi</b>.I am a <b>Frontend Web Developer</b>.I have passed <b>Intermediate</b> recently and now i am ready to take admission in <b>BSCS</b>.</p>
        </div>
        <br /><br /><br /><br />
        <hr />
        <div id="se">
        <h1 >Education :-</h1>
        <br />
        <p>I have passed matric from  <b>T.C.F  school</b> in science group.</p>
        <p>After matric i have done three month's short cources of <b>English language and MS Office</b> from <b>Ebrahim Jamal Institute of IT</b> located at Kharadar, Karachi.</p>
        <p>I have passed Intermediate in <b>Pre-Medical</b> from <b>Government Degree Boys College, Nishter Road, Karachi</b>.</p>
        <p>Now i am a student of <b>GIAIC</b> Quarter 2 <b><i> ( It is in progress )</i></b>.</p>
        </div>
        <br /><br /><br /><br />
        <hr />
        <div id="th">
          <h1 >Contact Informaion :-</h1>
          <br />
          <p>Email : <Link id="a" target="_blanl" href="mailto:tahaaliabbasi333@gmail.com">Click here </Link>to mail me </p>
          <p>Contact : 03142236170</p>
          <p>Whatsapp Number : +923142236170</p>
          <p>Github account : <Link id="a" target="_blank" href="https://github.com/TahaAliAbbasi?tab=repositories">Click here </Link>to access my github repositories</p>
          <p>Linked in account : <Link id="a" target="_blank" href="https://www.linkedin.com/in/taha-ali-abbasi-17a277290/">Click here </Link>to access my linked in account</p>
        </div>
        <br /><br /><br /><br />
        <hr />
          <div id="fo">
          <h1 >Skills :-</h1>
          <br />
          <div id="logo">
            <div>
            <Image src="/html.png" alt="logo of HTML" width={100} height={100} />
            <h2>HTML</h2>
            <p>I have completed HTML course from youtube.</p>
            </div>

          <div>
          <Image src="/css.png" alt="logo of CSS" width={100} height={100} />
          <h2>CSS</h2>
          <p>I am doing CSS course from youtube. ( in progress )</p>
          </div>

          <div>
          <Image src="/js.png" alt="logo of JS" width={100} height={100} />
          <h2>JavaScript</h2>
          <p>I have completed JS from GIAIC in first quarter.</p>
          </div>

          <div>
          <Image src="/ts.png" alt="logo of TS" width={100} height={100} />
          <h2>TypeScript</h2>
          <p>I have completed TS from GIAIC in first quarter.</p>
          </div>

          <div>
          <Image src="/next.jpeg" alt="logo of Next.JS" width={100} height={100} />
          <h2>Next.JS</h2>
          <p>I am doing Next.JS from GIAIC in second quarter.
           <br /> ( in progress )</p>
          </div>

          </div>
          </div>
          <br /><br /><br /><br />

          
        <div id="fif">
          <h1 >Portfolio/Projects :-</h1>
          <br />
          <div id="flex">
          <div id="cli">
              <h2>JS/TS cli based projects:</h2>
              <br />
              <ol>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/Simple-calculator">cli-simple-calculator</Link></li>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/cli-number-guessing-game">cli-number-guessing-game</Link></li>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/atm">cli-atm</Link></li>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/todo-list">cli-todo-list</Link></li>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/currency-converter">cli-currency-converter</Link></li>
                <li><Link id="a" target="_blanl" href="https://github.com/TahaAliAbbasi/Word-counter">cli-Word-counter</Link></li>
                
              </ol>
            </div>
            

            <div id="comb">
              <h2>HTML,CSS,JS and TS Combine projects "deployed on vercel" :</h2>
              <br />
              <ol>
                <li><Link id="a" target="_blanl" href="https://calculator-by-using-html-css-and-js.vercel.app/">Calculator</Link></li>
                <li><Link id="a" target="_blanl" href="https://taha-ali-abbasi-resume-bulder-project.vercel.app/">Resume-bulder-form</Link></li>
              </ol>
            </div>

            <div id="assig">
              <h2>Next.js assignments "deployed on vercel" :</h2>
              <br />
              <ol>
                <li><Link id="a" target="_blanl" href="https://nextjs-assignment1-1pbk105uk-taha-ali-abbasis-projects.vercel.app/country">Dynamic routing</Link></li>
                <li><Link id="a" target="_blanl" href="https://nextjs-assignment2-psi.vercel.app/">Dynamic routing with component and props</Link></li>
                <li>My resume is also made from Next.js</li>
              </ol>
            </div>
          </div>
            
        </div>

    </div>
    </>

  );
}

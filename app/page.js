import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Page() {
  return (
  <main className="m-4 bg-beige min-h-screen" >
      <h1 className="text-4xl font-bold m-6 text-center font-serif">CPRG 306: Web Development 2 - Assignments</h1>
      <br />
      <StudentInfo />
      <br />
      <Link className="hover:underline" href="/week2">Click to go to Week 2</Link>  
      <br />    
      <Link className="hover:underline" href="/week3">Click to go to Week 3</Link>
      <br />    
      <Link className="hover:underline" href="/week4">Click to go to Week 4</Link>      
      <br />    
      <Link className="hover:underline" href="/week5">Click to go to Week 5</Link>  
      <br />    
      <Link className="hover:underline" href="/week6">Click to go to Week 6</Link>
      <br />    
      <Link className="hover:underline" href="/week7">Click to go to Week 7</Link>
      <br />    
      <Link className="hover:underline" href="/week8">Click to go to Week 8</Link>               
      </main>    
  );
}
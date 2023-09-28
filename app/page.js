import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Page() {
  return (
  <main className="m-4 bg-beige" >
      <h1 className="text-4xl font-bold m-6 text-center font-serif">CPRG 306: Web Development 2 - Assignments</h1>
      <br />
      <StudentInfo />
      <br />
      <Link href="/week2">Click to go to Week 2</Link>  
      <br />    
      <Link href="/week3">Click to go to Week 3</Link>    
      </main>    
  );
}
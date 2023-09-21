import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Page() {
  return (
  <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <br />
      <StudentInfo />
      <br />
      <Link href="/week2">Click to go to Week 2</Link>      
      </main>    
  );
}
import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Page() {
  return (
  <main className="m-4">
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <br />
      <StudentInfo />
      <br />
      <Link href="/week2">Click to go to Week 2</Link>      
      </main>    
  );
}
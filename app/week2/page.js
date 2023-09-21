import Link from "next/link";
import StudentInfo from "../StudentInfo.js";  

export default function Page() {
    return (
    <main>
        <h1>My Shopping List</h1>
        <br />
        <StudentInfo />
        <br />
        <Link href="/">Click to go back to Home</Link>
        </main>    
    );
}
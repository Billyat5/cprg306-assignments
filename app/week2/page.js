import Link from "next/link";
import StudentInfo from "../StudentInfo.js";  

export default function Page() {
    return (
      <main className="m-4">
        <h1 className="text-2xl">My Shopping List</h1>
        <div className="flex justify-between items-center">
            <div className="flex-grow"></div>
            <StudentInfo />
        </div>
      </main>    
    );
}
import StudentInfo from "../StudentInfo.js";  

export default function Page() {
    return (
      <main className="m-4 bg-beige min-h-screen">
        <h1 className="text-4xl font-bold m-6 text-center font-serif">
        Shopping List
        </h1>
        <div className="flex justify-between items-center">
            <div className="flex-grow"></div>
            <StudentInfo />
        </div>
      </main>    
    );
}
import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <p>Name: Billy Chan</p>
            <p>Course Section: CPRG 306 B</p>
            <Link href="https://github.com/billyat5">
                GitHub Repository
            </Link>
        </div>
    )
}
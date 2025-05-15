import React from 'react';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='py-4 px-6 flex items-center justify-center mt-5 mb-5'>
            <div className="flex-col font-bold">
                <Link href="/" className="group relative bg-gray-800 hover:bg-gray-600 px-5 py-3 text-lg text-white max-w-[200px]">
                    Home
                </Link>
                <Link href="/jobs" className="group relative bg-gray-800 hover:bg-gray-600 px-5 py-3 text-lg text-white max-w-[200px]">
                    Experience
                </Link>
                <Link href="/projects" className="group relative bg-gray-800 hover:bg-gray-600 px-5 py-3 text-lg text-white max-w-[200px]">
                    Projects
                </Link>
            </div>
        </nav>
    )
}
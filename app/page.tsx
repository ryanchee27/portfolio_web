import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="pl-20 pt-10 pb-20 flex items-center gap-5 z-[10]">
        {/* header image and info */}
        <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
          <Link href='https://www.linkedin.com/in/ryan-chee-337251313/' target="_blank" rel="noopener noreferrer">
            <Image
              src='/images/headshot.png'
              alt='Ryan Chee'
              width={400}
              height={400}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="p-30 items-center">
          <h1 className="text-[80px] text-white font-bold">
            Ryan Chee
          </h1>
          <p className="text-[25px] text-white italics">
            Computer Science Major at James Madison University
          </p>
        </div>
      </div>

      {/* About me section */}
      <section className=" text-white mr-30 ml-30 mb-30 p-10 flex flex-col gap-5 z-[10] bg-gray-800 rounded-lg">
        <h2 className="justify-center text-[40px] font-semibold mb-4">
          About Me:
        </h2>
        <p className="text-[18px] leading-relaxed">
          I&apos;m a Junior at James Madison University studying Computer Science.<br></br>
          Notable Next Semester Classes:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>CS 327 - Discrete Structures II</li>
          <li>CS 330 - Societal and Ethical Issues in Computer Science</li>
          <li>CS 347 - Web Development</li>
          <li>CS 361 - Computer Systems II</li>
        </ul>
        <p className="text-[18px] leading-relaxed">
          In my time outside of school, I like to workout, research blockchain technology and cryptocurrency, go snowboarding, and spend time with friends.
        </p>
      </section>
    </main>
  );
}

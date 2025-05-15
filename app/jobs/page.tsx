import React from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
};

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(
    `${process.env.PORTFOLIO_INFO_API}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  const { jobs } = await res.json();
  return jobs;
}

export default async function jobs() {
  const jobs = await fetchJobs();

  const parsed = jobs.map(job => {
    const raw = job.description;
    const items =
      raw.startsWith('{') && raw.endsWith('}')
        ? raw.slice(1, -1).split('","').map(s => s.replace(/^"|"$/g, ''))
        : [];
    return { ...job, items };
  });

  return (
    <main className='flex justify-center'>
      <div className='inline-block bg-gray-800 p-6 rounded-lg shadow-lg'>
        <div className="bg-gray-800 p-5 flex flex-col gap-5">
          <h1 className="text-[50px] text-white font-bold underline">
            Job Experience
          </h1>
          <p className="text-[20px] text-white">
            Welcome to my Experience page, where I map out the journey of my professional growth.
          </p>
          <div className="space-y-8 max-w-[1080px] pr-5">
            {parsed.map(job => (
              <section key={job.id} className="bg-gray-600 text-white p-6 rounded shadow">
                <h2 className="text-2xl font-semibold">{job.title}</h2>
                <p className="italic">{job.company}</p>
                <p className="text-sm mb-4">
                  {job.start_date} – {job.end_date}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {job.items.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
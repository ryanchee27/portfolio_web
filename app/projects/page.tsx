import React from 'react';

type Project = {
    id: number;
    title: string;
    languages: string;
    description: string;
};

async function fetchProjects(): Promise<Project[]> {
    const res = await fetch(
        `${process.env.PORTFOLIO_INFO_API}`,
    );
    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }
    const { projects } = await res.json();
    return projects;
}

export default async function projects() {
    const projects = await fetchProjects();

    const parsed = projects.map(project => {
        const raw = project.description;
        const items =
            raw.startsWith('{') && raw.endsWith('}')
                ? raw.slice(1, -1).split('","').map(s => s.replace(/^"|"$/g, ''))
                : [];
        return { ...project, items };
    });

    return (
        <main className='flex justify-center'>
            <div className='inline-block bg-gray-800 p-6 rounded-lg shadow-lg'>
                <div className="bg-gray-800 p-5 flex flex-col gap-5">
                    <h1 className="text-[50px] text-white font-bold underline">
                        Projects
                    </h1>
                    <p className="text-[20px] text-white">
                        Welcome to my Projects page, where I showcase projects I've been working on.
                    </p>
                    <div className="space-y-8">
                        {parsed.map(project => (
                            <section key={project.id} className="bg-gray-600 text-white p-6 rounded shadow">
                                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                <p className='italic text-shadow-gray-600 mb-2'>{project.languages}</p>
                                <ul className="list-disc list-inside space-y-2">
                                    {project.items.map((desc, i) => (
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
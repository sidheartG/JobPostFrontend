import React from "react";

interface JobPost {
  id: number;
  title: string;
  company: string;
  vacancies: number;
  location: string;
  experience: string;
  salary: string;
  description: string;
  jd: string;
  totalCandidates: number;
}

interface JobPostsList {
  jobPosts: JobPost[];
}

const JobPostTable: React.FC<JobPostsList> = ({ jobPosts }) => {
  return (
    <div>
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">Requisition ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Job Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Company Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Total Vacancies</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Experience</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Salary</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Job Description</th> 
            <th className="px-6 py-3 text-left text-sm font-semibold">Total Candidates</th> 
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
        {jobPosts.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center text-gray-500">
                No data to show
              </td>
            </tr>
          ) : (
            jobPosts.map((jobPost) => (
              <tr key={jobPost.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{jobPost.id}</td>
                <td className="px-6 py-4">{jobPost.title}</td>
                <td className="px-6 py-4">{jobPost.company}</td>
                <td className="px-6 py-4">{jobPost.vacancies}</td>
                <td className="px-6 py-4">{jobPost.location}</td>
                <td className="px-6 py-4">{jobPost.experience}</td>
                <td className="px-6 py-4">{jobPost.salary}</td>
                <td className="px-6 py-4">{jobPost.jd}</td>
                <td className="px-6 py-4">{jobPost.totalCandidates}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobPostTable;

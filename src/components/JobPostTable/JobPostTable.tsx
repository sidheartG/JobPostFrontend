import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditJobForm from "../EditJobForm/EditJobForm";
import { JobPost } from "../../Types/types";

interface JobPostsList {
  jobPosts: JobPost[];
  setDeleteDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSelectedJobs: React.Dispatch<React.SetStateAction<number[]>>;
}

const JobPostTable: React.FC<JobPostsList> = ({
  jobPosts,
  setDeleteDisabled,
  setCurrentSelectedJobs,
}) => {
  const [selectedJobs, setSelectedJobs] = useState<number[]>([]);
  const [isEditFormOpen, setEditFormIsOpen] = useState(false);
  const [currentEditJob, setCurrentEditJob] = useState<JobPost | null>(null);

  const ChangeEditFormState = (value: boolean) => {
    setEditFormIsOpen(value);
  };
  const handleCheckboxChange = (jobId: number) => {
    setSelectedJobs((prevSelected) =>
      prevSelected.includes(jobId)
        ? prevSelected.filter((id) => id !== jobId)
        : [...prevSelected, jobId]
    );
  };

  const handleEditJob = (jobPost: JobPost) => {
    console.log("Editing job with ID:", jobPost);
    ChangeEditFormState(true);
    setCurrentEditJob(jobPost);
  };

  useEffect(() => {
    if (selectedJobs.length > 0) {
      setDeleteDisabled(false);
      setCurrentSelectedJobs(selectedJobs);
    } else {
      setDeleteDisabled(true);
    }
  });
  return (
    <div>
      {isEditFormOpen && currentEditJob && (
        <EditJobForm
          setEditFormIsOpen={ChangeEditFormState}
          jobPost={currentEditJob}
        />
      )}
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold"></th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Requisition ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Job Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Company Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Total Vacancies
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Location
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Experience
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Salary
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Job Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Total Candidates
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold"></th>
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
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedJobs.includes(jobPost.id)}
                    onChange={() => handleCheckboxChange(jobPost.id)}
                  />
                </td>
                <td className="px-6 py-4">{jobPost.id}</td>
                <td className="px-6 py-4">{jobPost.title}</td>
                <td className="px-6 py-4">{jobPost.company}</td>
                <td className="px-6 py-4">{jobPost.vacancies}</td>
                <td className="px-6 py-4">{jobPost.location}</td>
                <td className="px-6 py-4">{jobPost.experience}</td>
                <td className="px-6 py-4">{jobPost.salary}</td>
                <td className="px-6 py-4">{jobPost.jd}</td>
                <td className="px-6 py-4">{jobPost.totalCandidates}</td>
                <td
                  className="px-6 py-4"
                  onClick={() => handleEditJob(jobPost)}
                >
                  <FaEdit />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobPostTable;

import { useState } from "react";

import { JobPost } from "../../Types/types";

interface EditJobFormProps {
  setEditFormIsOpen: (value: boolean) => void;
  jobPost: JobPost;
}

const EditJobForm: React.FC<EditJobFormProps> = ({
  setEditFormIsOpen,
  jobPost,
}) => {
  const [jobTitle, setJobTitle] = useState(jobPost.title);
  const [company, setCompany] = useState(jobPost.company);
  const [vacancies, setVacancies] = useState(jobPost.vacancies);
  const [location, setLocation] = useState(jobPost.location);
  const [experience, setExperience] = useState(jobPost.experience);
  const [salary, setSalary] = useState(jobPost.salary);
  const [jd, setJd] = useState(jobPost.jd);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "Form submitted: " +
        jobTitle +
        " " +
        company +
        " " +
        vacancies +
        " " +
        location +
        " " +
        experience +
        " " +
        salary +
        " " +
        jd
    );
    setEditFormIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) setEditFormIsOpen(false);
      }}
    >
      <div className="relative p-4 w-full max-w-md  max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-sm dark:bg-gray-700 modal-scroll">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add new job
          </h3>
          <button
            type="button"
            onClick={() => {
              setEditFormIsOpen(false);
            }}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <form className="p-4" onSubmit={handleFormSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Job Title
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Write Job title"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Company Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Type Company name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Salary
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Ex: ₹6,00,000 - ₹9,00,000"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Location
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Write job location here"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Experience
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Ex: 2-3 years"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Total vacancies
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Type total vacancies"
                required
                value={vacancies}
                onChange={(e) => setVacancies(parseInt(e.target.value))}
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Job Description
              </label>
              <textarea
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Write Job description here"
                required
                value={jd}
                onChange={(e) => setJd(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJobForm;

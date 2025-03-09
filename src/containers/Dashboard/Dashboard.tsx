import Selector from "../../components/Selector/Selector";
import JobPostTable from "../../components/JobPostTable/JobPostTable";
import "./Dashboard.css";
import { FaPlus, FaShare } from "react-icons/fa";
import AddJobForm from "../../components/AddJobForm/AddJobForm";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const options = ["Morgan Pharma", "Morgan Bajaj", "Morgan IT"];
  const jobPosts = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechNova Solutions",
      vacancies: 3,
      location: "Bangalore, India",
      experience: "2-4 years",
      salary: "₹8,00,000 - ₹12,00,000",
      description:
        "Looking for a skilled Software Engineer proficient in Node.js and React.",
      jd: "Develop and maintain web applications, collaborate with cross-functional teams, and ensure scalability.",
      totalCandidates: 50,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "InnovateX Labs",
      vacancies: 2,
      location: "Remote",
      experience: "1-3 years",
      salary: "₹6,00,000 - ₹9,00,000",
      description:
        "Seeking a creative Frontend Developer with expertise in React.js and Tailwind CSS.",
      jd: "Design and implement user-friendly UI components with responsive layouts.",
      totalCandidates: 30,
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Insight Analytics",
      vacancies: 1,
      location: "Mumbai, India",
      experience: "3-5 years",
      salary: "₹10,00,000 - ₹15,00,000",
      description:
        "Hiring an experienced Data Analyst with a strong background in SQL and Python.",
      jd: "Analyze complex datasets, generate insights, and build data visualization dashboards.",
      totalCandidates: 40,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudScale Pvt Ltd",
      vacancies: 2,
      location: "Hyderabad, India",
      experience: "2-5 years",
      salary: "₹12,00,000 - ₹18,00,000",
      description:
        "Looking for a DevOps Engineer experienced in AWS, Kubernetes, and CI/CD pipelines.",
      jd: "Automate deployment processes, manage cloud infrastructure, and ensure system reliability.",
      totalCandidates: 35,
    },
    {
      id: 5,
      title: "Product Manager",
      company: "NextGen Innovations",
      vacancies: 1,
      location: "Pune, India",
      experience: "5+ years",
      salary: "₹20,00,000 - ₹30,00,000",
      description:
        "Seeking a Product Manager with experience in SaaS product development.",
      jd: "Define product roadmap, collaborate with teams, and drive strategic decision-making.",
      totalCandidates: 20,
    },
  ];
  const [isAddFormOpen, setAddFormIsOpen] = useState(false);

  const ChangeFormState = () => {
    setAddFormIsOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log("Modal open state changed:", isAddFormOpen);
  }, [isAddFormOpen]);
  return (
    <div>
      <div className="jp__dashboard__heading">
        <h1>Dashboard</h1>
      </div>
      <div className="jp__dashboard__container">
        <div className="jp__dashboard__selector">
          <Selector items={options} />
        </div>
        <div className="jp__dashboard__buttons">
          <div
            onClick={() => setAddFormIsOpen(true)}
            className="jp__dashboard__buttons__add_job_post"
          >
            <button
              type="button"
              className=" flex items-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add Job <FaPlus />
            </button>
            {isAddFormOpen && <AddJobForm setAddFormIsOpen={ChangeFormState} />}
          </div>
          <div className="jp__dashboard__buttons__export_job_posts">
            <button
              type="button"
              className="flex items-center gap-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Export <FaShare />
            </button>
          </div>
        </div>
        <div className="jp__dashboard__table">
          <JobPostTable jobPosts={jobPosts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

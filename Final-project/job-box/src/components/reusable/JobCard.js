import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobData }) => {
  console.log(jobData);
  const navigate = useNavigate();
  const { _id, position, companyName, location, employmentType } =
    jobData || {};

  return (
    <div
      key={_id}
      className="p-5 border border-gray-300 shadow-xl rounded-2xl text-primary"
    >
      <div className="flex justify-between text-primary">
        <div>
          <p className="text-xl">{position}</p>
          <small className="text-primary/70 ">
            by{" "}
            <span className="font-semibold transition-all cursor-pointer hover:text-primary hover:underline">
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <p>{employmentType}</p>
        <button className="btn" onClick={() => navigate(`/job-details/${_id}`)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;

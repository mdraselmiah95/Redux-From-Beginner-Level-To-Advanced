import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();

  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        {data?.data?.map(({ position, companyName, _id }) => (
          <div key={_id} className="p-4 border">
            <h2 className="mb-2 font-bold text-gray-600 ">{position}</h2>
            <p>{companyName}</p>
            <button
              className="px-4 py-2 mt-3 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-600"
              onClick={() => navigate(`/job-details/${_id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

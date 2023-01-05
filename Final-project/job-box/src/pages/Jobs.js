import React from "react";
import { useGetJobsQuery } from "../features/job/jobApi";
import JobCard from "../components/reusable/JobCard";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-32 h-32 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-14">
      <div className="p-5 bg-primary/10 rounded-2xl">
        <h1 className="text-xl font-semibold">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <JobCard jobData={data} />
      </div>
    </div>
  );
};

export default Jobs;

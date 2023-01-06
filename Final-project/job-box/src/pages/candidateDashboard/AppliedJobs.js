import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-2 ">
      <h1 className="py-5 text-lg font-semibold text-primary">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-5 pb-5">
        <JobCard jobData={data} />
      </div>
    </div>
  );
};

export default AppliedJobs;

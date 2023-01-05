import React from "react";

import { useParams } from "react-router-dom";
import { useJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useJobByIdQuery(id);
  const { position } = data?.data || {};

  return (
    <div className="pt-14">
      <h1>this is job details</h1>
      <h3>{position}</h3>
      <button className="border">Apply</button>
    </div>
  );
};

export default JobDetails;

import React, { useState } from "react";
import meeting from "../assets/meeting.jpg";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useApplyMutation,
  useJobByIdQuery,
  useQuestionMutation,
  useReplyMutation,
} from "../features/job/jobApi";
import { toast } from "react-hot-toast";

const JobDetails = () => {
  const [reply, setReply] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [apply] = useApplyMutation();
  const [sendQuestion] = useQuestionMutation();
  const [sendReply] = useReplyMutation();
  const { data, isLoading, isError } = useJobByIdQuery(id);

  // TODO => pollingInterval is use for fetching data in real time   { pollingInterval: 500, }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-32 h-32 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    _id,
  } = data?.data || {};

  const handleApply = () => {
    if (user.role === "employer") {
      toast.error("You need a candidate account to apply");
      return;
    }

    if (user.role === "") {
      navigate("/register");
      return;
    }
    const data = {
      userId: user._id,
      email: user.email,
      jobId: _id,
    };
    console.log(data);
    apply(data);
  };

  const handleQuestion = (data) => {
    const queData = {
      ...data,
      userId: user._id,
      email: user.email,
      jobId: _id,
    };
    sendQuestion(queData);
    reset();
  };

  const handleReply = (id) => {
    const data = {
      reply,
      userId: id,
    };
    sendReply(data);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-5 pt-14">
        <div className="col-span-9 mb-10">
          <div className="overflow-hidden h-80 rounded-xl">
            <img className="object-cover w-full h-full" src={meeting} alt="" />
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between mt-5">
              <h1 className="text-xl font-semibold text-primary">{position}</h1>
              <button onClick={handleApply} className="btn">
                Apply
              </button>
            </div>
            <div>
              <h1 className="mb-3 text-lg font-medium text-primary">
                Overview
              </h1>
              <p>{overview}</p>
            </div>
            <div>
              <h1 className="mb-3 text-lg font-medium text-primary">Skills</h1>
              <ul>
                {skills?.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-3 text-lg font-medium text-primary">
                Requirements
              </h1>
              <ul>
                {requirements?.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-3 text-lg font-medium text-primary">
                Responsibilities
              </h1>
              <ul>
                {responsibilities?.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <div>
              <h1 className="mb-5 text-xl font-semibold text-primary">
                General Q&A
              </h1>
              <div className="my-2 text-primary">
                {queries?.map(({ question, email, reply, id, index }) => (
                  <div key={id}>
                    <small>{email}</small>
                    <p className="text-lg font-medium">{question}</p>
                    {reply?.map((item, index) => (
                      <p
                        key={index}
                        className="relative flex items-center gap-2 left-5"
                      >
                        <BsArrowReturnRight /> {item}
                      </p>
                    ))}

                    {user.role === "employer" && (
                      <div className="flex gap-3 my-5">
                        <input
                          required
                          placeholder="Reply"
                          type="text"
                          className="w-full"
                          onBlur={(e) => setReply(e.target.value)}
                        />
                        <button
                          className="grid transition-all border rounded-full shrink-0 h-14 w-14 bg-primary/10 border-primary hover:bg-primary place-items-center text-primary hover:text-white"
                          type="button"
                          onClick={() => handleReply(id)}
                        >
                          <BsArrowRightShort size={30} />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {user.role === "employee" && (
                <form onSubmit={handleSubmit(handleQuestion)}>
                  <div className="flex gap-3 my-5">
                    <input
                      required
                      placeholder="Ask a question..."
                      type="text"
                      className="w-full"
                      {...register("question")}
                    />
                    <button
                      className="grid transition-all border rounded-full shrink-0 h-14 w-14 bg-primary/10 border-primary hover:bg-primary place-items-center text-primary hover:text-white"
                      type="submit"
                    >
                      <BsArrowRightShort size={30} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="p-5 space-y-5 rounded-xl bg-primary/10 text-primary">
            <div>
              <p>Experience</p>
              <h1 className="text-lg font-semibold">{experience}</h1>
            </div>
            <div>
              <p>Work Level</p>
              <h1 className="text-lg font-semibold">{workLevel}</h1>
            </div>
            <div>
              <p>Employment Type</p>
              <h1 className="text-lg font-semibold">{employmentType}</h1>
            </div>
            <div>
              <p>Salary Range</p>
              <h1 className="text-lg font-semibold">{salaryRange}</h1>
            </div>
            <div>
              <p>Location</p>
              <h1 className="text-lg font-semibold">{location}</h1>
            </div>
          </div>
          <div className="p-5 mt-5 space-y-5 rounded-xl bg-primary/10 text-primary">
            <div>
              <h1 className="text-lg font-semibold">{companyName}</h1>
            </div>
            <div>
              <p>Company Size</p>
              <h1 className="text-lg font-semibold">Above 100</h1>
            </div>
            <div>
              <p>Founded</p>
              <h1 className="text-lg font-semibold">2001</h1>
            </div>
            <div>
              <p>Email</p>
              <h1 className="text-lg font-semibold">company.email@name.com</h1>
            </div>
            <div>
              <p>Company Location</p>
              <h1 className="text-lg font-semibold">Los Angeles</h1>
            </div>
            <div>
              <p>Website</p>
              <a className="text-lg font-semibold" href="/">
                https://website.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

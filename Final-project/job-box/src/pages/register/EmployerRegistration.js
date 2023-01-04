import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../../features/auth/authApi";

const EmployerRegistration = () => {
  const [countries, setCountries] = useState([]);
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: {
      email,
    },
  });

  const term = useWatch({ control, name: "term" });
  const navigate = useNavigate();
  const [postUser, { isLoading, isError, isSuccess }] = useRegisterMutation();

  const businessCategory = [
    "Automotive",
    "Business Support & Supplies",
    "Computers & Electronics",
    "Construction & Contractors",
    "Design Agency",
    "Education",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine",
    "Home & Garden",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale, Distribution",
    "Merchants (Retail)",
    "Miscellaneous",
    "Personal Care & Services",
    "Real Estate",
    "Travel & Transportation",
  ];

  const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    postUser({ ...data, role: "employer" });
    reset();
  };

  if (isSuccess) {
    toast.success("Successfully Data inserted 🟢");
  }
  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="flex items-center mt-5 cursor-pointer w-fit"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex items-center justify-center p-10 overflow-auto">
        <form
          className="flex flex-wrap justify-between max-w-3xl gap-3 p-10 shadow-lg bg-secondary/20 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full mb-5 text-2xl text-primary">Candidate</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              disabled
              className="cursor-not-allowed "
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" htmlFor="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company's name
            </label>
            <input type="text" {...register("companyName")} id="companyName" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="employeeRange">
              Number of employee
            </label>
            <select {...register("employeeRange")} id="employeeRange">
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="companyCategory">
              Company's Category
            </label>
            <select {...register("companyCategory")} id="companyCategory">
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option value={category}>{category}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="roleInCompany">
              Your role in company
            </label>
            <input
              type="text"
              {...register("roleInCompany")}
              id="roleInCompany"
            />
          </div>

          <div className="flex items-center justify-between w-full mt-3">
            <div className="flex w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
